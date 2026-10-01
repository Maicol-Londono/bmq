import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { getJson, openPolicyPdf } from '../../lib/api';

interface RequestOrPolicy {
  id: string;
  request_code: string | null;
  policy_id: string | null;
  patient_name: string;
  procedure_category_label: string;
  coverage_type_label: string;
  procedure_name: string;
  created_at: string;
  room_entry_date: string | null;
  total_amount: number;
  status: string;
  status_label: string;
  policy_status?: string;
  has_pdf: boolean;
}

export function MisPolizas() {
  const { activeAffiliation } = useAuth();
  const [data, setData] = useState<RequestOrPolicy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      if (!activeAffiliation) return;
      setLoading(true);
      setError('');
      try {
        const result = await getJson<{data: RequestOrPolicy[]}>(`/policies?affiliation_id=${activeAffiliation.id}`);
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
                data.map((item) => (
                  <tr key={item.id} className="border-b border-white/5 hover:bg-white/5 transition-colors text-sm font-light">
                    <td className="p-6 font-medium text-bmq-ivory">
                      {item.request_code || item.id.substring(0, 8)}
                    </td>
                    <td className="p-6">{item.patient_name}</td>
                    <td className="p-6">{item.procedure_category_label}</td>
                    <td className="p-6">{item.room_entry_date || item.created_at.substring(0, 10)}</td>
                    <td className="p-6 text-bmq-gold">{item.coverage_type_label}</td>
                    <td className="p-6">
                      {item.status === 'policy_issued' ? (
                        <span className="text-emerald-400 bg-emerald-400/10 px-3 py-1 text-xs">{item.status_label}</span>
                      ) : item.status === 'cancelled_reverted' ? (
                        <span className="text-red-400 bg-red-400/10 px-3 py-1 text-xs">{item.status_label}</span>
                      ) : (
                        <span className="text-amber-400 bg-amber-400/10 px-3 py-1 text-xs">{item.status_label}</span>
                      )}
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
                      ) : item.status === 'policy_issued' && item.policy_status === 'failed' ? (
                        <span className="text-bmq-ivory/40 text-xs tracking-widest uppercase flex items-center justify-end w-full mb-2">
                          <FileText size={14} className="mr-2" /> PDF no disponible
                        </span>
                      ) : item.status === 'policy_issued' ? (
                        <span className="text-bmq-ivory/40 text-xs tracking-widest uppercase flex items-center justify-end w-full mb-2">
                          <FileText size={14} className="mr-2" /> PDF en generación
                        </span>
                      ) : null}
                      <Link to={`/portal/polizas/${item.id}`} className="text-bmq-ivory/50 hover:text-white transition-colors text-xs tracking-widest uppercase flex items-center justify-end w-full">
                        <FileText size={14} className="mr-2" /> VER
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
