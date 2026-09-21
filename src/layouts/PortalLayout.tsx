import { useEffect } from 'react';
import { Outlet, Navigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, FileText, PlusCircle, User } from 'lucide-react';

export function PortalLayout() {
  const { isAuthenticated, isInitializing, user, logout } = useAuth();
  const location = useLocation();

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
          <button onClick={logout} className="flex items-center px-4 py-3 text-sm tracking-wider text-bmq-ivory/40 hover:text-bmq-ivory transition-colors w-full">
            <LogOut size={16} className="mr-4" />
            CERRAR SESIÓN
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}
