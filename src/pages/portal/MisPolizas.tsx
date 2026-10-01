import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { getJson, openPolicyPdf, type BmqPolicy } from '../../lib/api';

/** Estilo del estado de la póliza (BmqPolicy.status). */
function statusClass(status: string): string {
  if (status === 'active') return 'text-emerald-400 bg-emerald-400/10';
  if (status === 'failed' || status === 'cancelled_reverted') return 'text-red-400 bg-red-400/10';
  return 'text-amber-400 bg-amber-400/10';
}

/** Código visible: nunca se asume que request_code o los ids existan. */
function policyCode(item: BmqPolicy): string {
  return item.coverage_request?.request_code
    ?? item.coverage_request?.id?.substring(0, 8)
    ?? item.id?.substring(0, 8)
    ?? 'Sin código';
}

export function MisPolizas() {
  const { activeAffiliation } = useAuth();
  const [data, setData] = useState<BmqPolicy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      if (!activeAffiliation) return;
      setLoading(true);
      setError('');
      try {
        const result = await getJson<{data: BmqPolicy[]}>(`/policies?affiliation_id=${activeAffiliation.id}`);
        if (!cancelled) {
          setData(result.data);
        }
      } catch (err: any) {
        if (!cancelled) {
          setError(err.message || 'Error al obtener las solicitudes.');
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
  }, [activeAffiliation]);

  return (
    <div className="p-8 lg:p-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="font-serif text-3xl lg:text-4xl text-bmq-ivory mb-2">Mis Solicitudes y Pólizas</h1>
        <p className="text-sm font-light text-bmq-ivory/60">Historial de solicitudes y coberturas emitidas para tu afiliación actual.</p>
      </motion.div>

      {error && (
        <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 mb-8 text-sm">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-bmq-ivory/60 text-sm">Cargando solicitudes...</div>
      ) : (
        <div className="bg-bmq-charcoal border border-white/5 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[0.65rem] tracking-[0.2em] uppercase text-bmq-ivory/50">
                <th className="p-6 font-normal">Identificador</th>
                <th className="p-6 font-normal">Paciente</th>
                <th className="p-6 font-normal">Procedimiento</th>
                <th className="p-6 font-normal">Fecha</th>
                <th className="p-6 font-normal">Cobertura</th>
                <th className="p-6 font-normal">Estado</th>
                <th className="p-6 font-normal text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-6 text-center text-bmq-ivory/50 text-sm">
                    No tienes solicitudes registradas.
                  </td>
                </tr>
              ) : (
                data.map((item) => {
                  const request = item.coverage_request;
                  return (
                  <tr key={item.id} className="border-b border-white/5 hover:bg-white/5 transition-colors text-sm font-light">
                    <td className="p-6 font-medium text-bmq-ivory">
                      {policyCode(item)}
                    </td>
                    <td className="p-6">{request?.patient_name || '—'}</td>
                    <td className="p-6">{request?.procedure_category_label || '—'}</td>
                    <td className="p-6">{request?.room_entry_date || item.issued_at?.substring(0, 10) || '—'}</td>
                    <td className="p-6 text-bmq-gold">{request?.coverage_type_label || '—'}</td>
                    <td className="p-6">
                      <span className={`${statusClass(item.status)} px-3 py-1 text-xs`}>{item.status_label}</span>
                    </td>
                    <td className="p-6 text-right">
                      {/* El certificado histórico se conserva aunque la póliza esté anulada. */}
                      {item.has_pdf ? (
                        <button
                          type="button"
                          onClick={() => openPolicyPdf(item.id).catch((e) => alert(e instanceof Error ? e.message : 'No se pudo abrir el PDF.'))}
                          className="text-bmq-blue hover:text-white transition-colors text-xs tracking-widest uppercase flex items-center justify-end w-full mb-2"
                        >
                          <Download size={14} className="mr-2" /> VER PDF
                        </button>
                      ) : item.status === 'failed' ? (
                        <span className="text-bmq-ivory/40 text-xs tracking-widest uppercase flex items-center justify-end w-full mb-2">
                          <FileText size={14} className="mr-2" /> PDF no disponible
                        </span>
                      ) : item.status === 'generating' ? (
                        <span className="text-bmq-ivory/40 text-xs tracking-widest uppercase flex items-center justify-end w-full mb-2">
                          <FileText size={14} className="mr-2" /> PDF en generación
                        </span>
                      ) : null}
                      <Link to={`/portal/polizas/${item.id}`} className="text-bmq-ivory/50 hover:text-white transition-colors text-xs tracking-widest uppercase flex items-center justify-end w-full">
                        <FileText size={14} className="mr-2" /> VER
                      </Link>
                    </td>
                  </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
