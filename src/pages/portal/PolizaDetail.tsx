import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Download } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { getJson, openPolicyPdf } from '../../lib/api';

export function PolizaDetail() {
  const { id } = useParams<{ id: string }>();
  const { activeAffiliation } = useAuth();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      if (!activeAffiliation || !id) return;
      setLoading(true);
      setError('');
      try {
        const result = await getJson<{data: any}>(`/policies/${id}?affiliation_id=${activeAffiliation.id}`);
        if (!cancelled) {
          setData(result.data);
        }
      } catch (err: any) {
        if (!cancelled) {
          setError(err.message || 'Error al obtener el detalle de la solicitud.');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [activeAffiliation, id]);

  if (loading) {
    return <div className="p-16 text-bmq-ivory/60">Cargando detalle...</div>;
  }

  if (error) {
    return (
      <div className="p-16">
        <Link to="/portal/polizas" className="flex items-center text-bmq-gold hover:text-white mb-6 text-sm">
          <ArrowLeft size={16} className="mr-2" /> Volver a mis solicitudes
        </Link>
        <div className="bg-red-500/10 border border-red-500 text-red-500 p-4">{error}</div>
      </div>
    );
  }

  if (!data) return null;

  const isIssued = data.status === 'policy_issued';
  const hasPdf = data.policy?.documents?.some((doc: any) => doc.document_type === 'POLICY_CERTIFICATE');

  return (
    <div className="p-8 lg:p-16 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <Link to="/portal/polizas" className="flex items-center text-bmq-gold hover:text-white mb-6 text-sm transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Volver a mis solicitudes
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div>
            <p className="text-bmq-gold text-xs tracking-[0.2em] uppercase mb-2">Detalle de Solicitud</p>
            <h1 className="font-serif text-3xl lg:text-4xl text-bmq-ivory mb-2">
              {data.request_code || 'Solicitud sin código'}
            </h1>
            <p className="text-sm text-bmq-ivory/60">ID Interno: {data.id}</p>
          </div>
          
          <div className="flex flex-col items-end">
            <span className={`px-4 py-1.5 text-sm mb-4 ${isIssued ? 'text-emerald-400 bg-emerald-400/10' : data.status === 'cancelled_reverted' ? 'text-red-400 bg-red-400/10' : 'text-amber-400 bg-amber-400/10'}`}>
              {data.status_label}
            </span>
            
            {/* El certificado histórico se conserva aunque la póliza esté anulada. */}
            {hasPdf ? (
              <button
                type="button"
                onClick={() => openPolicyPdf(data.id).catch((e) => alert(e instanceof Error ? e.message : 'No se pudo abrir el PDF.'))}
                className="flex items-center text-xs tracking-widest uppercase bg-bmq-blue hover:bg-bmq-blue/80 text-white px-6 py-3 transition-colors"
              >
                <Download size={16} className="mr-2" /> VER PDF
              </button>
            ) : isIssued ? (
              <span className="flex items-center text-xs tracking-widest uppercase text-bmq-ivory/40 border border-bmq-ivory/10 px-6 py-3">
                <FileText size={16} className="mr-2" /> {data.policy?.status === 'failed' ? 'PDF no disponible' : 'PDF en generación'}
              </span>
            ) : null}
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 text-sm font-light">
        <div className="bg-bmq-charcoal p-6">
          <p className="text-bmq-ivory/40 uppercase tracking-wider text-xs mb-1">Paciente</p>
          <p className="text-bmq-ivory text-lg">{data.patient?.first_name} {data.patient?.last_name}</p>
          <p className="text-bmq-ivory/60">{data.patient?.document_type} {data.patient?.document_number}</p>
        </div>
        
        <div className="bg-bmq-charcoal p-6">
          <p className="text-bmq-ivory/40 uppercase tracking-wider text-xs mb-1">Profesional Tratante</p>
          {data.professional ? (
            <>
              <p className="text-bmq-ivory text-lg">{data.professional.first_name} {data.professional.last_name}</p>
              <p className="text-bmq-ivory/60">{data.professional.specialty || 'Sin especialidad registrada'}</p>
            </>
          ) : (
            <p className="text-bmq-ivory/60">Profesional no asignado</p>
          )}
        </div>

        <div className="bg-bmq-charcoal p-6">
          <p className="text-bmq-ivory/40 uppercase tracking-wider text-xs mb-1">Procedimiento</p>
          <p className="text-bmq-ivory">{data.procedure_category_label}</p>
          <p className="text-bmq-ivory/60 mt-1">{data.procedure_name}</p>
          <p className="text-bmq-ivory/60 mt-2">Lugar: {data.location}</p>
        </div>

        <div className="bg-bmq-charcoal p-6">
          <p className="text-bmq-ivory/40 uppercase tracking-wider text-xs mb-1">Fecha de Ingreso a Sala</p>
          <p className="text-bmq-ivory">{data.room_entry_date ? new Date(data.room_entry_date).toLocaleDateString() : 'N/A'}</p>
          <p className="text-bmq-ivory/60">{data.room_entry_time} hrs</p>
        </div>

        <div className="bg-bmq-charcoal p-6 md:col-span-2">
          <p className="text-bmq-ivory/40 uppercase tracking-wider text-xs mb-4">Información Financiera</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <p className="text-bmq-ivory/40 mb-1">Tipo de Cobertura</p>
              <p className="text-bmq-gold font-medium">{data.coverage_type_label || 'Histórica'}</p>
            </div>
            
            {Number(data.tax_rate) > 0 ? (
              <>
                <div>
                  <p className="text-bmq-ivory/40 mb-1">Valor Base / IVA</p>
                  <p className="text-bmq-ivory">
                    ${Number(data.coverage_amount).toLocaleString()} / ${Number(data.tax_amount).toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-bmq-ivory/40 mb-1">Total a Cobrar</p>
                  <p className="text-bmq-ivory text-lg font-medium">${Number(data.total_amount).toLocaleString()}</p>
                </div>
              </>
            ) : (
              <div>
                <p className="text-bmq-ivory/40 mb-1">Total a Cobrar</p>
                <p className="text-bmq-ivory text-lg font-medium">${Number(data.coverage_amount).toLocaleString()}</p>
                <p className="text-xs text-bmq-ivory/40 mt-1">(Sin desglose de IVA)</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
