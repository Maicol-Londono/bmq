import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function ProtectionLevelsSection() {
  return (
    <section id="coberturas" className="py-24 lg:py-40 bg-bmq-charcoal border-y border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-xs md:text-sm tracking-[0.3em] text-bmq-gold mb-4 uppercase">Elige tu nivel de protección</h2>
          <div className="h-[1px] w-12 bg-bmq-gold/40 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10 max-w-5xl mx-auto">
          
          {/* BMQ */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-12 md:p-20 flex flex-col items-center text-center relative group border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.02] transition-colors duration-500"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-bmq-blue/0 group-hover:bg-bmq-blue transition-colors duration-500"></div>
            
            <h3 className="font-serif text-3xl text-bmq-ivory mb-2">BMQ</h3>
            <span className="text-[0.65rem] tracking-[0.2em] text-bmq-ivory/50 uppercase block mb-12">Protección Jurídica</span>
            
            <p className="text-sm text-bmq-ivory/70 font-light leading-relaxed mb-16 flex-grow">
              Esquema de defensa especializado, acompañamiento preventivo y representación ante controversias profesionales.
            </p>
            
            <Link to="/coberturas" className="text-xs tracking-widest text-bmq-ivory border-b border-white/20 pb-2 hover:border-bmq-ivory hover:text-white transition-all duration-300">
              VER COBERTURAS
            </Link>
          </motion.div>

          {/* BMQ+ */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-12 md:p-20 flex flex-col items-center text-center relative group hover:bg-white/[0.02] transition-colors duration-500"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-bmq-gold/0 group-hover:bg-bmq-gold transition-colors duration-500"></div>
            
            <h3 className="font-serif text-3xl text-bmq-gold mb-2 flex items-center">
              BMQ<span className="text-2xl ml-1">+</span>
            </h3>
            <span className="text-[0.65rem] tracking-[0.2em] text-bmq-gold/70 uppercase block mb-12">Protección Jurídica + Respaldo</span>
            
            <p className="text-sm text-bmq-ivory/70 font-light leading-relaxed mb-16 flex-grow">
              El esquema completo de defensa especializado, sumado al componente de respaldo económico de hasta $250M COP*.
            </p>
            
            <Link to="/coberturas" className="text-xs tracking-widest text-bmq-gold border-b border-bmq-gold/30 pb-2 hover:border-bmq-gold hover:text-bmq-ivory transition-all duration-300">
              VER COBERTURAS
            </Link>
          </motion.div>

        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <Link to="/coberturas" className="group px-12 py-5 text-xs tracking-[0.2em] font-medium text-bmq-ivory border border-white/20 flex items-center transition-all duration-500 hover:border-bmq-gold hover:text-bmq-gold">
            VER TODAS LAS COBERTURAS
            <ArrowRight size={14} className="ml-4 group-hover:translate-x-2 transition-transform duration-500" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
