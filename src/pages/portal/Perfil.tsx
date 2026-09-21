import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';

export function Perfil() {
  const { user } = useAuth();

  return (
    <div className="p-8 lg:p-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="font-serif text-3xl lg:text-4xl text-bmq-ivory mb-2">Mi Perfil</h1>
        <p className="text-sm font-light text-bmq-ivory/60">Información profesional sincronizada con Wellezy Hub.</p>
      </motion.div>

      <div className="max-w-2xl bg-bmq-charcoal border border-white/5 p-12">
        <div className="space-y-8">
          <div>
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-bmq-ivory/40 block mb-1">Nombre Completo</span>
            <p className="text-lg text-bmq-ivory">{user?.fullName}</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-bmq-ivory/40 block mb-1">Documento</span>
              <p className="text-bmq-ivory">{user?.documentType.toUpperCase()} {user?.documentNumber}</p>
            </div>
            <div>
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-bmq-ivory/40 block mb-1">Correo Electrónico</span>
              <p className="text-bmq-ivory">{user?.email}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-bmq-ivory/40 block mb-1">Especialidad</span>
              <p className="text-bmq-ivory">{user?.specialty}</p>
            </div>
            <div>
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-bmq-ivory/40 block mb-1">Institución / Clínica</span>
              <p className="text-bmq-ivory">{user?.institution}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-xs text-bmq-ivory/30 italic">Para modificar estos datos, debes contactar a tu asesor comercial o gestionarlo desde la aplicación central.</p>
        </div>
      </div>
    </div>
  );
}
