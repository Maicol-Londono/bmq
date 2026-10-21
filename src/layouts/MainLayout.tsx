import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    // Los metadatos SEO (title, description, canonical...) los gestiona <SeoManager /> en App.tsx
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
