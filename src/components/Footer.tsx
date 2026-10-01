import { Link } from 'react-router-dom';

export function Footer() {
  const links = [
    { name: 'Inicio', href: '/' },
    { name: 'Protección', href: '/proteccion' },
    { name: 'Coberturas', href: '/coberturas' },
    { name: 'Procedimientos', href: '/procedimientos' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' },
  ];

  const legal = [
    { name: 'Política de privacidad', href: '#' },
    { name: 'Tratamiento de datos', href: '#' },
    { name: 'Términos y condiciones', href: '#' },
    { name: 'Aviso legal', href: '#' },
  ];

  return (
    <footer className="bg-bmq-charcoal pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          <div className="lg:col-span-5 flex flex-col">
            <Link to="/" className="flex flex-col group w-fit mb-8">
              <img 
                src="/images/logos/BMQ_H-D-T.png" 
                alt="BMQ - Blindaje Médico Quirúrgico" 
                className="bmq-footer-logo transition-opacity duration-300 group-hover:opacity-80"
              />
            </Link>
            <p className="text-sm text-bmq-ivory/40 max-w-sm font-light leading-relaxed">
              Protección jurídica especializada y respaldo para profesionales de la salud.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs tracking-widest text-bmq-ivory/30 uppercase mb-8">Navegación</h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-bmq-ivory/60 hover:text-bmq-ivory transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-xs tracking-widest text-bmq-ivory/30 uppercase mb-8">Legal</h4>
            <ul className="space-y-4">
              {legal.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm text-bmq-ivory/60 hover:text-bmq-ivory transition-colors duration-300">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[0.65rem] text-bmq-ivory/30 tracking-wider">
          <p>&copy; {new Date().getFullYear()} BMQ - Blindaje Médico Quirúrgico. Todos los derechos reservados.</p>
          <p className="mt-4 md:mt-0">Diseño confidencial y reservado.</p>
        </div>
      </div>
    </footer>
  );
}
