import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Download } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { getJson, openPolicyPdf, type BmqPolicy } from '../../lib/api';

export function PolizaDetail() {
  const { id } = useParams<{ id: string }>();
  const { activeAffiliation } = useAuth();
  const [data, setData] = useState<BmqPolicy | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      if (!activeAffiliation || !id) return;
      setLoading(true);
      setError('');
      try {
        const result = await getJson<{data: BmqPolicy}>(`/policies/${id}?affiliation_id=${activeAffiliation.id}`);
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

  const request = data.coverage_request;
  const statusClass = data.status === 'active'
    ? 'text-emerald-400 bg-emerald-400/10'
    : data.status === 'failed' || data.status === 'cancelled_reverted'
      ? 'text-red-400 bg-red-400/10'
      : 'text-amber-400 bg-amber-400/10';
  // Las fechas "YYYY-MM-DD" se formatean sin pasar por Date para no desplazarlas por zona horaria.
  const formatDate = (value: string | null | undefined) => (value ? value.substring(0, 10).split('-').reverse().join('/') : 'N/A');

  return (
    <div className="p-8 lg:p-16 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <Link to="/portal/polizas" className="flex items-center text-bmq-gold hover:text-white mb-6 text-sm transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Volver a mis solicitudes
        </Link>

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div>
            <p className="text-bmq-gold text-xs tracking-[0.2em] uppercase mb-2">Detalle de Póliza</p>
            <h1 className="font-serif text-3xl lg:text-4xl text-bmq-ivory mb-2">
              {request?.request_code || 'Solicitud sin código'}
            </h1>
            <p className="text-sm text-bmq-ivory/60">ID Interno: {data.id}</p>
          </div>

          <div className="flex flex-col items-end">
            <span className={`px-4 py-1.5 text-sm mb-4 ${statusClass}`}>
              {data.status_label}
            </span>

            {/* El certificado histórico se conserva aunque la póliza esté anulada. */}
            {data.has_pdf ? (
              <button
                type="button"
                onClick={() => openPolicyPdf(data.id).catch((e) => alert(e instanceof Error ? e.message : 'No se pudo abrir el PDF.'))}
                className="flex items-center text-xs tracking-widest uppercase bg-bmq-blue hover:bg-bmq-blue/80 text-white px-6 py-3 transition-colors"
              >
                <Download size={16} className="mr-2" /> VER PDF
              </button>
            ) : data.status === 'failed' || data.status === 'generating' ? (
              <span className="flex items-center text-xs tracking-widest uppercase text-bmq-ivory/40 border border-bmq-ivory/10 px-6 py-3">
                <FileText size={16} className="mr-2" /> {data.status === 'failed' ? 'PDF no disponible' : 'PDF en generación'}
              </span>
            ) : null}
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 text-sm font-light">
        <div className="bg-bmq-charcoal p-6">
          <p className="text-bmq-ivory/40 uppercase tracking-wider text-xs mb-1">Paciente</p>
          <p className="text-bmq-ivory text-lg">{request?.patient_name || 'N/A'}</p>
        </div>

        <div className="bg-bmq-charcoal p-6">
          <p className="text-bmq-ivory/40 uppercase tracking-wider text-xs mb-1">Procedimiento</p>
          <p className="text-bmq-ivory">{request?.procedure_category_label || 'N/A'}</p>
          <p className="text-bmq-ivory/60 mt-1">{request?.procedure_name}</p>
        </div>

        <div className="bg-bmq-charcoal p-6">
          <p className="text-bmq-ivory/40 uppercase tracking-wider text-xs mb-1">Fecha de Ingreso a Sala</p>
          <p className="text-bmq-ivory">{formatDate(request?.room_entry_date)}</p>
        </div>

        <div className="bg-bmq-charcoal p-6">
          <p className="text-bmq-ivory/40 uppercase tracking-wider text-xs mb-1">Vigencia</p>
          <p className="text-bmq-ivory">{formatDate(data.valid_from)} — {formatDate(data.valid_until)}</p>
        </div>

        <div className="bg-bmq-charcoal p-6 md:col-span-2">
          <p className="text-bmq-ivory/40 uppercase tracking-wider text-xs mb-4">Información Financiera</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <p className="text-bmq-ivory/40 mb-1">Tipo de Cobertura</p>
              <p className="text-bmq-gold font-medium">{request?.coverage_type_label || 'Histórica'}</p>
            </div>
            <div>
              <p className="text-bmq-ivory/40 mb-1">Estado de la Solicitud</p>
              <p className="text-bmq-ivory">{request?.status_label || 'N/A'}</p>
            </div>
            <div>
              <p className="text-bmq-ivory/40 mb-1">Total</p>
              <p className="text-bmq-ivory text-lg font-medium">{request ? `$${Number(request.total_amount).toLocaleString()}` : 'N/A'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
