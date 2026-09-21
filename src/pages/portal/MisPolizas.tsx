import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

export function MisPolizas() {
  const MOCK_POLIZAS = [
    { id: 'POL-2026-0921', patient: 'María González', procedure: 'Mamoplastia', date: '2026-09-22', type: 'BMQ+', status: 'issued' },
    { id: 'REQ-88912', patient: 'Carlos Ramírez', procedure: 'Rinoplastia', date: '2026-09-25', type: 'BMQ', status: 'pending_payment' },
  ];

  return (
    <div className="p-8 lg:p-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="font-serif text-3xl lg:text-4xl text-bmq-ivory mb-2">Mis Pólizas</h1>
        <p className="text-sm font-light text-bmq-ivory/60">Historial de solicitudes y coberturas emitidas.</p>
      </motion.div>

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
            {MOCK_POLIZAS.map((pol, idx) => (
              <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors text-sm font-light">
                <td className="p-6 font-medium text-bmq-ivory">{pol.id}</td>
                <td className="p-6">{pol.patient}</td>
                <td className="p-6">{pol.procedure}</td>
                <td className="p-6">{pol.date}</td>
                <td className="p-6 text-bmq-gold">{pol.type}</td>
                <td className="p-6">
                  {pol.status === 'issued' && <span className="text-emerald-400 bg-emerald-400/10 px-3 py-1 text-xs">Emitida</span>}
                  {pol.status === 'pending_payment' && <span className="text-amber-400 bg-amber-400/10 px-3 py-1 text-xs">Pago Pdte.</span>}
                </td>
                <td className="p-6 text-right">
                  {pol.status === 'issued' ? (
                    <button className="text-bmq-blue hover:text-white transition-colors text-xs tracking-widest uppercase flex items-center justify-end w-full">
                      <Download size={14} className="mr-2" /> PDF
                    </button>
                  ) : (
                    <button className="text-bmq-ivory/50 hover:text-white transition-colors text-xs tracking-widest uppercase flex items-center justify-end w-full">
                      <FileText size={14} className="mr-2" /> VER
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
