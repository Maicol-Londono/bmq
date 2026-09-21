import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-bmq-black via-bmq-black/90 to-bmq-black z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-bmq-charcoal/40 via-bmq-black to-bmq-black z-10 mix-blend-multiply"></div>
        {/* Placeholder for real cinematic image */}
        <div className="absolute inset-0 bg-bmq-charcoal opacity-40 mix-blend-luminosity bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000&auto=format&fit=crop')" }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-20 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="font-serif text-xl md:text-2xl text-bmq-gold/80 mb-2 block tracking-widest">BMQ</span>
          <span className="text-xs md:text-sm tracking-[0.3em] text-bmq-ivory/60 uppercase">Blindaje Médico Quirúrgico</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-10 max-w-5xl text-bmq-ivory"
        >
          Proteger <br className="hidden md:block" />
          <span className="italic text-bmq-ivory/90">lo que construyes.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-base md:text-lg text-bmq-ivory/70 max-w-2xl mb-16 font-light leading-relaxed"
        >
          Protección jurídica especializada y respaldo para profesionales de la salud que realizan procedimientos quirúrgicos, estéticos e invasivos.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a href="#conocer" className="group bg-bmq-ivory text-bmq-black px-8 py-4 text-xs tracking-widest font-medium flex items-center transition-all duration-300 hover:bg-white">
            CONOCER BMQ
            <ArrowRight size={14} className="ml-3 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#asesoria" className="group px-8 py-4 text-xs tracking-widest font-medium text-bmq-ivory border border-white/20 flex items-center transition-all duration-300 hover:border-bmq-blue hover:text-white">
            HABLAR CON UN ESPECIALISTA
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="w-[1px] h-12 bg-gradient-to-b from-bmq-ivory/40 to-transparent block mb-4"></span>
        <span className="text-[0.6rem] tracking-widest text-bmq-ivory/40 uppercase">Descubrir</span>
      </motion.div>
    </section>
  );
}
