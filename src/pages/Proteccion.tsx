import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Proteccion() {
  return (
    <div className="w-full">
      
      {/* 1. HERO (NEGRO) */}
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 bg-bmq-black text-bmq-ivory relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-bmq-blue/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto"
          >
            <span className="text-[0.65rem] tracking-[0.3em] uppercase text-bmq-ivory/50 block mb-8 flex items-center">
              <span className="w-8 h-[1px] bg-bmq-ivory/20 mr-4"></span>
              EL SISTEMA BMQ
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-10 text-bmq-ivory">
              Protección jurídica<br />
              <span className="italic text-bmq-ivory/70">especializada.</span>
            </h1>
            <p className="text-[18px] md:text-[22px] text-bmq-ivory/80 font-light leading-relaxed max-w-3xl mb-16">
              Un sistema de acompañamiento preventivo y defensa jurídica diseñado
              para profesionales e instituciones del sector salud.
            </p>
            <div className="border-l border-bmq-gold/30 pl-6 md:pl-10">
              <p className="text-xs md:text-sm tracking-[0.2em] font-medium text-bmq-gold uppercase leading-loose">
                ANTES DEL CONFLICTO.<br />
                DURANTE EL PROCESO.<br />
                DESPUÉS DE LA INTERVENCIÓN.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. LA PROTECCIÓN COMIENZA ANTES + 3. DOS MOMENTOS (MARFIL) */}
      <section className="py-24 lg:py-40 bg-bmq-ivory text-bmq-black">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-5xl mx-auto mb-32">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-10"
            >
              NO ESPERAMOS A QUE EXISTA UN CONFLICTO<br className="hidden lg:block"/> PARA HABLAR DE PROTECCIÓN.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-[17px] md:text-[20px] text-bmq-charcoal/80 font-normal leading-relaxed max-w-3xl"
            >
              La protección jurídica también se construye antes de que aparezca
              el conflicto: mediante la adecuada estructuración de la relación con
              el paciente, la documentación del acto médico y el acompañamiento
              jurídico preventivo.
            </motion.p>
          </div>

          {/* Fases Generales */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-32">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border-t border-bmq-black/10 pt-8"
            >
              <h3 className="text-sm tracking-[0.2em] uppercase font-medium text-bmq-black mb-4">FASE PREVENTIVA</h3>
              <p className="text-[16px] text-bmq-charcoal/70 font-light leading-relaxed">
                Antes de cualquier procedimiento quirúrgico o tratamiento estético.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border-t border-bmq-black/10 pt-8"
            >
              <h3 className="text-sm tracking-[0.2em] uppercase font-medium text-bmq-black mb-4">FASE REACTIVA</h3>
              <p className="text-[16px] text-bmq-charcoal/70 font-light leading-relaxed">
                Posterior a la realización del procedimiento, frente a situaciones
                que puedan derivar en actuaciones o procesos jurídicos.
              </p>
            </motion.div>
          </div>

          {/* Dos Momentos de Protección */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center mb-8">
                  <span className="font-serif text-3xl text-bmq-blue/20 mr-4">01</span>
                  <h3 className="text-xl tracking-[0.2em] font-medium text-bmq-black uppercase">PREVENCIÓN</h3>
                </div>
                <p className="text-[13px] tracking-widest text-bmq-charcoal/50 uppercase mb-10 border-b border-bmq-black/5 pb-4">Antes del conflicto.</p>
                <ul className="space-y-6">
                  {[
                    'Asesoría y acompañamiento en la etapa precontractual.',
                    'Orientación relacionada con la relación médico-paciente.',
                    'Acompañamiento en el diligenciamiento de historia clínica.',
                    'Capacitación relacionada con historia clínica.',
                    'Estructuración documental relacionada con la atención.'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-bmq-blue/40 mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-[16px] text-bmq-charcoal/80 font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center mb-8">
                  <span className="font-serif text-3xl text-bmq-blue/20 mr-4">02</span>
                  <h3 className="text-xl tracking-[0.2em] font-medium text-bmq-black uppercase">DEFENSA</h3>
                </div>
                <p className="text-[13px] tracking-widest text-bmq-charcoal/50 uppercase mb-10 border-b border-bmq-black/5 pb-4">Cuando la situación escala.</p>
                <ul className="space-y-6">
                  {[
                    'Representación civil.',
                    'Defensa penal.',
                    'Defensa disciplinaria.',
                    'Procesos administrativos.',
                    'Acompañamiento frente a situaciones de inconformidad y deterioro de la relación médico-paciente.'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-bmq-black/20 mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-[16px] text-bmq-charcoal/80 font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. LOS FRENTES DE PROTECCIÓN (NEGRO) */}
      <section className="py-24 lg:py-40 bg-bmq-black text-bmq-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-5xl mx-auto mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
                CUATRO FRENTES.<br />
                <span className="italic text-bmq-ivory/70">UNA PROTECCIÓN ESPECIALIZADA.</span>
              </h2>
            </motion.div>
          </div>

          <div className="max-w-5xl mx-auto">
            {[
              { num: '01', title: 'RESPONSABILIDAD CIVIL', desc: 'Representación judicial en procesos relacionados con responsabilidad civil médica y, según corresponda, responsabilidad civil de empresas dedicadas a la prestación de servicios médicos, quirúrgicos y estéticos.' },
              { num: '02', title: 'DEFENSA PENAL', desc: 'Defensa y acompañamiento jurídico frente a actuaciones penales relacionadas con el ejercicio profesional.' },
              { num: '03', title: 'DEFENSA DISCIPLINARIA', desc: 'Defensa y representación frente a procesos relacionados con el ejercicio profesional ante las autoridades ético-disciplinarias competentes.' },
              { num: '04', title: 'PROCESOS ADMINISTRATIVOS', desc: 'Acompañamiento jurídico en procesos y actuaciones administrativas relacionadas con la prestación de servicios de salud.' },
              { num: '05', title: 'DEFENSA DIGITAL', desc: 'Protección jurídica de la reputación profesional frente a contenidos calumniosos en entornos digitales.' }
            ].map((frente, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col md:flex-row border-t border-white/10 py-12 lg:py-16 group"
              >
                <div className="md:w-1/3 mb-6 md:mb-0 pr-8">
                  <div className="flex items-center">
                    <span className="text-[12px] font-serif text-bmq-ivory/30 mr-4">{frente.num}</span>
                    <h3 className="text-[13px] tracking-[0.2em] font-medium uppercase text-bmq-ivory">{frente.title}</h3>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-[17px] md:text-[19px] text-bmq-ivory/70 font-light leading-relaxed group-hover:text-bmq-ivory transition-colors duration-500">
                    {frente.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. LA RELACIÓN MÉDICO-PACIENTE (CARBÓN) */}
      <section className="py-24 lg:py-40 bg-bmq-charcoal text-bmq-ivory relative border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-4xl mx-auto text-center mb-20 lg:mb-32">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.2] mb-10"
            >
              LA PROTECCIÓN TAMBIÉN ESTÁ<br className="hidden md:block" /> EN LA RELACIÓN CON EL PACIENTE.
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p className="text-[17px] md:text-[19px] text-bmq-ivory/70 font-light leading-relaxed max-w-3xl mx-auto mb-6">
                Los conflictos no siempre comienzan con una demanda.
              </p>
              <p className="text-[17px] md:text-[19px] text-bmq-ivory/70 font-light leading-relaxed max-w-3xl mx-auto">
                Una inconformidad, una diferencia de expectativas o el deterioro de
                la relación médico-paciente pueden convertirse en escenarios que
                requieren intervención jurídica especializada. BMQ contempla
                acompañamiento frente a estas situaciones, incluyendo el
                restablecimiento de la relación médico-paciente.
              </p>
            </motion.div>
          </div>

          <div className="max-w-5xl mx-auto overflow-hidden">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between relative space-y-12 lg:space-y-0">
              {/* Desktop Connecting Line */}
              <div className="hidden lg:block absolute top-6 left-12 right-12 h-[1px] bg-white/10 z-0"></div>

              {[
                'INCONFORMIDAD',
                'DIFERENCIA DE EXPECTATIVAS',
                'DETERIORO DE LA RELACIÓN',
                'INTERVENCIÓN BMQ',
                'GESTIÓN JURÍDICA'
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative z-10 flex flex-row lg:flex-col items-center group w-full lg:w-auto"
                >
                  {/* Mobile Connecting Line */}
                  {idx !== 4 && (
                    <div className="lg:hidden absolute left-3 top-8 bottom-[-3rem] w-[1px] bg-white/10 z-0"></div>
                  )}

                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center mr-6 lg:mr-0 lg:mb-6 transition-all duration-500 z-10 ${idx >= 3 ? 'bg-bmq-blue/10 border-bmq-blue' : 'bg-bmq-charcoal border-white/20'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${idx >= 3 ? 'bg-bmq-blue' : 'bg-white/30'}`}></div>
                  </div>
                  
                  <span className={`text-[9px] md:text-[10px] tracking-[0.2em] font-medium uppercase max-w-[140px] text-left lg:text-center ${idx >= 3 ? 'text-bmq-ivory' : 'text-bmq-ivory/50'}`}>
                    {step}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. LA DOCUMENTACIÓN + 7. LOS 5 PILARES (NEGRO) */}
      <section className="py-24 lg:py-40 bg-bmq-black text-bmq-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-5xl mx-auto mb-40">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.2] mb-8">
                LA DEFENSA TAMBIÉN SE CONSTRUYE<br className="hidden md:block" /> ANTES DEL CONFLICTO.
              </h2>
              <p className="text-[17px] md:text-[20px] text-bmq-ivory/70 font-light leading-relaxed max-w-3xl">
                Una práctica profesional correctamente documentada constituye una
                parte esencial del soporte frente a eventuales controversias.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {[
                { title: 'HISTORIA CLÍNICA', desc: 'Acompañamiento y capacitación en el diligenciamiento de la historia clínica.' },
                { title: 'CONSENTIMIENTO INFORMADO', desc: 'El brochure BMQ contempla la elaboración técnica de consentimientos informados relacionados con procedimientos quirúrgicos y tratamientos estéticos.' },
                { title: 'RELACIÓN PRECONTRACTUAL', desc: 'Asesoría y acompañamiento jurídico en la etapa precontractual con el paciente.' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  className="border-t border-white/10 pt-8"
                >
                  <h3 className="text-[12px] tracking-[0.2em] font-medium uppercase text-bmq-gold mb-6">{item.title}</h3>
                  <p className="text-[16px] text-bmq-ivory/70 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* LO QUE SIGNIFICA ESTAR PROTEGIDO (5 PILARES) */}
          <div className="max-w-5xl mx-auto pt-20 border-t border-white/10">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <span className="text-[0.65rem] tracking-[0.3em] uppercase text-bmq-ivory/40 font-medium">LO QUE SIGNIFICA ESTAR PROTEGIDO</span>
            </motion.div>
            
            <div className="space-y-16">
              {[
                { num: '01', title: 'PREVENIR', desc: 'Preparar la relación y la documentación antes del conflicto.' },
                { num: '02', title: 'DOCUMENTAR', desc: 'Construir soportes adecuados alrededor del acto médico.' },
                { num: '03', title: 'ACOMPAÑAR', desc: 'Contar con orientación jurídica cuando la situación lo requiere.' },
                { num: '04', title: 'DEFENDER', desc: 'Representación y defensa dentro de los ámbitos contemplados por la cobertura.' },
                { num: '05', title: 'RESPALDAR', desc: 'Componente económico cuando corresponda a la cobertura contratada.' }
              ].map((pillar, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex flex-col md:flex-row md:items-center group"
                >
                  <div className="md:w-1/3 flex items-center mb-4 md:mb-0">
                    <span className="font-serif text-2xl text-bmq-ivory/20 mr-8 group-hover:text-bmq-blue transition-colors duration-300">{pillar.num}</span>
                    <h3 className="text-xl md:text-2xl tracking-[0.15em] font-medium text-bmq-ivory uppercase group-hover:translate-x-2 transition-transform duration-300">{pillar.title}</h3>
                  </div>
                  <div className="md:w-2/3 md:pl-8">
                    <p className="text-[17px] md:text-[19px] text-bmq-ivory/60 font-light leading-relaxed group-hover:text-bmq-ivory/90 transition-colors duration-300">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 8. TRANSICIÓN A COBERTURAS (NEGRO - CIERRE) */}
      <section className="py-24 lg:py-40 bg-bmq-black text-bmq-ivory relative border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bmq-blue/5 pointer-events-none"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6"
            >
              DOS NIVELES.<br />
              <span className="italic text-bmq-ivory/70">UN MISMO SISTEMA DE PROTECCIÓN.</span>
            </motion.h2>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mb-24">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border border-white/10 p-10 lg:p-16 hover:border-bmq-ivory/30 transition-colors duration-500"
            >
              <h3 className="font-serif text-3xl text-bmq-ivory mb-2">BMQ</h3>
              <span className="text-[10px] tracking-[0.2em] uppercase text-bmq-ivory/50 block mb-8">PROTECCIÓN JURÍDICA</span>
              <p className="text-[16px] text-bmq-ivory/70 font-light leading-relaxed">
                Asesoría, acompañamiento y defensa jurídica especializada para el
                ejercicio profesional.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border border-bmq-gold/30 p-10 lg:p-16 hover:border-bmq-gold transition-colors duration-500 relative"
            >
              <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-bmq-gold rounded-full"></div>
              <h3 className="font-serif text-3xl text-bmq-gold mb-2 flex items-center">BMQ<span className="text-xl ml-0.5">+</span></h3>
              <span className="text-[10px] tracking-[0.2em] uppercase text-bmq-gold/50 block mb-8">PROTECCIÓN JURÍDICA + RESPALDO</span>
              <p className="text-[16px] text-bmq-ivory/70 font-light leading-relaxed mb-6">
                El esquema de protección jurídica acompañado de un componente de
                respaldo económico de hasta $250.000.000 COP ante una eventual condena,
                conforme a las condiciones de la cobertura.
              </p>
            </motion.div>

          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center"
          >
            <Link to="/coberturas" className="group border border-bmq-ivory text-bmq-ivory px-10 py-5 text-xs tracking-[0.2em] font-medium flex items-center transition-all duration-500 hover:bg-bmq-ivory hover:text-bmq-black">
              CONOCER LAS COBERTURAS
              <ArrowRight size={14} className="ml-4 group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
