import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function FinalCTASection() {
  return (
    <section id="asesoria" className="py-32 lg:py-48 bg-bmq-black relative flex items-center justify-center text-center">
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-bmq-charcoal/80 to-bmq-black pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-bmq-ivory mb-8">
            Protege lo que <br className="hidden md:block" />
            <span className="italic text-bmq-gold">has construido.</span>
          </h2>
          
          <p className="text-sm md:text-base text-bmq-ivory/60 max-w-xl mx-auto font-light leading-relaxed mb-16">
            Conozca el nivel de protección de su práctica profesional.
          </p>
          
          <Link to="/contacto" className="group bg-bmq-ivory text-bmq-black px-10 py-5 text-xs tracking-widest font-medium hover:bg-white transition-all duration-300">
            SOLICITAR ASESORÍA
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
