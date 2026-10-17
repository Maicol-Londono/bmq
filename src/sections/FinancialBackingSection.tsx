import { motion } from 'framer-motion';

export function FinancialBackingSection() {
  return (
    <section id="respaldo" className="py-32 lg:py-56 bg-bmq-black relative flex items-center justify-center text-center overflow-hidden">
      
      {/* Subtle glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-bmq-gold/5 via-bmq-black to-bmq-black rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-[0.65rem] tracking-[0.3em] uppercase text-bmq-gold mb-16">[POR VALIDAR CONTRACTUALMENTE]</span>
          
          <h2 className="font-serif text-7xl md:text-[8rem] lg:text-[12rem] leading-none text-transparent bg-clip-text bg-gradient-to-b from-bmq-ivory to-bmq-ivory/30 mb-8 font-light">
            250 millones de pesos
          </h2>
          
          <div className="w-px h-16 bg-gradient-to-b from-bmq-gold/40 to-transparent mb-12"></div>
          
          <p className="text-xl md:text-2xl lg:text-3xl font-serif text-bmq-ivory/90 max-w-2xl mb-8">
            Hasta $250.000.000 COP de respaldo económico*
          </p>
          
          <p className="text-[0.65rem] tracking-wider text-bmq-ivory/40 max-w-lg mt-8 uppercase leading-loose border-t border-white/5 pt-8">
            *Sujeto a las condiciones, límites y términos de la cobertura correspondiente. Información pendiente de validación contractual.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
