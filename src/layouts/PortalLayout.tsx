import { useEffect, useState } from 'react';
import { Outlet, Navigate, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, FileText, PlusCircle, User, ChevronDown } from 'lucide-react';

export function PortalLayout() {
  const { isAuthenticated, isInitializing, user, logout, affiliations, activeAffiliation, selectAffiliation } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [switching, setSwitching] = useState(false);
  const [switchError, setSwitchError] = useState('');

  // Cambio de afiliación sin cerrar sesión: el backend vuelve a validar BmqUserAccess.
  const handleSwitch = async (affiliationId: string) => {
    if (!activeAffiliation || affiliationId === activeAffiliation.id) return;
    setSwitching(true);
    setSwitchError('');
    try {
      await selectAffiliation(affiliationId);
      navigate('/portal');
    } catch (err: unknown) {
      setSwitchError(err instanceof Error ? err.message : 'No fue posible cambiar de afiliación.');
    } finally {
      setSwitching(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (isInitializing) {
    return <div className="min-h-screen bg-bmq-black" />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-bmq-black text-bmq-ivory flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 lg:w-80 bg-bmq-charcoal border-r border-white/5 flex flex-col md:min-h-screen shrink-0">
        <div className="p-8 border-b border-white/5">
          <Link to="/portal" className="flex flex-col group w-fit">
            <span className="font-serif text-2xl font-semibold tracking-wider text-bmq-ivory group-hover:text-bmq-gold transition-colors duration-300">BMQ</span>
            <span className="text-[0.5rem] tracking-[0.2em] text-bmq-ivory/60 mt-1">PORTAL MÉDICO</span>
          </Link>
        </div>
        
        <div className="p-8 border-b border-white/5">
          <p className="text-sm font-light mb-1">{user?.fullName}</p>
          <p className="text-[0.65rem] tracking-widest uppercase text-bmq-ivory/40">{user?.specialty}</p>
          {activeAffiliation?.document && (
            <p className="text-[0.6rem] tracking-widest uppercase text-bmq-ivory/30 mt-1">
              {activeAffiliation.document_label} {activeAffiliation.document}
            </p>
          )}

          {affiliations.length > 1 && activeAffiliation && (
            <div className="mt-6">
              <label className="block text-[0.6rem] tracking-[0.2em] uppercase text-bmq-ivory/40 mb-2" htmlFor="bmq-affiliation-switch">
                Afiliación activa
              </label>
              <div className="relative">
                <select
                  id="bmq-affiliation-switch"
                  value={activeAffiliation.id}
                  disabled={switching}
                  onChange={(e) => handleSwitch(e.target.value)}
                  className="w-full appearance-none bg-transparent border border-white/10 hover:border-bmq-ivory/40 px-3 py-2 pr-8 text-xs text-bmq-ivory focus:outline-none focus:border-bmq-ivory transition-colors disabled:opacity-50"
                >
                  {(['professional', 'institution'] as const).map((kind) => {
                    const group = affiliations.filter((a) => a.kind === kind);
                    if (group.length === 0) return null;
                    return (
                      <optgroup key={kind} label={kind === 'institution' ? 'Instituciones' : 'Profesional de la salud'} className="bg-bmq-charcoal">
                        {group.map((a) => (
                          <option key={a.id} value={a.id} className="bg-bmq-charcoal">
                            {a.name}
                          </option>
                        ))}
                      </optgroup>
                    );
                  })}
                </select>
                <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-bmq-ivory/40 pointer-events-none" />
              </div>
              {switchError && <p className="text-red-400 text-[0.65rem] mt-2">{switchError}</p>}
            </div>
          )}
        </div>

        <nav className="flex-1 p-6 space-y-2">
          <Link to="/portal/solicitar-poliza" className={`flex items-center px-4 py-3 text-sm tracking-wider transition-colors ${location.pathname.includes('/solicitar-poliza') ? 'bg-bmq-blue/10 text-bmq-blue' : 'text-bmq-ivory/60 hover:bg-white/5 hover:text-bmq-ivory'}`}>
            <PlusCircle size={16} className="mr-4" />
            NUEVA PÓLIZA
          </Link>
          <Link to="/portal/polizas" className={`flex items-center px-4 py-3 text-sm tracking-wider transition-colors ${location.pathname === '/portal/polizas' ? 'bg-bmq-ivory/10 text-bmq-ivory' : 'text-bmq-ivory/60 hover:bg-white/5 hover:text-bmq-ivory'}`}>
            <FileText size={16} className="mr-4" />
            MIS PÓLIZAS
          </Link>
          <Link to="/portal/perfil" className={`flex items-center px-4 py-3 text-sm tracking-wider transition-colors ${location.pathname === '/portal/perfil' ? 'bg-bmq-ivory/10 text-bmq-ivory' : 'text-bmq-ivory/60 hover:bg-white/5 hover:text-bmq-ivory'}`}>
            <User size={16} className="mr-4" />
            MI PERFIL
          </Link>
        </nav>

        <div className="p-6 border-t border-white/5">
          <button onClick={() => { void logout(); }} className="flex items-center px-4 py-3 text-sm tracking-wider text-bmq-ivory/40 hover:text-bmq-ivory transition-colors w-full">
            <LogOut size={16} className="mr-4" />
            CERRAR SESIÓN
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">
        {/* La clave fuerza a recargar las páginas al cambiar de afiliación. */}
        <Outlet key={activeAffiliation?.id} />
      </main>
    </div>
  );
}
