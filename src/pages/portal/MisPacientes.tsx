import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { getJson, postJson } from '../../lib/api';

export function MisPacientes() {
  const { activeAffiliation } = useAuth();
  const [patients, setPatients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Modal form state
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    document_type: 'CC',
    document_number: '',
    email: '',
    phone: '',
  });

  const fetchPatients = async () => {
    if (!activeAffiliation) return;
    setLoading(true);
    try {
      const result = await getJson<{data: any[]}>(`/patients?affiliation_id=${activeAffiliation.id}`);
      setPatients(result.data);
    } catch (err: any) {
      setError(err.message || 'Error al cargar pacientes.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, [activeAffiliation]);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeAffiliation) return;
    try {
      await postJson('/patients', {
        affiliation_id: activeAffiliation.id,
        ...formData
      });
      setShowModal(false);
      setFormData({
        first_name: '', last_name: '', document_type: 'CC', document_number: '', email: '', phone: ''
      });
      fetchPatients();
    } catch (err: any) {
      alert(err.message || 'Error al crear paciente');
    }
  };

  return (
    <div className="p-8 lg:p-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 flex justify-between items-end">
        <div>
          <h1 className="font-serif text-3xl lg:text-4xl text-bmq-ivory mb-2">Mis Pacientes</h1>
          <p className="text-sm font-light text-bmq-ivory/60">GestiÃ³n de pacientes para tu afiliaciÃ³n activa ({activeAffiliation?.name}).</p>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="bg-bmq-ivory text-bmq-black px-6 py-3 text-xs tracking-[0.2em] font-medium flex items-center hover:bg-white transition-colors"
        >
          <UserPlus size={16} className="mr-3" />
          NUEVO PACIENTE
        </button>
      </motion.div>

      {error && (
        <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 mb-8 text-sm">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-bmq-ivory/60 text-sm">Cargando pacientes...</div>
      ) : (
        <div className="bg-bmq-charcoal border border-white/5 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[0.65rem] tracking-[0.2em] uppercase text-bmq-ivory/50">
                <th className="p-6 font-normal">Nombre</th>
                <th className="p-6 font-normal">Documento</th>
                <th className="p-6 font-normal">Contacto</th>
                <th className="p-6 font-normal">Registro</th>
                <th className="p-6 font-normal text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {patients.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-6 text-center text-bmq-ivory/50 text-sm">
                    No tienes pacientes registrados en esta afiliaciÃ³n.
                  </td>
                </tr>
              ) : (
                patients.map((patient) => (
                  <tr key={patient.id} className="border-b border-white/5 hover:bg-white/5 transition-colors text-sm font-light">
                    <td className="p-6 font-medium text-bmq-ivory">{patient.first_name} {patient.last_name}</td>
                    <td className="p-6">{patient.document_type} {patient.document_number}</td>
                    <td className="p-6 text-bmq-ivory/60">
                      {patient.email || 'Sin correo'} <br/> {patient.phone || 'Sin telÃ©fono'}
                    </td>
                    <td className="p-6 text-bmq-ivory/60">{new Date(patient.created_at).toLocaleDateString()}</td>
                    <td className="p-6 text-right">
                      <Link to={`/portal/solicitar-poliza`} className="text-bmq-gold hover:text-white transition-colors text-xs tracking-widest uppercase flex items-center justify-end w-full">
                        <ArrowRight size={14} className="mr-2" /> NUEVA PÃ“LIZA
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-bmq-charcoal border border-white/10 w-full max-w-xl p-8">
            <h3 className="font-serif text-2xl text-bmq-ivory mb-6">Crear Paciente</h3>
            <form onSubmit={handleCreate} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[0.65rem] tracking-[0.2em] uppercase text-bmq-ivory/50 block mb-2">Nombre</label>
                  <input required type="text" value={formData.first_name} onChange={e => setFormData({...formData, first_name: e.target.value})} className="w-full bg-white/5 border border-white/10 p-3 text-bmq-ivory text-sm focus:border-bmq-gold outline-none transition-colors" />
                </div>
                <div>
                  <label className="text-[0.65rem] tracking-[0.2em] uppercase text-bmq-ivory/50 block mb-2">Apellido</label>
                  <input required type="text" value={formData.last_name} onChange={e => setFormData({...formData, last_name: e.target.value})} className="w-full bg-white/5 border border-white/10 p-3 text-bmq-ivory text-sm focus:border-bmq-gold outline-none transition-colors" />
                </div>
                <div>
                  <label className="text-[0.65rem] tracking-[0.2em] uppercase text-bmq-ivory/50 block mb-2">Tipo Doc.</label>
                  <select value={formData.document_type} onChange={e => setFormData({...formData, document_type: e.target.value})} className="w-full bg-bmq-black border border-white/10 p-3 text-bmq-ivory text-sm focus:border-bmq-gold outline-none">
                    <option value="CC">CÃ©dula de CiudadanÃ­a</option>
                    <option value="CE">CÃ©dula de ExtranjerÃ­a</option>
                    <option value="PA">Pasaporte</option>
                  </select>
                </div>
                <div>
                  <label className="text-[0.65rem] tracking-[0.2em] uppercase text-bmq-ivory/50 block mb-2">NÃºmero Doc.</label>
                  <input required type="text" value={formData.document_number} onChange={e => setFormData({...formData, document_number: e.target.value})} className="w-full bg-white/5 border border-white/10 p-3 text-bmq-ivory text-sm focus:border-bmq-gold outline-none transition-colors" />
                </div>
                <div>
                  <label className="text-[0.65rem] tracking-[0.2em] uppercase text-bmq-ivory/50 block mb-2">Correo (opcional)</label>
                  <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-white/5 border border-white/10 p-3 text-bmq-ivory text-sm focus:border-bmq-gold outline-none transition-colors" />
                </div>
                <div>
                  <label className="text-[0.65rem] tracking-[0.2em] uppercase text-bmq-ivory/50 block mb-2">TelÃ©fono (opcional)</label>
                  <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-white/5 border border-white/10 p-3 text-bmq-ivory text-sm focus:border-bmq-gold outline-none transition-colors" />
                </div>
              </div>
              <div className="flex justify-end space-x-4 mt-8">
                <button type="button" onClick={() => setShowModal(false)} className="px-6 py-3 text-xs tracking-[0.2em] text-bmq-ivory/50 hover:text-bmq-ivory">CANCELAR</button>
                <button type="submit" className="bg-bmq-gold text-bmq-black px-6 py-3 text-xs tracking-[0.2em] font-medium hover:bg-white transition-colors">GUARDAR PACIENTE</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
