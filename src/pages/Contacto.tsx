import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MapPin, MessageCircle } from 'lucide-react';

export function Contacto() {
  return (
    <div className="w-full">
      
      {/* 1. HERO (NEGRO) */}
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 bg-bmq-black text-bmq-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto"
          >
            <span className="text-[0.65rem] tracking-[0.3em] uppercase text-bmq-ivory/50 block mb-8 flex items-center">
              <span className="w-8 h-[1px] bg-bmq-ivory/20 mr-4"></span>
              ATENCIÓN ESPECIALIZADA
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] mb-6 text-bmq-ivory">
              Contacto.
            </h1>
            <p className="text-[17px] md:text-[20px] text-bmq-ivory/80 font-light leading-relaxed max-w-3xl">
              Comuníquese con BMQ para recibir orientación sobre nuestras
              coberturas y servicios de protección jurídica.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. BLOQUE PRINCIPAL DE CONTACTO E INICIAR PROTECCIÓN (CARBÓN) */}
      <section className="py-24 lg:py-32 bg-bmq-charcoal text-bmq-ivory border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* IZQUIERDA: CONTACTO DIRECTO */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col space-y-16"
            >
              <div>
                <h3 className="text-[11px] tracking-[0.2em] font-medium uppercase text-bmq-blue mb-8 flex items-center">
                  <MapPin size={16} className="mr-3" />
                  NUESTRAS OFICINAS
                </h3>
                <div className="text-[16px] md:text-[18px] text-bmq-ivory/80 font-light leading-relaxed">
                  <p>Carrera 43 # 5A – 113</p>
                  <p>Oficina 702</p>
                  <p>Edificio One Plaza</p>
                  <p className="mt-4 font-serif text-xl italic text-bmq-ivory/60">Medellín, Colombia</p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-12">
                <h3 className="text-[11px] tracking-[0.2em] font-medium uppercase text-bmq-blue mb-8">
                  CANALES DIRECTOS
                </h3>
                <div className="flex flex-col space-y-8">
                  <a href="mailto:contact@blindajemedicoquirurgico.com" className="group flex items-center text-[15px] md:text-[17px] text-bmq-ivory/80 font-light hover:text-bmq-ivory transition-colors">
                    <Mail size={18} className="mr-4 text-bmq-ivory/30 group-hover:text-bmq-blue transition-colors" />
                    contact@blindajemedicoquirurgico.com
                  </a>
                  <a href="https://wa.me/573016546268?text=Hola,%20estaba%20visitando%20su%20web.%20Estoy%20interesado%20en%20adquirir%20sus%20servicios" target="_blank" rel="noopener noreferrer" className="group flex items-center text-[15px] md:text-[17px] text-bmq-ivory/80 font-light hover:text-bmq-ivory transition-colors">
                    <MessageCircle size={18} className="mr-4 text-bmq-ivory/30 group-hover:text-bmq-blue transition-colors mt-1 self-start" />
                    <span className="flex flex-col">
                      <span className="text-[10px] tracking-[0.2em] font-medium uppercase text-bmq-ivory/50 mb-1">WHATSAPP</span>
                      <span>+57 301 654 6268</span>
                    </span>
                  </a>
                </div>
                <p className="text-[13px] text-bmq-ivory/40 font-light italic mt-8 border-l border-white/10 pl-4">
                  Comuníquese con nuestro equipo a través de nuestros canales directos.
                </p>
              </div>
            </motion.div>

            {/* DERECHA: INICIAR PROTECCIÓN */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full"
            >
              <div className="border border-white/10 p-10 lg:p-14 bg-bmq-black/20 relative h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-2 h-2 bg-bmq-gold/50"></div>
                
                <h3 className="font-serif text-3xl md:text-4xl text-bmq-ivory mb-6">
                  Inicie su protección.
                </h3>
                <p className="text-[16px] text-bmq-ivory/70 font-light leading-relaxed mb-12">
                  Conozca el nivel de cobertura adecuado para su práctica profesional
                  y active la protección correspondiente para cada paciente y procedimiento.
                </p>
                
                <Link to="/solicitar-cobertura" className="inline-flex items-center justify-center bg-bmq-ivory text-bmq-black px-8 py-5 text-xs tracking-[0.2em] font-medium transition-all duration-500 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group w-full sm:w-auto">
                  SOLICITAR COBERTURA
                  <ArrowRight size={14} className="ml-4 group-hover:translate-x-2 transition-transform duration-500" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. ¿QUÉ NECESITA? (MARFIL) */}
      <section className="py-24 lg:py-32 bg-bmq-ivory text-bmq-black border-y border-bmq-black/5">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-5xl mx-auto mb-16 lg:mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl md:text-5xl leading-[1.2] mb-4">
                ¿QUÉ NECESITA?
              </h2>
            </motion.div>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { num: '01', title: 'CONOCER BMQ', desc: 'Para quienes quieren entender el sistema de protección.', cta: 'CONOCER BMQ', link: '/proteccion' },
              { num: '02', title: 'COMPARAR COBERTURAS', desc: 'Para quienes quieren conocer la diferencia entre BMQ y BMQ+.', cta: 'VER COBERTURAS', link: '/coberturas' },
              { num: '03', title: 'SOLICITAR COBERTURA', desc: 'Para quienes ya están listos para iniciar el proceso.', cta: 'SOLICITAR COBERTURA', link: '/solicitar-cobertura' }
            ].map((op, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="border-t border-bmq-black/10 pt-8 flex flex-col h-full"
              >
                <div className="flex items-center mb-6">
                  <span className="font-serif text-2xl text-bmq-black/20 mr-4">{op.num}</span>
                  <h3 className="text-[11px] tracking-[0.2em] font-medium uppercase text-bmq-black">{op.title}</h3>
                </div>
                <p className="text-[15px] text-bmq-charcoal/70 font-normal leading-relaxed mb-8 flex-grow">
                  {op.desc}
                </p>
                <Link to={op.link} className="inline-flex items-center text-[10px] tracking-[0.2em] font-medium text-bmq-blue hover:text-bmq-black transition-colors group mt-auto">
                  {op.cta}
                  <ArrowRight size={12} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CTA FINAL (NEGRO) */}
      <section className="py-24 lg:py-32 bg-bmq-black text-bmq-ivory border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-center flex flex-col items-center"
          >
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.2] mb-8">
              LA PROTECCIÓN COMIENZA<br className="hidden md:block" /> CON UNA CONVERSACIÓN.
            </h2>
            <p className="text-[17px] md:text-[20px] text-bmq-ivory/70 font-light leading-relaxed mb-16 max-w-2xl">
              Nuestro equipo puede orientarle sobre el Sistema BMQ, sus niveles
              de cobertura y el proceso para proteger cada procedimiento.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-6 w-full">
              <a href="https://wa.me/573016546268?text=Hola,%20estaba%20visitando%20su%20web.%20Estoy%20interesado%20en%20adquirir%20sus%20servicios" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-bmq-gold text-bmq-black px-8 py-5 text-xs tracking-[0.2em] font-medium transition-all duration-500 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group w-full sm:w-auto min-w-[240px]">
                HABLAR CON BMQ
                <ArrowRight size={14} className="ml-4 group-hover:translate-x-2 transition-transform duration-500" />
              </a>
              <Link to="/solicitar-cobertura" className="inline-flex items-center justify-center border border-white/20 text-bmq-ivory px-8 py-5 text-xs tracking-[0.2em] font-medium transition-all duration-500 hover:border-bmq-ivory group w-full sm:w-auto min-w-[240px]">
                SOLICITAR COBERTURA
                <ArrowRight size={14} className="ml-4 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </div>
            
          </motion.div>
        </div>
      </section>

    </div>
  );
}
