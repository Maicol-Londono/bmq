import { motion } from 'framer-motion';

export function PreventionSection() {
  const items = [
    "Historia clínica",
    "Consentimientos",
    "Documentación",
    "Protocolos",
    "Comunicación con el paciente",
    "Orientación jurídica"
  ];

  return (
    <section id="prevencion" className="py-24 lg:py-48 bg-bmq-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-bmq-charcoal/30 blur-3xl rounded-full transform translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-bmq-ivory mb-6">
              NO ES SOLO DEFENSA.
            </h2>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-bmq-gold italic mb-10">
              ES PREVENCIÓN.
            </h2>
            
            <p className="text-lg text-bmq-ivory/70 font-light max-w-md leading-relaxed">
              La verdadera protección comienza antes de que aparezca el conflicto. Estructuramos su práctica para minimizar riesgos desde el primer momento.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
            
            <div className="pl-8 md:pl-16 space-y-8">
              {items.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group flex items-center"
                >
                  <span className="w-6 h-[1px] bg-white/20 mr-6 group-hover:bg-bmq-blue group-hover:w-10 transition-all duration-300"></span>
                  <span className="text-sm md:text-base tracking-wider text-bmq-ivory/80 group-hover:text-bmq-ivory transition-colors duration-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
