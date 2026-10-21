import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function HeroCinematic() {
  const prefersReducedMotion = useReducedMotion();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Configuration for media
  const mediaConfig = {
    // When a real video is ready, place it in public/assets/hero-bmq.mp4
    videoSrcDesktop: '/assets/hero-bmq.mp4', 
    videoSrcMobile: '/assets/hero-bmq-mobile.mp4',
    // New cinematic background provided by user
    poster: '/images/pages/home/home_cinematic.png',
  };

  // Base delays for the cinematic timeline
  const timeline = prefersReducedMotion ? {
    videoReveal: 0,
    brandReveal: 0,
    lineReveal: 0,
    headlineReveal: 0,
    subheadlineReveal: 0,
    ctaReveal: 0,
    indicatorReveal: 0
  } : {
    videoReveal: 1.0,      // 1.0 - 4.5s
    brandReveal: 3.5,      // 3.5 - 5.5s
    lineReveal: 5.0,       // 5.0 - 6.5s
    headlineReveal: 6.0,   // 6.0 - 8.0s
    subheadlineReveal: 7.0, // 7.0 - 9.0s
    ctaReveal: 8.0,        // 8.0s+
    indicatorReveal: 9.0   // 9.0s+
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center bg-bmq-black overflow-hidden">
      
      {/* 1. Cinematic Background Layer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.5, delay: timeline.videoReveal, ease: "easeInOut" }}
        className="absolute inset-0 z-0"
      >
        
        {/* Cinematic Background (scales slowly for slow tracking shot effect) */}
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 15, ease: "linear" }}
          className="absolute inset-0 w-full h-full bg-cover bg-[80%_center] lg:bg-center"
          style={{ backgroundImage: `url(${mediaConfig.poster})` }}
        />

        {/* Subtle overlays to ensure text legibility while keeping the doctor visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-bmq-black/90 via-bmq-black/50 to-transparent w-full md:w-2/3 lg:w-1/2 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bmq-black via-bmq-black/20 to-transparent top-1/2 h-1/2 z-10"></div>
      </motion.div>

      {/* 2. Content Layer */}
      <div className="container mx-auto px-6 lg:px-12 relative z-20 flex flex-col pt-24 md:pt-32">
        <div className="max-w-3xl">
          
          {/* Brand Reveal */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: timeline.brandReveal, ease: "easeOut" }}
            className="mb-10"
          >
            <span className="font-serif text-3xl md:text-4xl text-bmq-gold block tracking-widest drop-shadow-md">BMQ</span>
            <span className="text-[0.6rem] md:text-xs tracking-[0.3em] text-bmq-ivory/60 uppercase mt-2 block">
              Blindaje Médico Quirúrgico
            </span>
          </motion.div>

          {/* Signature Blue Line Reveal */}
          <motion.div 
            initial={{ scaleX: 0, opacity: 0, transformOrigin: "left" }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: timeline.lineReveal, ease: "easeInOut" }}
            className="w-16 h-[1px] bg-bmq-blue mb-10"
          />

          {/* Headline Reveal */}
          <motion.h1 
            className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 text-bmq-ivory"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: timeline.headlineReveal, ease: "easeOut" }}
              className="block"
            >
              PROTEGER
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: timeline.headlineReveal + 0.4, ease: "easeOut" }}
              className="italic text-bmq-ivory/90 block mt-2 md:mt-0"
            >
              lo que construyes.
            </motion.span>
          </motion.h1>

          {/* Subtitle Reveal */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: timeline.subheadlineReveal, ease: "easeOut" }}
            className="text-sm md:text-lg text-bmq-ivory/70 max-w-xl mb-14 font-light leading-relaxed border-l border-white/5 pl-6"
          >
            Cobertura y protección jurídica especializada, con respaldo, para médicos y profesionales de la salud en Colombia que realizan procedimientos quirúrgicos, estéticos e invasivos.
          </motion.p>

          {/* CTA Reveal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: timeline.ctaReveal, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8"
          >
            <Link to="/proteccion" className="group bg-bmq-ivory text-bmq-black px-8 py-4 text-[0.65rem] md:text-xs tracking-[0.2em] font-medium flex items-center transition-all duration-500 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              CONOCER BMQ
              <ArrowRight size={14} className="ml-4 group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
            <Link to="/contacto" className="group px-8 py-4 text-[0.65rem] md:text-xs tracking-[0.2em] font-medium text-bmq-ivory border border-white/20 flex items-center transition-all duration-500 hover:border-bmq-blue hover:text-white">
              HABLAR CON UN ESPECIALISTA
            </Link>
          </motion.div>
          
        </div>
      </div>

      {/* 3. Scroll Indicator Reveal */}
      <motion.a 
        href="#riesgo"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollY > 50 ? 0 : 1 }}
        transition={{ duration: 2, delay: timeline.indicatorReveal }}
        className="absolute bottom-16 lg:bottom-24 left-6 lg:left-12 flex flex-col items-center group cursor-pointer z-30 pointer-events-auto"
      >
        <span 
          style={{ writingMode: 'vertical-rl' }}
          className="text-[0.65rem] tracking-[0.4em] text-bmq-blue uppercase mb-8 group-hover:-translate-y-2 transition-transform duration-500 font-medium drop-shadow-sm"
        >
          DESCUBRIR
        </span>
        <motion.span 
          initial={{ height: 0 }}
          animate={{ height: 36 }}
          transition={{ duration: 1.5, delay: timeline.indicatorReveal + 0.5, ease: "circOut" }}
          className="w-[1.5px] bg-bmq-blue block group-hover:h-12 group-hover:-translate-y-2 transition-all duration-500 shadow-[0_0_8px_rgba(22,123,203,0.5)]"
        />
      </motion.a>
    </section>
  );
}
