import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { PlusCircle, FileText, CreditCard, ShieldCheck } from 'lucide-react';
import { formatCurrency } from '../../lib/pricing';

export function Dashboard() {
  const { user } = useAuth();

  const getPaymentModeLabel = () => {
    switch (user?.paymentMode) {
      case 'immediate': return 'PAGO POR EMISIÓN';
      case 'balance': return 'SALDO A FAVOR';
      case 'postpaid': 
        if (user.billingFrequency === 'monthly') return 'PAGO MENSUAL (POSTERIOR)';
        if (user.billingFrequency === 'biweekly') return 'PAGO QUINCENAL (POSTERIOR)';
        if (user.billingFrequency === 'weekly') return 'PAGO SEMANAL (POSTERIOR)';
        return 'PAGO POSTERIOR';
      default: return 'NO DEFINIDO';
    }
  };

  return (
    <div className="p-8 lg:p-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
        <span className="text-xs tracking-[0.2em] uppercase text-bmq-ivory/50 block mb-4">Bienvenido,</span>
        <h1 className="font-serif text-4xl lg:text-5xl text-bmq-ivory mb-2">{user?.fullName}</h1>
        <p className="text-sm font-light text-bmq-ivory/60">{user?.institution}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-bmq-charcoal border border-white/5 p-8 flex flex-col">
          <ShieldCheck size={24} className="text-bmq-blue mb-6" />
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-bmq-ivory/50 block mb-2">Estado</span>
          <span className="font-serif text-2xl text-bmq-ivory">Activo</span>
        </div>
        
        <div className="bg-bmq-charcoal border border-white/5 p-8 flex flex-col">
          <CreditCard size={24} className="text-bmq-gold mb-6" />
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-bmq-ivory/50 block mb-2">Modalidad Comercial</span>
          <span className="font-serif text-xl text-bmq-ivory mb-2">{getPaymentModeLabel()}</span>
          {user?.paymentMode === 'balance' && (
            <span className="text-xs text-bmq-ivory/50 font-light mt-auto">Saldo disponible: <strong className="text-bmq-gold">{formatCurrency(user.balanceAvailable)}</strong></span>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        <Link to="/portal/solicitar-poliza" className="bg-bmq-ivory text-bmq-black px-8 py-5 text-xs tracking-[0.2em] font-medium flex items-center justify-center hover:bg-white transition-colors">
          <PlusCircle size={16} className="mr-3" />
          SOLICITAR NUEVA PÓLIZA
        </Link>
        <Link to="/portal/polizas" className="border border-white/20 text-bmq-ivory px-8 py-5 text-xs tracking-[0.2em] font-medium flex items-center justify-center hover:bg-white/5 transition-colors">
          <FileText size={16} className="mr-3" />
          VER MIS PÓLIZAS
        </Link>
      </div>
    </div>
  );
}
