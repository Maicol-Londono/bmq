import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check, Edit2, AlertCircle } from 'lucide-react';
import { type CoverageType, type PricingCategory, PRICING_CATEGORIES, formatCurrency } from '../../lib/pricing';
import { getJson, postJson } from '../../lib/api';
import { useAuth, type PaymentMode } from '../../contexts/AuthContext';
import { payWithWompi } from '../../lib/payments';

export type RequestStatus = 'submitted' | 'payment_pending' | 'payment_verification' | 'paid' | 'issued';

interface CoverageRequest {
  coverageType: CoverageType;
  procedure: {
    pricingCategory: PricingCategory | '';
    name: string;
    scheduledDate: string;
    scheduledTime: string; 
    locationType: string;
  };
  patient: {
    fullName: string;
    documentType: string;
    documentNumber: string;
  };
  /** Profesional tratante: solo se elige en afiliaciones de institución. */
  professional: {
    id: string;
  };
  payment: {
    method: PaymentMode | null;
  };
  consents: {
    dataTreatment: boolean;
    informationAccuracy: boolean;
  };
}

const initialData: CoverageRequest = {
  coverageType: 'basica',
  procedure: { pricingCategory: '', name: '', scheduledDate: '', scheduledTime: '', locationType: '' },
  patient: { fullName: '', documentType: '', documentNumber: '' },
  professional: { id: '' },
  payment: { method: null },
  consents: { dataTreatment: false, informationAccuracy: false }
};

const STEPS = [
  'Cobertura',
  'Procedimiento',
  'Paciente',
  'Liquidación y Pago',
  'Revisión',
  'Confirmación'
];

const Input = ({ label, required, error, warning, ...props }: any) => (
  <div className="flex flex-col mb-8">
    <label className="text-[0.65rem] tracking-[0.2em] uppercase text-bmq-ivory/50 mb-2">
      {label} {required && <span className="text-bmq-gold ml-1">*</span>}
    </label>
    <input 
      className={`bg-transparent border-b ${error ? 'border-red-500/50' : warning ? 'border-amber-500/50' : 'border-white/20'} pb-2 text-bmq-ivory font-light focus:outline-none focus:border-bmq-ivory transition-colors placeholder:text-white/10`} 
      {...props} 
    />
  </div>
);

const Select = ({ label, required, options, error, ...props }: any) => (
  <div className="flex flex-col mb-8">
    <label className="text-[0.65rem] tracking-[0.2em] uppercase text-bmq-ivory/50 mb-2">
      {label} {required && <span className="text-bmq-gold ml-1">*</span>}
    </label>
    <select 
      className={`bg-transparent border-b ${error ? 'border-red-500/50' : 'border-white/20'} pb-2 text-bmq-ivory font-light focus:outline-none focus:border-bmq-ivory transition-colors appearance-none`} 
      {...props}
    >
      <option value="" disabled className="bg-bmq-charcoal text-white/50">Seleccione...</option>
      {options.map((opt: any) => <option key={opt.value} value={opt.value} className="bg-bmq-charcoal text-white">{opt.label}</option>)}
    </select>
  </div>
);

const LOCATION_OPTIONS = [
  { label: 'Clínica', value: 'Clínica' },
  { label: 'Consultorio', value: 'Consultorio' },
];

/** Procedimiento del catálogo (GET /procedures). */
interface ProcedureOption {
  id: string;
  name: string;
  category: string;
}

/** Paciente devuelto por GET /patients. */
interface PatientMatch {
  id: string;
  first_name: string;
  last_name: string;
  full_name: string;
  document_type: string;
  document_number: string;
}

/**
 * Buscador de pacientes de la afiliación activa: lista las coincidencias (documento o nombre)
 * y, al elegir una, entrega sus datos para precargar el formulario.
 */
function PatientSearch({ affiliationId, onSelect }: { affiliationId?: string; onSelect: (patient: PatientMatch) => void }) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState<PatientMatch[]>([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open || !affiliationId) return;
    let cancelled = false;
    setLoading(true);
    const timer = setTimeout(async () => {
      try {
        const res = await getJson<{ data: PatientMatch[] }>(
          `/patients?affiliation_id=${encodeURIComponent(affiliationId)}&query=${encodeURIComponent(query.trim())}`,
        );
        if (!cancelled) setResults(res.data);
      } catch (err) {
        console.error(err);
        if (!cancelled) setResults([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }, 250);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [open, query, affiliationId]);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  return (
    <div ref={containerRef} className="relative bg-white/5 p-4 border border-white/10 mb-8">
      <h4 className="text-xs tracking-widest text-bmq-gold mb-3 uppercase">Buscar Paciente Existente</h4>
      <input
        type="text"
        value={query}
        placeholder="Escriba documento o nombre..."
        onFocus={() => setOpen(true)}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        className="w-full bg-bmq-black border border-white/10 p-3 text-bmq-ivory text-sm focus:border-bmq-gold outline-none transition-colors"
      />
      {open && (
        <ul className="absolute left-4 right-4 top-full -mt-4 z-20 max-h-64 overflow-y-auto bg-bmq-charcoal border border-white/10 shadow-xl">
          {loading && <li className="px-4 py-3 text-sm text-bmq-ivory/50 font-light">Buscando...</li>}
          {!loading && results.length === 0 && (
            <li className="px-4 py-3 text-sm text-bmq-ivory/50 font-light">
              No hay pacientes que coincidan. Diligencie los datos abajo y se guardará como paciente nuevo.
            </li>
          )}
          {!loading &&
            results.map((p) => (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => {
                    onSelect(p);
                    setQuery('');
                    setOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 text-sm text-bmq-ivory hover:bg-white/10 transition-colors flex justify-between gap-4"
                >
                  <span className="font-light">{p.full_name}</span>
                  <span className="text-bmq-ivory/50 text-xs uppercase shrink-0">
                    {p.document_type} {p.document_number}
                  </span>
                </button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

/** Respuesta de POST /coverage-requests/preview (montos como string decimal). */
interface CoveragePreview {
  coverage_amount: string;
  tax_amount: string;
  total_amount: string;
  /** Tasa de IVA (en %) definida por el backend, p. ej. "19.00". */
  tax_rate?: string;
  /** Saldo disponible de la bolsa (balance - reservado) al momento del preview. */
  wallet_available?: string;
}

/** Profesional devuelto por GET /api/bmq/professionals (vinculado y activo en la institución). */
interface TreatingProfessional {
  id: string;
  full_name: string;
  document_number: string | null;
}

type ProfessionalsStatus = 'idle' | 'loading' | 'ready' | 'error';

export function SolicitarPoliza() {
  const { user, activeAffiliation } = useAuth();
  // En una afiliación de institución hay que elegir el profesional tratante;
  // en una de profesional el tratante es el propio afiliado (sin selector).
  const isInstitution = activeAffiliation?.kind === 'institution';
  const [professionals, setProfessionals] = useState<TreatingProfessional[]>([]);
  const [professionalsStatus, setProfessionalsStatus] = useState<ProfessionalsStatus>('idle');

  useEffect(() => {
    if (!isInstitution || !activeAffiliation) return;
    let cancelled = false;
    const load = async () => {
      setProfessionalsStatus('loading');
      try {
        const list = await getJson<{data: TreatingProfessional[]}>(
          `/professionals?affiliation_id=${encodeURIComponent(activeAffiliation.id)}`,
        );
        if (!cancelled) {
          setProfessionals(list.data);
          setProfessionalsStatus('ready');
        }
      } catch (err) {
        console.error(err);
        if (!cancelled) setProfessionalsStatus('error');
      }
    };
    void load();
    return () => {
      cancelled = true;
    };
  }, [isInstitution, activeAffiliation]);

  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(0);
  
  const [formData, setFormData] = useState<CoverageRequest>(initialData);
  const selectedProfessional = professionals.find((p) => p.id === formData.professional.id);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  
  const [requestCode, setRequestCode] = useState('');
  // Liquidación calculada por el backend (POST /coverage-requests/preview): es la autoridad del precio.
  const [preview, setPreview] = useState<CoveragePreview | null>(null);
  const [previewError, setPreviewError] = useState('');
  const [requestStatus, setRequestStatus] = useState<RequestStatus>('submitted');
  // EMISIÓN: id de la solicitud creada (para iniciar o reintentar el pago con Wompi).
  const [createdRequestId, setCreatedRequestId] = useState<string | null>(null);
  const [paymentError, setPaymentError] = useState('');
  const [isRedirectingToPayment, setIsRedirectingToPayment] = useState(false);
  const isEmision = user?.paymentMode === 'immediate';

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tipo = params.get('tipo');
    if (tipo === 'basica' || tipo === 'plus') {
      setFormData(prev => ({ ...prev, coverageType: tipo }));
    }
  }, [location]);

  // Set the payment method implicitly based on the user's commercial profile
  useEffect(() => {
    if (user?.paymentMode) {
      setFormData(prev => ({ ...prev, payment: { method: user.paymentMode } }));
    }
  }, [user]);

  // El precio final lo calcula el backend; se vuelve a pedir si cambia la categoría o el tipo de cobertura.
  const previewCategory = formData.procedure.pricingCategory;
  const previewCoverageType = formData.coverageType;
  useEffect(() => {
    setPreview(null);
    setPreviewError('');
    if (!activeAffiliation || !previewCategory) return;

    let cancelled = false;
    postJson<CoveragePreview>('/coverage-requests/preview', {
      affiliation_id: activeAffiliation.id,
      procedure_category: previewCategory,
      coverage_type: previewCoverageType,
    })
      .then((result) => {
        if (!cancelled) setPreview(result);
      })
      .catch((err: unknown) => {
        console.error(err);
        if (!cancelled) setPreviewError(err instanceof Error ? err.message : 'No fue posible calcular la liquidación.');
      });

    return () => {
      cancelled = true;
    };
  }, [activeAffiliation, previewCategory, previewCoverageType]);

  // Catálogo de procedimientos de la categoría elegida (GET /procedures).
  const [procedureOptions, setProcedureOptions] = useState<ProcedureOption[]>([]);
  const [proceduresLoading, setProceduresLoading] = useState(false);
  useEffect(() => {
    if (!previewCategory) {
      setProcedureOptions([]);
      return;
    }
    let cancelled = false;
    setProceduresLoading(true);
    getJson<{ data: ProcedureOption[] }>(`/procedures?category=${encodeURIComponent(previewCategory)}`)
      .then((res) => {
        if (cancelled) return;
        setProcedureOptions(res.data);
        // Si la categoría cambió, un nombre elegido de la anterior ya no es válido.
        setFormData((prev) =>
          res.data.some((p) => p.name === prev.procedure.name) ? prev : { ...prev, procedure: { ...prev.procedure, name: '' } },
        );
      })
      .catch((err) => {
        console.error(err);
        if (!cancelled) setProcedureOptions([]);
      })
      .finally(() => {
        if (!cancelled) setProceduresLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [previewCategory]);

  const updateNestedField = (section: keyof CoverageRequest, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: typeof prev[section] === 'object' ? { ...prev[section], [field]: value } : value
    }));
    if (errors[`${section}.${field}`]) {
      setErrors(prev => ({ ...prev, [`${section}.${field}`]: false }));
    }
  };

  const getAnticipationWarning = () => {
    if (!formData.procedure.scheduledDate || !formData.procedure.scheduledTime) return null;
    const roomEntryAt = new Date(`${formData.procedure.scheduledDate}T${formData.procedure.scheduledTime}:00`);
    const diffMs = roomEntryAt.getTime() - new Date().getTime();
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 60 && diffMins > -1440) {
      return true;
    }
    return false;
  };

  const validateStep = () => {
    let isValid = true;
    const newErrors: Record<string, boolean> = {};

    const checkRequired = (section: keyof CoverageRequest, field: string) => {
      const val = (formData[section] as any)[field];
      if (!val || val.toString().trim() === '') {
        newErrors[`${section}.${field}`] = true;
        isValid = false;
      }
    };

    if (currentStep === 1) { // Procedimiento
      ['pricingCategory', 'name', 'scheduledDate', 'scheduledTime', 'locationType'].forEach(f => checkRequired('procedure', f));
    } else if (currentStep === 2) { // Paciente
      ['fullName', 'documentType', 'documentNumber'].forEach(f => checkRequired('patient', f));
      // Institución: el profesional tratante es obligatorio y debe venir de la lista del backend.
      if (isInstitution && !professionals.some((p) => p.id === formData.professional.id)) {
        newErrors['professional.id'] = true;
        isValid = false;
      }
    } else if (currentStep === 4) { // Revisión (Consents)
      if (!formData.consents.dataTreatment) {
        newErrors['consents.dataTreatment'] = true;
        isValid = false;
      }
      if (!formData.consents.informationAccuracy) {
        newErrors['consents.informationAccuracy'] = true;
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep()) {
      window.scrollTo(0, 0);
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    window.scrollTo(0, 0);
    setCurrentStep(prev => prev - 1);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    // Evita envíos duplicados mientras la solicitud está en curso.
    if (isSubmitting) return;
    if (isInstitution && !selectedProfessional) {
      // No debería ocurrir (el paso de paciente lo exige), pero nunca se envía sin tratante.
      goToStep(2);
      return;
    }
    if (validateStep()) {
      setIsSubmitting(true);
      try {
        const affiliationId = activeAffiliation?.id;
        if (!affiliationId) throw new Error('No hay una afiliación activa.');
        
        const fullNameParts = formData.patient.fullName.trim().split(' ');
        const firstName = fullNameParts[0] || '';
        const lastName = fullNameParts.slice(1).join(' ') || '.';
        
        // 1. Create or Find Patient
        const patientResult = await postJson<{data: any}>('/patients', {
          affiliation_id: affiliationId,
          first_name: firstName,
          last_name: lastName,
          document_type: formData.patient.documentType,
          document_number: formData.patient.documentNumber,
        });
        const patientResponse = patientResult.data;
        
        // 2. Submit Coverage Request
        const coverageResult = await postJson<{data: any}>('/coverage-requests', {
          affiliation_id: affiliationId,
          patient_id: patientResponse.id,
          procedure_category: formData.procedure.pricingCategory,
          procedure_name: formData.procedure.name,
          location: formData.procedure.locationType,
          room_entry_date: formData.procedure.scheduledDate,
          room_entry_time: formData.procedure.scheduledTime,
          coverage_type: formData.coverageType,
          // Solo en institución; el backend valida que el profesional esté vinculado y activo.
          ...(isInstitution ? { professional_id: formData.professional.id } : {}),
        });
        const coverageResponse = coverageResult.data;
        
        const needsPayment = isEmision && coverageResponse.status === 'draft';
        setRequestStatus(needsPayment ? 'payment_pending' : 'submitted');
        setRequestCode(coverageResponse.request_code || coverageResponse.id);
        setCreatedRequestId(coverageResponse.id);
        window.scrollTo(0, 0);
        setCurrentStep(5); // Confirmación

        // EMISIÓN: la solicitud ya existe; ahora se paga con Wompi. Si el pago no arranca,
        // la confirmación muestra el botón para reintentarlo (la solicitud NO se vuelve a crear).
        if (needsPayment) {
          await startPayment(coverageResponse.id, coverageResponse.request_code ?? null);
        }
      } catch (err: any) {
        console.error(err);
        // ApiError ya trae el mensaje legible del backend (p. ej. el primer error de validación).
        alert('Error al enviar la solicitud: ' + (err instanceof Error ? err.message : 'error desconocido'));
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Lleva al checkout de Wompi. Si sale bien, el navegador abandona esta página.
  const startPayment = async (requestId: string, code: string | null) => {
    setPaymentError('');
    setIsRedirectingToPayment(true);
    try {
      await payWithWompi(requestId, code);
    } catch (err) {
      console.error(err);
      setPaymentError(err instanceof Error ? err.message : 'No fue posible iniciar el pago.');
      setIsRedirectingToPayment(false);
    }
  };

  const goToStep = (stepIndex: number) => {
    window.scrollTo(0, 0);
    setCurrentStep(stepIndex);
  };

  const currentPricing = preview
    ? {
        subtotal: Number(preview.coverage_amount),
        ivaAmount: Number(preview.tax_amount),
        total: Number(preview.total_amount),
      }
    : null;
  // Saldo: el del preview (más reciente) cuando existe; antes, el conocido desde el login.
  const walletAvailable = preview?.wallet_available != null ? Number(preview.wallet_available) : (user?.balanceAvailable ?? 0);
  const isTimeWarning = getAnticipationWarning();

  return (
    <div className="p-8 lg:p-16">
        {currentStep < 5 && (
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-bmq-ivory/50">
                Paso {currentStep + 1} de 5 — {STEPS[currentStep]}
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-bmq-gold">
                {Math.round(((currentStep + 1) / 5) * 100)}%
              </span>
            </div>
            <div className="w-full h-[1px] bg-white/10 relative">
              <motion.div 
                className="absolute top-0 left-0 h-[1px] bg-bmq-gold"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / 5) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            
            {/* PASO 0 - COBERTURA */}
            {currentStep === 0 && (
              <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h1 className="font-serif text-3xl lg:text-5xl mb-16">Selección de Cobertura</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  <button 
                    onClick={() => updateNestedField('coverageType', '', 'basica')}
                    className={`p-8 lg:p-12 text-left border transition-all duration-300 relative ${
                      formData.coverageType === 'basica' ? 'border-bmq-ivory bg-bmq-ivory/5' : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    {formData.coverageType === 'basica' && <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-bmq-ivory" />}
                    <h3 className="font-serif text-3xl text-bmq-ivory mb-2">BMQ</h3>
                    <span className="text-[0.65rem] tracking-[0.2em] uppercase text-bmq-ivory/50 block mb-6">Garantía Básica</span>
                    <p className="text-sm text-bmq-ivory/70 font-light leading-relaxed mb-4">
                      Protección jurídica, asesoría preventiva y representación ante controversias.
                    </p>
                  </button>

                  <button 
                    onClick={() => updateNestedField('coverageType', '', 'plus')}
                    className={`p-8 lg:p-12 text-left border transition-all duration-300 relative ${
                      formData.coverageType === 'plus' ? 'border-bmq-gold bg-bmq-gold/5' : 'border-white/10 hover:border-bmq-gold/30'
                    }`}
                  >
                    {formData.coverageType === 'plus' && <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-bmq-gold" />}
                    <h3 className="font-serif text-3xl text-bmq-gold mb-2 flex items-center">BMQ<span className="text-xl ml-0.5">+</span></h3>
                    <span className="text-[0.65rem] tracking-[0.2em] uppercase text-bmq-gold/50 block mb-6">Garantía Plus</span>
                    <p className="text-sm text-bmq-ivory/70 font-light leading-relaxed mb-4">
                      Toda la protección jurídica, adicionando respaldo económico ante una eventual condena.
                    </p>
                    <span className="text-[0.6rem] tracking-widest text-bmq-gold block mt-4 border-t border-bmq-gold/20 pt-4">RESPALDO HASTA $250.000.000 COP</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* PASO 1 - PROCEDIMIENTO */}
            {currentStep === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h1 className="font-serif text-3xl lg:text-5xl mb-16">Información del procedimiento</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                  <Select 
                    label="Categoría" required error={errors['procedure.pricingCategory']} value={formData.procedure.pricingCategory} onChange={(e: any) => updateNestedField('procedure', 'pricingCategory', e.target.value)} 
                    options={[
                      {label: PRICING_CATEGORIES.cirugia.label, value: 'cirugia'}, 
                      {label: PRICING_CATEGORIES.estetica.label, value: 'estetica'}
                    ]} 
                  />
                  <Select
                    label="Nombre del procedimiento" required error={errors['procedure.name']} value={formData.procedure.name}
                    disabled={!formData.procedure.pricingCategory || proceduresLoading}
                    onChange={(e: any) => updateNestedField('procedure', 'name', e.target.value)}
                    options={procedureOptions.map((p) => ({ label: p.name, value: p.name }))}
                  />
                  <Select label="Lugar (Clínica/Consultorio)" required error={errors['procedure.locationType']} value={formData.procedure.locationType} onChange={(e: any) => updateNestedField('procedure', 'locationType', e.target.value)} options={LOCATION_OPTIONS} />
                  <div className="col-span-1 md:col-span-2 mt-4"><hr className="border-white/10 mb-8" /></div>
                  
                  <Input label="Fecha de ingreso a sala" type="date" required error={errors['procedure.scheduledDate']} warning={isTimeWarning} value={formData.procedure.scheduledDate} onChange={(e: any) => updateNestedField('procedure', 'scheduledDate', e.target.value)} />
                  <Input label="Hora de ingreso a sala" type="time" required error={errors['procedure.scheduledTime']} warning={isTimeWarning} value={formData.procedure.scheduledTime} onChange={(e: any) => updateNestedField('procedure', 'scheduledTime', e.target.value)} />
                </div>
                
                <AnimatePresence>
                  {isTimeWarning && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-amber-500/10 border border-amber-500/30 p-6 flex items-start mt-4">
                      <AlertCircle className="text-amber-500 mr-4 flex-shrink-0 mt-0.5" size={18} />
                      <p className="text-sm text-amber-500/90 font-light leading-relaxed">
                        <strong className="block mb-1 font-medium">Alerta de Anticipación</strong>
                        Estás solicitando la cobertura con menos de 1 hora de anticipación al ingreso a sala. La solicitud será registrada y recibida, pero la póliza podría no ser expedida a tiempo. Te recomendamos contactar con tu asesor asignado para que el caso sea analizado operativamente.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {/* PASO 2 - PACIENTE */}
            {currentStep === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h1 className="font-serif text-3xl lg:text-5xl mb-8">Datos del paciente</h1>
                
                <PatientSearch
                  affiliationId={activeAffiliation?.id}
                  onSelect={(p) => {
                    setFormData((prev) => ({
                      ...prev,
                      patient: { fullName: p.full_name, documentType: p.document_type, documentNumber: p.document_number },
                    }));
                    setErrors((prev) => ({ ...prev, 'patient.fullName': false, 'patient.documentType': false, 'patient.documentNumber': false }));
                  }}
                />

                <div className="bg-bmq-blue/10 border-l border-bmq-blue p-6 mb-12">
                  <p className="text-sm text-bmq-ivory/80 font-light leading-relaxed">
                    La privacidad es fundamental. Solicitamos únicamente la identificación básica del paciente para asociarlo a la cobertura. <strong className="font-medium text-bmq-ivory">No requerimos ni solicitamos historia clínica o información médica.</strong>
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                  <Input label="Nombre completo" required error={errors['patient.fullName']} value={formData.patient.fullName} onChange={(e: any) => updateNestedField('patient', 'fullName', e.target.value)} />
                  <div className="grid grid-cols-2 gap-x-4">
                    <Select label="Tipo doc." required error={errors['patient.documentType']} value={formData.patient.documentType} onChange={(e: any) => updateNestedField('patient', 'documentType', e.target.value)} options={[{label: 'CC', value: 'cc'}, {label: 'CE', value: 'ce'}, {label: 'TI', value: 'ti'}, {label: 'Pasaporte', value: 'pasaporte'}]} />
                    <Input label="Número doc." required error={errors['patient.documentNumber']} value={formData.patient.documentNumber} onChange={(e: any) => updateNestedField('patient', 'documentNumber', e.target.value)} />
                  </div>
                </div>

                {isInstitution && (
                  <div className="mt-4">
                    <h2 className="text-xs tracking-[0.2em] uppercase text-bmq-gold mb-6">Profesional tratante</h2>
                    {professionalsStatus === 'loading' && (
                      <p className="text-sm text-bmq-ivory/50 font-light">Cargando profesionales de la institución...</p>
                    )}
                    {professionalsStatus === 'error' && (
                      <p className="text-sm text-red-400 font-light">No fue posible cargar los profesionales de la institución. Intenta de nuevo más tarde.</p>
                    )}
                    {professionalsStatus === 'ready' && professionals.length === 0 && (
                      <div className="border-l border-red-400/60 bg-red-400/5 p-6">
                        <p className="text-sm text-bmq-ivory/80 font-light">No hay profesionales asociados a esta institución.</p>
                      </div>
                    )}
                    {professionalsStatus === 'ready' && professionals.length > 0 && (
                      <Select
                        label="Profesional tratante"
                        required
                        error={errors['professional.id']}
                        value={formData.professional.id}
                        onChange={(e: any) => updateNestedField('professional', 'id', e.target.value)}
                        options={professionals.map((p) => ({
                          value: p.id,
                          label: p.document_number ? `${p.full_name} · Doc. ${p.document_number}` : p.full_name,
                        }))}
                      />
                    )}
                  </div>
                )}
              </motion.div>
            )}

            {/* PASO 3 - LIQUIDACIÓN Y PAGO */}
            {currentStep === 3 && !currentPricing && (
              <div key="step3-loading" className="text-sm text-bmq-ivory/60">
                {previewError || 'Calculando liquidación...'}
              </div>
            )}
            {currentStep === 3 && currentPricing && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h1 className="font-serif text-3xl lg:text-5xl mb-12">Liquidación</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <div className="border border-white/10 bg-bmq-charcoal/50 p-8">
                      <h3 className="text-xs tracking-[0.2em] uppercase text-bmq-ivory/50 mb-8 border-b border-white/10 pb-4">Resumen Financiero</h3>
                      
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-sm font-light text-bmq-ivory/80">Valor de Cobertura</span>
                        <span className="font-serif">{formatCurrency(currentPricing.subtotal)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-sm font-light text-bmq-ivory/80">{preview?.tax_rate != null ? `IVA (${Number(preview.tax_rate)}%)` : 'IVA'}</span>
                        <span className="font-serif text-bmq-ivory/80">{formatCurrency(currentPricing.ivaAmount)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center mt-8 pt-6 border-t border-bmq-gold/20">
                        <span className="text-xs tracking-widest uppercase text-bmq-gold">TOTAL DE EMISIÓN</span>
                        <span className="font-serif text-2xl text-bmq-gold">{formatCurrency(currentPricing.total)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xs tracking-[0.2em] uppercase text-bmq-ivory/50 mb-8">Aplicación Comercial</h3>
                    
                    {user?.paymentMode === 'immediate' && (
                       <div className="border border-bmq-blue/30 bg-bmq-blue/5 p-6">
                         <span className="block text-sm text-bmq-ivory tracking-wider mb-2">PAGO POR EMISIÓN</span>
                         <span className="block text-sm font-light text-bmq-ivory/70 leading-relaxed">Al enviar la solicitud pagarás en línea con Wompi (tarjeta, PSE, Nequi y más). La póliza se emitirá automáticamente cuando el pago sea aprobado.</span>
                       </div>
                    )}

                    {user?.paymentMode === 'balance' && (
                       <div className="border border-bmq-gold/30 bg-bmq-gold/5 p-6">
                         <span className="block text-sm text-bmq-gold tracking-wider mb-4">BOLSA DE SALDO A FAVOR</span>
                         
                         <div className="flex justify-between items-center mb-4 text-sm font-light text-bmq-ivory/80">
                           <span>Saldo Disponible</span>
                           <span>{formatCurrency(walletAvailable)}</span>
                         </div>
                         <div className="flex justify-between items-center mb-4 text-sm font-light text-bmq-ivory/80">
                           <span>A descontar</span>
                           <span className="text-red-400">-{formatCurrency(currentPricing.total)}</span>
                         </div>
                         <div className="flex justify-between items-center pt-4 border-t border-bmq-gold/20">
                           <span className="text-xs tracking-widest uppercase text-bmq-gold">NUEVO SALDO PROYECTADO</span>
                           <span className="font-serif text-xl text-bmq-gold">{formatCurrency(walletAvailable - currentPricing.total)}</span>
                         </div>
                       </div>
                    )}

                    {user?.paymentMode === 'postpaid' && (
                       <div className="border border-white/20 bg-white/5 p-6">
                         <span className="block text-sm text-bmq-ivory tracking-wider mb-2">PAGO {user.billingFrequency === 'monthly' ? 'MENSUAL' : user.billingFrequency === 'biweekly' ? 'QUINCENAL' : 'SEMANAL'} (POSTERIOR)</span>
                         <span className="block text-sm font-light text-bmq-ivory/70 leading-relaxed">Esta solicitud se acumulará en tu cuenta corriente según el acuerdo comercial. La emisión se procesará directamente.</span>
                       </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* PASO 4 - REVISIÓN */}
            {currentStep === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h1 className="font-serif text-3xl lg:text-5xl mb-16">Revisión Final</h1>
                
                <div className="space-y-12 mb-16">
                  {/* Cobertura */}
                  <div className="border-b border-white/10 pb-8">
                    <div className="flex justify-between items-end mb-6">
                      <h3 className="text-xs tracking-[0.2em] uppercase text-bmq-gold">Cobertura & Modalidad</h3>
                      <button onClick={() => goToStep(3)} className="text-[0.65rem] tracking-widest text-bmq-ivory/50 hover:text-bmq-ivory flex items-center"><Edit2 size={12} className="mr-2" /> REVISAR</button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="font-serif text-2xl">{formData.coverageType === 'plus' ? 'BMQ+ (Garantía Plus)' : 'BMQ (Garantía Básica)'}</p>
                        <span className="text-xs text-bmq-ivory/50 uppercase mt-2 block">
                          {user?.paymentMode === 'immediate' ? 'Pago por Emisión' : user?.paymentMode === 'balance' ? 'Bolsa de Saldo' : 'Pago Posterior'}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs tracking-widest uppercase text-bmq-gold block mb-1">TOTAL DE EMISIÓN</span>
                        <span className="font-serif text-2xl text-bmq-gold">{formatCurrency(currentPricing?.total || 0)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Procedimiento */}
                  <div className="border-b border-white/10 pb-8">
                    <div className="flex justify-between items-end mb-6">
                      <h3 className="text-xs tracking-[0.2em] uppercase text-bmq-gold">Procedimiento</h3>
                      <button onClick={() => goToStep(1)} className="text-[0.65rem] tracking-widest text-bmq-ivory/50 hover:text-bmq-ivory flex items-center"><Edit2 size={12} className="mr-2" /> EDITAR</button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm font-light text-bmq-ivory/80">
                      <div><span className="text-bmq-ivory/40 block text-xs mb-1">Detalle</span>{formData.procedure.name}</div>
                      <div><span className="text-bmq-ivory/40 block text-xs mb-1">Ingreso a Sala</span>{formData.procedure.scheduledDate} {formData.procedure.scheduledTime}</div>
                    </div>
                  </div>

                  {/* Paciente */}
                  <div className="border-b border-white/10 pb-8">
                    <div className="flex justify-between items-end mb-6">
                      <h3 className="text-xs tracking-[0.2em] uppercase text-bmq-gold">Paciente</h3>
                      <button onClick={() => goToStep(2)} className="text-[0.65rem] tracking-widest text-bmq-ivory/50 hover:text-bmq-ivory flex items-center"><Edit2 size={12} className="mr-2" /> EDITAR</button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm font-light text-bmq-ivory/80">
                      <div><span className="text-bmq-ivory/40 block text-xs mb-1">Nombre</span>{formData.patient.fullName}</div>
                      <div><span className="text-bmq-ivory/40 block text-xs mb-1">Documento</span>{formData.patient.documentType.toUpperCase()} {formData.patient.documentNumber}</div>
                      {isInstitution && (
                        <div><span className="text-bmq-ivory/40 block text-xs mb-1">Profesional tratante</span>{selectedProfessional?.full_name ?? '—'}</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Consents */}
                <div className="bg-bmq-charcoal/50 border border-white/5 p-8 mb-12">
                  <h3 className="text-xs tracking-[0.2em] uppercase text-bmq-ivory/50 mb-8">Consentimientos</h3>
                  
                  <label className="flex items-start mb-6 cursor-pointer group">
                    <div className={`w-5 h-5 border flex items-center justify-center mt-0.5 mr-4 transition-colors ${formData.consents.dataTreatment ? 'bg-bmq-ivory border-bmq-ivory' : 'border-white/20 group-hover:border-white/50'} ${errors['consents.dataTreatment'] ? 'border-red-500/50' : ''}`}>
                      {formData.consents.dataTreatment && <Check size={14} className="text-bmq-black" />}
                    </div>
                    <span className="text-sm text-bmq-ivory/80 font-light flex-1">Acepto la política de tratamiento de datos y entiendo los términos operativos de emisión. <span className="text-bmq-gold">*</span></span>
                    <input type="checkbox" className="hidden" checked={formData.consents.dataTreatment} onChange={(e) => updateNestedField('consents', 'dataTreatment', e.target.checked)} />
                  </label>

                  <label className="flex items-start cursor-pointer group">
                    <div className={`w-5 h-5 border flex items-center justify-center mt-0.5 mr-4 transition-colors ${formData.consents.informationAccuracy ? 'bg-bmq-ivory border-bmq-ivory' : 'border-white/20 group-hover:border-white/50'} ${errors['consents.informationAccuracy'] ? 'border-red-500/50' : ''}`}>
                      {formData.consents.informationAccuracy && <Check size={14} className="text-bmq-black" />}
                    </div>
                    <span className="text-sm text-bmq-ivory/80 font-light flex-1">Declaro que la información es correcta y corresponde a un procedimiento en firme. <span className="text-bmq-gold">*</span></span>
                    <input type="checkbox" className="hidden" checked={formData.consents.informationAccuracy} onChange={(e) => updateNestedField('consents', 'informationAccuracy', e.target.checked)} />
                  </label>
                </div>
              </motion.div>
            )}

            {/* PASO 5 - CONFIRMACIÓN */}
            {currentStep === 5 && (
              <motion.div key="step5" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                <div className="w-20 h-20 bg-bmq-gold/10 rounded-full flex items-center justify-center mx-auto mb-12">
                  <Check size={32} className="text-bmq-gold" />
                </div>
                
                <h1 className="font-serif text-4xl lg:text-5xl mb-6">
                  {requestStatus === 'payment_pending' && 'Solicitud Recibida (Pago Pendiente)'}
                  {requestStatus === 'payment_verification' && 'Solicitud Recibida (Procesando Saldo)'}
                  {requestStatus === 'submitted' && 'Solicitud Recibida'}
                </h1>
                
                <p className="text-lg text-bmq-ivory/70 font-light max-w-xl mx-auto mb-16">
                  {requestStatus === 'payment_pending' && (isRedirectingToPayment
                    ? 'Te estamos llevando al pago seguro de Wompi…'
                    : 'Tu solicitud fue creada. Falta el pago para aprobarla y emitir la póliza automáticamente.')}
                  {requestStatus === 'payment_verification' && 'Hemos recibido tu solicitud. Nuestro equipo descontará el valor de tu saldo a favor y procederá con la expedición.'}
                  {requestStatus === 'submitted' && 'Hemos recibido tu solicitud. Será procesada y acumulada en tu estado de cuenta según la periodicidad acordada.'}
                </p>
                
                <div className="border border-white/10 bg-bmq-charcoal/30 p-8 max-w-md mx-auto mb-16">
                  <span className="text-[0.65rem] tracking-[0.2em] uppercase text-bmq-ivory/50 block mb-4">Número de Solicitud</span>
                  <span className="font-serif text-3xl tracking-widest text-bmq-gold">{requestCode}</span>
                  <p className="text-xs text-bmq-ivory/40 mt-4 font-light">Podrás consultar el estado de la póliza en tu panel de Mis Pólizas.</p>
                </div>

                {requestStatus === 'payment_pending' && paymentError && (
                  <p className="text-sm text-red-400 font-light max-w-md mx-auto mb-8 flex items-center justify-center">
                    <AlertCircle size={14} className="mr-2 shrink-0" /> {paymentError}
                  </p>
                )}

                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  {requestStatus === 'payment_pending' && createdRequestId && (
                    <button
                      onClick={() => void startPayment(createdRequestId, requestCode || null)}
                      disabled={isRedirectingToPayment}
                      className="bg-bmq-gold text-bmq-black px-10 py-4 text-xs tracking-[0.2em] font-medium hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isRedirectingToPayment ? 'REDIRIGIENDO A WOMPI...' : 'PAGAR CON WOMPI'}
                    </button>
                  )}
                  <Link to="/portal/polizas" className="bg-bmq-ivory text-bmq-black px-10 py-4 text-xs tracking-[0.2em] font-medium hover:bg-white transition-colors duration-300">
                    VER MIS PÓLIZAS
                  </Link>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

          {/* Navigation Controls */}
          {currentStep < 5 && (
            <div className={`mt-16 flex justify-between border-t border-white/10 pt-12`}>
              {currentStep > 0 ? (
                <button 
                  onClick={handleBack}
                  className="px-8 py-4 text-xs tracking-[0.2em] font-medium text-bmq-ivory/60 hover:text-bmq-ivory flex items-center transition-colors"
                >
                  <ArrowLeft size={14} className="mr-3" />
                  ATRÁS
                </button>
              ) : (
                <div />
              )}
              
              {currentStep < 4 ? (
                <button 
                  onClick={handleNext}
                  className="bg-bmq-ivory text-bmq-black px-10 py-4 text-xs tracking-[0.2em] font-medium flex items-center hover:bg-white transition-colors"
                >
                  CONTINUAR
                  <ArrowRight size={14} className="ml-3" />
                </button>
              ) : (
                <button 
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-bmq-gold text-bmq-black px-12 py-4 text-xs tracking-[0.2em] font-medium flex items-center hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'ENVIANDO...' : isEmision ? 'CONFIRMAR Y PAGAR' : 'CONFIRMAR Y ENVIAR'}
                  <ArrowRight size={14} className="ml-3" />
                </button>
              )}
            </div>
          )}

        </div>
    </div>
  );
}
