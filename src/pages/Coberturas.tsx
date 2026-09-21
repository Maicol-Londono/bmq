import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const comparisonFeatures = [
  { name: 'PROTECCIÓN JURÍDICA', bmq: true, plus: true },
  { name: 'ASESORÍA Y ACOMPAÑAMIENTO', bmq: true, plus: true },
  { name: 'REPRESENTACIÓN JUDICIAL', bmq: true, plus: true },
  { name: 'RESPONSABILIDAD CIVIL', bmq: true, plus: true },
  { name: 'DEFENSA PENAL', bmq: true, plus: true },
  { name: 'DEFENSA DISCIPLINARIA', bmq: true, plus: true },
  { name: 'PROCESOS ADMINISTRATIVOS', bmq: true, plus: true },
  { name: 'VIGENCIA DE PROTECCIÓN', bmq: true, plus: true },
  { name: 'RESPALDO ECONÓMICO', bmq: false, plus: 'HASTA $250.000.000*' }
];

export function Coberturas() {
  return (
    <div className="w-full">
      
      {/* 1. HERO */}
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 bg-bmq-black text-bmq-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-[0.65rem] tracking-[0.3em] uppercase text-bmq-ivory/50 block mb-8">
              NIVELES DE COBERTURA
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] mb-8 text-bmq-ivory">
              ELIGE EL NIVEL DE<br />
              PROTECCIÓN<br />
              <span className="italic text-bmq-ivory/70">para tu práctica.</span>
            </h1>
            <p className="text-[17px] md:text-[20px] text-bmq-ivory/80 font-light leading-relaxed max-w-2xl mx-auto">
              Dos alternativas de protección jurídica diseñadas para acompañarte 
              antes, durante y después de tus procedimientos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. DOS NIVELES + 3. COMPARACIÓN */}
      <section className="py-24 lg:py-40 bg-bmq-ivory text-bmq-black">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-4xl mx-auto text-center mb-24 lg:mb-32">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-10"
            >
              DOS NIVELES.<br />
              UN MISMO SISTEMA DE PROTECCIÓN.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-[17px] md:text-[19px] text-bmq-charcoal/80 font-normal leading-relaxed max-w-3xl mx-auto"
            >
              BMQ y BMQ+ comparten una estructura de protección jurídica
              especializada. La diferencia fundamental está en el componente de
              respaldo económico incluido en BMQ+.
            </motion.p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Cabecera Desktop */}
            <div className="hidden md:grid grid-cols-12 gap-4 border-b-2 border-bmq-black mb-8 pb-4">
              <div className="col-span-6"></div>
              <div className="col-span-3 text-center">
                <span className="font-serif text-3xl text-bmq-blue block mb-1">BMQ</span>
              </div>
              <div className="col-span-3 text-center">
                <span className="font-serif text-3xl text-bmq-gold block mb-1 flex items-center justify-center">BMQ<span className="text-xl ml-0.5">+</span></span>
              </div>
            </div>

            {/* Cabecera Mobile */}
            <div className="md:hidden flex justify-between items-end border-b-2 border-bmq-black mb-8 pb-4">
              <div className="w-1/2"></div>
              <div className="w-1/4 text-center">
                <span className="font-serif text-xl text-bmq-blue">BMQ</span>
              </div>
              <div className="w-1/4 text-center">
                <span className="font-serif text-xl text-bmq-gold flex items-center justify-center">BMQ+</span>
              </div>
            </div>

            {/* Filas */}
            <div className="space-y-0 border-b border-bmq-black/20 pb-8 mb-8">
              {comparisonFeatures.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="grid grid-cols-12 gap-4 py-5 border-b border-bmq-black/10 hover:bg-bmq-black/[0.02] transition-colors"
                >
                  <div className="col-span-12 md:col-span-6 flex items-center mb-2 md:mb-0">
                    <span className="text-[12px] md:text-[13px] tracking-[0.2em] font-medium text-bmq-black uppercase">
                      {feature.name}
                    </span>
                  </div>
                  
                  {/* BMQ Column */}
                  <div className="col-span-6 md:col-span-3 flex items-center md:justify-center">
                    <span className="md:hidden text-[10px] tracking-widest text-bmq-charcoal/50 mr-4">BMQ</span>
                    {feature.bmq === true ? (
                      <Check size={18} className="text-bmq-blue" />
                    ) : (
                      <span className="text-bmq-black/20">—</span>
                    )}
                  </div>
                  
                  {/* BMQ+ Column */}
                  <div className="col-span-6 md:col-span-3 flex items-center justify-end md:justify-center">
                    <span className="md:hidden text-[10px] tracking-widest text-bmq-charcoal/50 mr-4">BMQ+</span>
                    {feature.plus === true ? (
                      <Check size={18} className="text-bmq-gold" />
                    ) : (
                      <span className="text-[11px] md:text-[12px] tracking-[0.1em] font-medium text-bmq-gold text-right md:text-center block max-w-[120px]">
                        {feature.plus}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] md:text-[12px] text-bmq-charcoal/60 font-light italic max-w-2xl"
            >
              *Ante una eventual condena y conforme a las condiciones de la cobertura.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 4. LA DIFERENCIA ESTÁ EN EL RESPALDO */}
      <section className="py-24 lg:py-32 bg-bmq-charcoal text-bmq-ivory border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.1] mb-6"
            >
              LA DIFERENCIA ESTÁ<br />EN EL RESPALDO.
            </motion.h2>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border-l border-bmq-blue/30 pl-8 lg:pl-12 py-4"
            >
              <h3 className="font-serif text-4xl text-bmq-ivory mb-2">BMQ</h3>
              <span className="text-[10px] tracking-[0.2em] uppercase text-bmq-ivory/50 block mb-6">PROTECCIÓN JURÍDICA</span>
              <p className="text-[17px] text-bmq-ivory/70 font-light leading-relaxed">
                Asesoría, acompañamiento y defensa jurídica especializada para el
                ejercicio profesional, dentro de los ámbitos contemplados por la
                cobertura.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border-l border-bmq-gold/50 pl-8 lg:pl-12 py-4 relative"
            >
              <h3 className="font-serif text-4xl text-bmq-gold mb-2 flex items-center">BMQ<span className="text-2xl ml-0.5">+</span></h3>
              <span className="text-[10px] tracking-[0.2em] uppercase text-bmq-gold/60 block mb-6">PROTECCIÓN JURÍDICA + RESPALDO</span>
              <p className="text-[17px] text-bmq-ivory/70 font-light leading-relaxed">
                La misma estructura de protección jurídica, acompañada de un
                componente de respaldo económico de hasta $250.000.000 ante una
                eventual condena, conforme a las condiciones de la cobertura.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 5. UNA MISMA BASE DE PROTECCIÓN */}
      <section className="py-24 lg:py-32 bg-bmq-black text-bmq-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-24"
          >
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.2]">
              UNA MISMA BASE DE PROTECCIÓN.
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {[
              { num: '01', title: 'PREVENCIÓN', desc: 'Acompañamiento jurídico y estructuración documental antes del conflicto.' },
              { num: '02', title: 'DEFENSA', desc: 'Representación y defensa dentro de los ámbitos contemplados por la cobertura.' },
              { num: '03', title: 'RELACIÓN MÉDICO-PACIENTE', desc: 'Acompañamiento frente a situaciones de inconformidad y deterioro de la relación médico-paciente.' },
              { num: '04', title: 'VIGENCIA', desc: 'La documentación BMQ señala que la protección se mantiene durante la vigencia y durante el período de prescripción de las acciones que correspondan.' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-t border-white/10 pt-8 flex flex-col group"
              >
                <div className="flex items-center mb-6">
                  <span className="font-serif text-2xl text-bmq-ivory/20 mr-6 group-hover:text-bmq-ivory/40 transition-colors duration-300">{item.num}</span>
                  <h3 className="text-[13px] tracking-[0.2em] font-medium uppercase text-bmq-ivory">{item.title}</h3>
                </div>
                <p className="text-[16px] md:text-[17px] text-bmq-ivory/70 font-light leading-relaxed group-hover:text-bmq-ivory/90 transition-colors duration-300">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CÓMO FUNCIONA LA COBERTURA */}
      <section className="py-24 lg:py-40 bg-bmq-ivory text-bmq-black border-y border-bmq-black/5">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-5xl mx-auto mb-20 lg:mb-32">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.1] mb-10"
            >
              LA COBERTURA SE ACTIVA <br className="hidden md:block" />
              INDIVIDUALMENTE PARA CADA PACIENTE.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-[16px] md:text-[18px] text-bmq-charcoal/80 font-normal leading-relaxed max-w-3xl"
            >
              La afiliación al sistema y la activación de una cobertura para un
              paciente no son lo mismo. El esquema requiere una solicitud puntual.
            </motion.p>
          </div>

          <div className="max-w-6xl mx-auto relative">
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-bmq-black/10 z-0"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
              {[
                { step: '01', title: 'AFILIACIÓN', desc: 'El profesional o institución forma parte del sistema BMQ.' },
                { step: '02', title: 'PACIENTE / PROCEDIMIENTO', desc: 'Se define el procedimiento y el paciente que será cubierto.' },
                { step: '03', title: 'ACTIVACIÓN DE LA COBERTURA', desc: 'La cobertura se activa individualmente para ese paciente.' },
                { step: '04', title: 'PROTECCIÓN BMQ', desc: 'El procedimiento queda bajo el alcance de la cobertura contratada.' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex flex-col relative"
                >
                  <div className="w-14 h-14 bg-bmq-ivory border border-bmq-black/10 rounded-full flex items-center justify-center mb-8 relative z-10 self-start lg:mx-auto">
                    <span className="font-serif text-lg text-bmq-black/50">{item.step}</span>
                  </div>
                  
                  {idx !== 3 && (
                    <div className="lg:hidden absolute left-7 top-14 bottom-[-3rem] w-[1px] bg-bmq-black/10 z-0"></div>
                  )}

                  <div className="lg:text-center pl-20 lg:pl-0 -mt-16 lg:mt-0">
                    <h4 className="text-[11px] tracking-[0.2em] font-medium uppercase text-bmq-black mb-4">{item.title}</h4>
                    <p className="text-[14px] text-bmq-charcoal/70 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA HACIA LOS DETALLES */}
      <section className="py-24 lg:py-40 bg-bmq-black text-bmq-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border border-white/10 p-10 lg:p-16 flex flex-col items-start hover:border-bmq-ivory/30 transition-colors duration-500"
            >
              <h3 className="font-serif text-3xl md:text-4xl text-bmq-ivory mb-2">BMQ</h3>
              <span className="text-[10px] tracking-[0.2em] uppercase text-bmq-ivory/50 block mb-10">PROTECCIÓN JURÍDICA</span>
              <p className="text-[16px] text-bmq-ivory/70 font-light leading-relaxed mb-16 flex-1">
                Conozca en detalle el alcance de la Cobertura Básica.
              </p>
              <Link to="/coberturas/basica" className="group text-xs tracking-[0.2em] font-medium text-bmq-ivory flex items-center border-b border-bmq-ivory/30 pb-2 hover:border-bmq-ivory transition-colors">
                CONOCER BMQ
                <ArrowRight size={14} className="ml-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border border-bmq-gold/30 p-10 lg:p-16 flex flex-col items-start hover:border-bmq-gold transition-colors duration-500 relative"
            >
              <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-bmq-gold rounded-full"></div>
              <h3 className="font-serif text-3xl md:text-4xl text-bmq-gold mb-2 flex items-center">BMQ<span className="text-xl md:text-2xl ml-0.5">+</span></h3>
              <span className="text-[10px] tracking-[0.2em] uppercase text-bmq-gold/50 block mb-10">PROTECCIÓN JURÍDICA + RESPALDO</span>
              <p className="text-[16px] text-bmq-ivory/70 font-light leading-relaxed mb-16 flex-1">
                Conozca en detalle la Cobertura Plus y su componente de respaldo
                económico.
              </p>
              <Link to="/coberturas/plus" className="group text-xs tracking-[0.2em] font-medium text-bmq-gold flex items-center border-b border-bmq-gold/30 pb-2 hover:border-bmq-gold transition-colors">
                CONOCER BMQ+
                <ArrowRight size={14} className="ml-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-24 lg:py-32 bg-bmq-charcoal text-bmq-ivory border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.2] mb-8">
              CONOZCA EL ALCANCE<br className="hidden md:block" /> DE SU PROTECCIÓN.
            </h2>
            <p className="text-[17px] md:text-[20px] text-bmq-ivory/70 font-light leading-relaxed mb-16">
              Explore cada cobertura y conozca los componentes que hacen parte
              del Sistema BMQ.
            </p>
            <Link to="/solicitar-cobertura" className="inline-flex items-center justify-center bg-bmq-ivory text-bmq-black px-12 py-5 text-xs tracking-[0.2em] font-medium transition-all duration-500 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group">
              SOLICITAR COBERTURA
              <ArrowRight size={14} className="ml-4 group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
