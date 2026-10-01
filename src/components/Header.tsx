import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]); // Also re-evaluate when path changes

  const navLinks = [
    { name: 'INICIO', href: '/' },
    { name: 'PROTECCIÓN', href: '/proteccion' },
    { name: 'COBERTURAS', href: '/coberturas' },
    { name: 'PROCEDIMIENTOS', href: '/procedimientos' },
    { name: 'NOSOTROS', href: '/nosotros' },
    { name: 'CONTACTO', href: '/contacto' },
  ];

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: pathname === '/' ? 8.5 : 0, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-700 ${
        isScrolled || pathname !== '/' ? 'bg-bmq-black/95 backdrop-blur-md border-b border-white/5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img 
            src="/images/logos/BMQ_H-D-T.png" 
            alt="BMQ - Blindaje Médico Quirúrgico" 
            className="bmq-navbar-logo transition-opacity duration-300 group-hover:opacity-80"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className={`text-[0.65rem] tracking-[0.15em] font-medium transition-colors duration-300 relative group ${
                pathname === link.href ? 'text-bmq-gold' : 'text-bmq-ivory/70 hover:text-bmq-ivory'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-bmq-blue transition-all duration-300 ${
                pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
          
          <div className="flex items-center pl-6 border-l border-white/10">
            <Link 
              to="/solicitar-cobertura"
              className="text-xs tracking-widest font-medium border border-white/20 px-6 py-2.5 hover:bg-bmq-ivory hover:text-bmq-black transition-all duration-300"
            >
              SOLICITAR COBERTURA
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-bmq-ivory"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-bmq-charcoal border-b border-white/5 py-6 px-6 shadow-2xl lg:hidden"
          >
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className={`text-sm tracking-widest transition-all duration-300 ${
                    pathname === link.href ? 'text-bmq-gold' : 'text-bmq-ivory/80 hover:text-bmq-ivory hover:pl-2'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-white/10 flex flex-col">
                <Link 
                  to="/solicitar-cobertura"
                  className="text-xs tracking-widest font-medium border border-white/20 px-6 py-4 text-center hover:bg-bmq-ivory hover:text-bmq-black transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  SOLICITAR COBERTURA
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
