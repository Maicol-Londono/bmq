import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Dynamic titles
    const titles: Record<string, string> = {
      '/': 'Inicio',
      '/proteccion': 'Protección Jurídica',
      '/coberturas': 'Coberturas',
      '/coberturas/basica': 'Garantía Básica',
      '/coberturas/plus': 'Garantía Plus',
      '/procedimientos': 'Procedimientos y Alcance',
      '/nosotros': 'Quiénes Somos',
      '/contacto': 'Contacto',
      '/solicitar-cobertura': 'Solicitar Cobertura'
    };

    document.title = `BMQ | ${titles[pathname] || 'Blindaje Médico Quirúrgico'}`;
  }, [pathname]);

  return (
    <div className="bg-bmq-black text-bmq-ivory min-h-screen font-sans selection:bg-bmq-blue selection:text-white">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
