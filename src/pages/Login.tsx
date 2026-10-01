import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { AffiliationSelector } from '../components/AffiliationSelector';

export function Login() {
  const { login, logout, selectAffiliation, affiliations, isAuthenticated, isPendingSelection, isInitializing } = useAuth();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/portal', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    setErrorMsg('');
    try {
      const { requiresSelection } = await login(email, password);
      // Con varias afiliaciones se queda en esta pantalla para elegir; nunca se toma la primera.
      if (!requiresSelection) {
        navigate('/portal');
      }
    } catch (err: any) {
      setErrorMsg(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Mientras se valida un token guardado no se muestra el formulario (evita un parpadeo del login).
  if (isInitializing) {
    return <div className="min-h-screen bg-bmq-black" />;
  }

  return (
    <div className="min-h-screen bg-bmq-black flex flex-col items-center justify-center pt-20 pb-20 relative">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-bmq-charcoal/30 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="w-full max-w-md px-6">
        {isPendingSelection ? (
          <AffiliationSelector
            affiliations={affiliations}
            onSelect={async (id) => {
              await selectAffiliation(id);
              navigate('/portal');
            }}
            onCancel={() => { void logout(); }}
          />
        ) : (
        <>
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-[10px] tracking-[0.2em] uppercase text-bmq-ivory/50 hover:text-bmq-ivory transition-colors group">
            <ArrowLeft size={12} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Volver a la web
          </Link>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-bmq-charcoal/80 backdrop-blur-sm border border-white/5 p-12"
        >
          <div className="text-center mb-12">
            <h1 className="font-serif text-3xl text-bmq-ivory mb-3 tracking-wide">PORTAL MÉDICO</h1>
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-bmq-ivory/50">Acceso exclusivo para profesionales afiliados</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex flex-col">
              <label className="text-[0.65rem] tracking-[0.2em] uppercase text-bmq-ivory/50 mb-3">
                Correo Electrónico
              </label>
              <input 
                type="email"
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-transparent border-b border-white/20 pb-2 text-bmq-ivory font-light focus:outline-none focus:border-bmq-ivory transition-colors placeholder:text-white/10"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[0.65rem] tracking-[0.2em] uppercase text-bmq-ivory/50 mb-3">
                Contraseña
              </label>
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-transparent border-b border-white/20 pb-2 text-bmq-ivory font-light focus:outline-none focus:border-bmq-ivory transition-colors placeholder:text-white/10"
              />
            </div>
            
            {errorMsg && (
              <div className="text-red-400 text-xs text-center">
                {errorMsg}
              </div>
            )}
            
            <div className="pt-4">
              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-bmq-ivory text-bmq-black px-6 py-4 text-xs tracking-[0.2em] font-medium hover:bg-white transition-colors duration-300 disabled:opacity-50"
              >
                {isLoading ? 'AUTENTICANDO...' : 'INGRESAR'}
              </button>
            </div>
          </form>
          
        </motion.div>
        </>
        )}
      </div>
    </div>
  );
}
