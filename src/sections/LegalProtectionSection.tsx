import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const areas = [
  {
    num: '01',
    title: 'RESPONSABILIDAD CIVIL',
    desc: 'Defensa ante reclamaciones de indemnización por presuntos daños en el ejercicio profesional.'
  },
  {
    num: '02',
    title: 'RESPONSABILIDAD PENAL',
    desc: 'Representación en investigaciones y procesos por presunta mala praxis médica.'
  },
  {
    num: '03',
    title: 'RESPONSABILIDAD DISCIPLINARIA',
    desc: 'Acompañamiento ante tribunales éticos y entidades de control profesional.'
  },
  {
    num: '04',
    title: 'ACOMPAÑAMIENTO PREVENTIVO',
    desc: 'Asesoría jurídica constante para la correcta estructuración del acto médico.'
  }
];

export function LegalProtectionSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section id="proteccion" className="py-24 lg:py-40 bg-bmq-charcoal border-y border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-bmq-ivory/50">Protección Jurídica</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-7 flex flex-col justify-center">
            {areas.map((area, index) => (
              <div 
                key={area.num}
                className="group border-b border-white/10 last:border-0 py-8 md:py-12 cursor-pointer relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => setHoveredIndex(index)}
              >
                <div className="flex items-start md:items-center justify-between">
                  <div className="flex items-start md:items-center flex-col md:flex-row">
                    <span className={`font-serif text-xl md:text-2xl w-16 mb-4 md:mb-0 transition-colors duration-500 ${hoveredIndex === index ? 'text-bmq-blue' : 'text-bmq-ivory/30'}`}>
                      {area.num}
                    </span>
                    <h3 className={`text-xl md:text-3xl font-serif tracking-wide transition-all duration-500 ${hoveredIndex === index ? 'text-bmq-ivory translate-x-0' : 'text-bmq-ivory/50 md:-translate-x-4'}`}>
                      {area.title}
                    </h3>
                  </div>
                  
                  {/* Mobile description (shows only when active) */}
                  <div className="md:hidden mt-4">
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-sm text-bmq-ivory/70 font-light leading-relaxed pt-2"
                        >
                          {area.desc}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                
                {/* Active Line Indicator */}
                <div className={`absolute bottom-0 left-0 h-[1px] bg-bmq-blue transition-all duration-500 ${hoveredIndex === index ? 'w-full' : 'w-0'}`}></div>
              </div>
            ))}
          </div>

          <div className="hidden md:flex lg:col-span-5 items-center justify-center pl-8 lg:pl-16 border-l border-white/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={hoveredIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="max-w-md"
              >
                {hoveredIndex !== null && (
                  <>
                    <span className="font-serif text-8xl text-bmq-ivory/5 block mb-8">{areas[hoveredIndex].num}</span>
                    <h4 className="text-lg tracking-widest text-bmq-gold mb-6">{areas[hoveredIndex].title}</h4>
                    <p className="text-xl text-bmq-ivory/80 font-light leading-relaxed">
                      {areas[hoveredIndex].desc}
                    </p>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
