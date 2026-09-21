import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Procedimientos() {
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
              ALCANCE
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] mb-6 text-bmq-ivory">
              Protección alrededor<br />del procedimiento.
            </h1>
            <h2 className="font-serif text-3xl md:text-4xl text-bmq-ivory/70 italic mb-10">
              Antes. Durante. Después.
            </h2>
            <p className="text-[17px] md:text-[20px] text-bmq-ivory/80 font-light leading-relaxed max-w-3xl">
              BMQ acompaña al profesional de la salud frente a los riesgos jurídicos
              asociados a procedimientos quirúrgicos y tratamientos estéticos,
              desde la prevención hasta la defensa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. EL PROCEDIMIENTO ES SOLO UNA PARTE (CARBÓN) */}
      <section className="py-24 lg:py-32 bg-bmq-charcoal text-bmq-ivory border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-4xl mx-auto text-center mb-20 lg:mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[0.65rem] tracking-[0.3em] uppercase text-bmq-ivory/50 block mb-8">
                MÁS ALLÁ DEL PROCEDIMIENTO
              </span>
              <h2 className="font-serif text-3xl md:text-5xl leading-[1.2] mb-8">
                EL RIESGO JURÍDICO<br className="hidden md:block" /> NO TERMINA CUANDO TERMINA<br className="hidden md:block" /> EL PROCEDIMIENTO.
              </h2>
              <p className="text-[17px] md:text-[19px] text-bmq-ivory/70 font-light leading-relaxed max-w-3xl mx-auto mb-6">
                Una práctica médica puede generar riesgos jurídicos antes de la
                intervención, durante la relación con el paciente y posteriormente,
                cuando aparecen inconformidades, reclamaciones o procesos.
              </p>
              <p className="text-[17px] md:text-[19px] text-bmq-ivory/70 font-light leading-relaxed max-w-3xl mx-auto">
                BMQ estructura su acompañamiento alrededor de esas distintas etapas.
              </p>
            </motion.div>
          </div>

          <div className="max-w-5xl mx-auto overflow-hidden">
            <div className="flex flex-col lg:flex-row items-start justify-between relative space-y-12 lg:space-y-0">
              
              <div className="hidden lg:block absolute top-6 left-12 right-12 h-[1px] bg-white/10 z-0"></div>

              {[
                { title: 'ANTES', items: ['Prevención', 'Documentación', 'Consentimientos', 'Relación precontractual'] },
                { title: 'DURANTE', items: ['Prestación del servicio', 'Relación médico-paciente', 'Gestión documental'] },
                { title: 'DESPUÉS', items: ['Postoperatorio', 'Inconformidades', 'Manejo de crisis', 'Defensa jurídica'] }
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="relative z-10 flex flex-col items-start w-full lg:w-1/3 group lg:items-center text-left lg:text-center"
                >
                  {idx !== 2 && (
                    <div className="lg:hidden absolute left-3 top-8 bottom-[-3rem] w-[1px] bg-white/10 z-0"></div>
                  )}

                  <div className="flex flex-row lg:flex-col items-center lg:mb-8 z-10 w-full lg:w-auto">
                    <div className="w-6 h-6 rounded-full border border-white/20 bg-bmq-charcoal flex items-center justify-center mr-6 lg:mr-0 lg:mb-6 transition-all duration-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-bmq-blue/70 group-hover:bg-bmq-ivory transition-colors"></div>
                    </div>
                    <span className="text-[12px] tracking-[0.2em] font-medium uppercase text-bmq-ivory">
                      {step.title}
                    </span>
                  </div>
                  
                  <div className="pl-12 lg:pl-0 mt-6 lg:mt-0 space-y-3">
                    {step.items.map((item, i) => (
                      <p key={i} className="text-[14px] text-bmq-ivory/60 font-light">{item}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. ÁMBITOS DE ATENCIÓN (MARFIL) */}
      <section className="py-24 lg:py-32 bg-bmq-ivory text-bmq-black border-y border-bmq-black/5">
        <div className="container mx-auto px-6 lg:px-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.2]">
              UN ALCANCE PENSADO<br className="hidden md:block"/> PARA LA COMPLEJIDAD DEL SECTOR SALUD.
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { num: '01', title: 'PROCEDIMIENTOS QUIRÚRGICOS', desc: 'BMQ contempla protección jurídica asociada a la realización de procedimientos quirúrgicos dentro del alcance de la cobertura contratada.' },
              { num: '02', title: 'TRATAMIENTOS ESTÉTICOS', desc: 'La protección también contempla el contexto de tratamientos estéticos, incluyendo el acompañamiento preventivo, documental y jurídico relacionado con la atención del paciente.' },
              { num: '03', title: 'ATENCIÓN POSOPERATORIA Y RECUPERACIÓN', desc: 'El alcance BMQ también contempla el acompañamiento relacionado con el proceso posoperatorio, la gestión de crisis y la relación médico-paciente después del procedimiento.' }
            ].map((ambito, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="border-t border-bmq-black/10 pt-8"
              >
                <div className="flex items-center mb-6">
                  <span className="font-serif text-2xl text-bmq-blue/40 mr-4">{ambito.num}</span>
                </div>
                <h3 className="text-[11px] tracking-[0.2em] font-medium uppercase text-bmq-black mb-6 min-h-[40px]">{ambito.title}</h3>
                <p className="text-[15px] text-bmq-charcoal/70 font-normal leading-relaxed">
                  {ambito.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. NO INVENTAR CATÁLOGO (NEGRO) */}
      <section className="py-24 lg:py-32 bg-bmq-black text-bmq-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl md:text-5xl leading-[1.2] mb-8">
                ¿POR QUÉ NO ENCONTRARÁS<br className="hidden md:block" /> UNA LISTA INFINITA DE PROCEDIMIENTOS?
              </h2>
              <p className="text-[17px] md:text-[19px] text-bmq-ivory/70 font-light leading-relaxed max-w-3xl mx-auto mb-6">
                La cobertura BMQ no debe entenderse únicamente como un catálogo de procedimientos.
              </p>
              <p className="text-[17px] md:text-[19px] text-bmq-ivory/70 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                Cada cobertura se activa individualmente para un paciente y un
                procedimiento, dentro de las condiciones aplicables. Por eso, el
                alcance de la protección debe analizarse en función del
                procedimiento y de la cobertura correspondiente.
              </p>
              
              <Link to="/solicitar-cobertura" className="inline-flex items-center text-[11px] tracking-[0.2em] font-medium text-bmq-ivory/50 hover:text-bmq-ivory transition-colors group">
                CONSULTAR MI COBERTURA
                <ArrowRight size={14} className="ml-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. PROCEDIMIENTO + PACIENTE (CARBÓN) */}
      <section className="py-24 lg:py-32 bg-bmq-charcoal text-bmq-ivory border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-4xl mx-auto text-center mb-20 lg:mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-3xl md:text-5xl leading-[1.2] mb-12"
            >
              UNA COBERTURA SE DEFINE<br className="hidden md:block" /> ALREDEDOR DEL CASO CONCRETO.
            </motion.h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 text-[11px] md:text-[13px] tracking-[0.2em] font-medium uppercase text-bmq-ivory mb-16">
              <span>PACIENTE</span>
              <span className="text-white/20 mx-6">+</span>
              <span>PROCEDIMIENTO</span>
              <span className="text-white/20 mx-6">+</span>
              <span>COBERTURA</span>
              <span className="text-white/20 mx-6">=</span>
              <span className="text-bmq-blue border-b border-bmq-blue/30 pb-1">PROTECCIÓN BMQ</span>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-[17px] md:text-[19px] text-bmq-ivory/70 font-light leading-relaxed text-center"
            >
              La documentación BMQ establece que la cobertura se adquiere para
              cada paciente bajo cobertura. Esto significa que la protección no debe 
              presentarse como una "cobertura global" que automáticamente ampare 
              todos los actos profesionales del afiliado.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 6. PREVENCIÓN (MARFIL) */}
      <section className="py-24 lg:py-32 bg-bmq-ivory text-bmq-black">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl md:text-5xl leading-[1.2] mb-8">
                LA PROTECCIÓN COMIENZA<br className="hidden md:block" /> ANTES DE LA INTERVENCIÓN.
              </h2>
              <p className="text-[17px] md:text-[19px] text-bmq-charcoal/80 font-normal leading-relaxed max-w-3xl mx-auto">
                La documentación BMQ plantea una fase preventiva anterior al
                procedimiento quirúrgico o tratamiento estético.
              </p>
            </motion.div>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {[
              { num: '01', title: 'RELACIÓN PRECONTRACTUAL', desc: 'Acompañamiento jurídico antes de la relación con el paciente.' },
              { num: '02', title: 'CONSENTIMIENTO INFORMADO', desc: 'Herramientas documentales relacionadas con los procedimientos quirúrgicos y tratamientos estéticos.' },
              { num: '03', title: 'HISTORIA CLÍNICA', desc: 'Capacitación y acompañamiento para su correcto diligenciamiento.' },
              { num: '04', title: 'DOCUMENTACIÓN', desc: 'Estructuración de soportes que forman parte de la gestión preventiva del riesgo jurídico.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="border-t border-bmq-black/10 pt-8"
              >
                <div className="flex items-center mb-6">
                  <span className="font-serif text-2xl text-bmq-black/20 mr-4">{item.num}</span>
                  <h3 className="text-[11px] tracking-[0.2em] font-medium uppercase text-bmq-black">{item.title}</h3>
                </div>
                <p className="text-[15px] text-bmq-charcoal/70 font-normal leading-relaxed pl-10 md:pl-12">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. DESPUÉS DEL PROCEDIMIENTO (CARBÓN) */}
      <section className="py-24 lg:py-32 bg-bmq-charcoal text-bmq-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-4xl mx-auto text-center mb-20 lg:mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-3xl md:text-5xl leading-[1.2] mb-8"
            >
              LA PROTECCIÓN CONTINÚA<br className="hidden md:block" /> DESPUÉS DEL PROCEDIMIENTO.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-[17px] md:text-[19px] text-bmq-ivory/70 font-light leading-relaxed max-w-3xl mx-auto"
            >
              El acompañamiento BMQ contempla también situaciones posteriores a la
              intervención, especialmente cuando aparecen inconformidades,
              dificultades en la relación médico-paciente o escenarios que pueden
              escalar a una controversia.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 text-[10px] md:text-[11px] tracking-[0.2em] font-medium uppercase text-bmq-ivory/80">
              <span>POSTOPERATORIO</span>
              <ArrowRight size={14} className="hidden md:block mx-6 text-white/20" />
              <span>INCONFORMIDAD</span>
              <ArrowRight size={14} className="hidden md:block mx-6 text-white/20" />
              <span>GESTIÓN DE LA RELACIÓN</span>
              <ArrowRight size={14} className="hidden md:block mx-6 text-white/20" />
              <span>CONTROVERSIA</span>
              <ArrowRight size={14} className="hidden md:block mx-6 text-white/20" />
              <span className="text-bmq-blue border-b border-bmq-blue/30 pb-1">DEFENSA</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TIPOS DE SITUACIONES (NEGRO) */}
      <section className="py-24 lg:py-32 bg-bmq-black text-bmq-ivory border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-4xl mx-auto text-center mb-20 lg:mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-3xl md:text-5xl leading-[1.2]"
            >
              NO TODA CONTROVERSIA<br className="hidden md:block" /> COMIENZA CON UNA DEMANDA.
            </motion.h2>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {[
              { num: '01', title: 'CONFLICTOS CON PACIENTES', desc: 'Diferencias de criterio que pueden escalar si no se gestionan oportunamente.' },
              { num: '02', title: 'DETERIORO DE LA RELACIÓN MÉDICO-PACIENTE', desc: 'Cuando la confianza entre profesional y paciente se rompe y la situación puede evolucionar hacia una reclamación.' },
              { num: '03', title: 'INCONFORMIDAD CON RESULTADOS', desc: 'Situaciones en las que el paciente puede interpretar una complicación o resultado no esperado como una posible mala praxis.' },
              { num: '04', title: 'PROCESOS Y RECLAMACIONES', desc: 'Escenarios civiles, penales, disciplinarios o administrativos dentro del alcance de la cobertura.' }
            ].map((sit, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group border-l border-white/10 pl-8 lg:pl-10 py-2 hover:border-bmq-ivory/30 transition-colors duration-500"
              >
                <div className="flex items-center mb-4">
                  <span className="font-serif text-xl text-bmq-ivory/20 mr-4">{sit.num}</span>
                  <h3 className="text-[11px] tracking-[0.2em] font-medium uppercase text-bmq-ivory leading-relaxed">{sit.title}</h3>
                </div>
                <p className="text-[15px] md:text-[16px] text-bmq-ivory/60 font-light leading-relaxed pl-10">
                  {sit.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 8.5 DEFENSA DIGITAL (CARBÓN) */}
      <section className="py-24 lg:py-32 bg-bmq-charcoal text-bmq-ivory border-b border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <span className="text-[0.65rem] tracking-[0.3em] uppercase text-bmq-ivory/50 block mb-6">
                DEFENSA DIGITAL
              </span>
              <h2 className="font-serif text-3xl md:text-5xl leading-[1.2] mb-8">
                La protección también alcanza<br className="hidden md:block" /> su reputación profesional.
              </h2>
              <p className="text-[16px] md:text-[18px] text-bmq-ivory/70 font-light leading-relaxed mb-6">
                La práctica profesional también construye una reputación fuera del consultorio y del quirófano.
              </p>
              <p className="text-[16px] md:text-[18px] text-bmq-ivory/70 font-light leading-relaxed">
                BMQ contempla acompañamiento jurídico frente a contenidos calumniosos
                que puedan afectar la reputación profesional en entornos digitales.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 w-full"
            >
              <div className="border border-white/10 p-10 lg:p-14 bg-bmq-black/30 relative">
                <div className="absolute top-0 right-0 w-2 h-2 bg-bmq-blue/50"></div>
                
                <h3 className="text-[10px] tracking-[0.3em] uppercase text-bmq-ivory/40 mb-8 block">
                  ENTORNOS CONTEMPLADOS
                </h3>
                
                <ul className="space-y-6 border-l border-white/10 pl-6 mb-12">
                  {['Instagram', 'TikTok', 'Facebook', 'Google Maps'].map((red, idx) => (
                    <li key={idx} className="flex items-center text-[15px] tracking-widest font-light text-bmq-ivory/90 uppercase">
                      <span className="w-1 h-1 bg-bmq-blue/70 mr-4 rounded-full"></span>
                      {red}
                    </li>
                  ))}
                </ul>

                <p className="text-[10px] md:text-[11px] tracking-[0.2em] font-medium uppercase text-bmq-ivory/50 leading-relaxed">
                  LA PROTECCIÓN DEL EJERCICIO PROFESIONAL<br />
                  TAMBIÉN INCLUYE LO QUE OCURRE FUERA DEL CONSULTORIO.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 9. FASES Y ALCANCE NO AUTOMÁTICO (MARFIL) */}
      <section className="py-24 lg:py-32 bg-bmq-ivory text-bmq-black border-b border-bmq-black/5">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16 mb-24">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 border border-bmq-black/10 p-10 lg:p-14 bg-white"
            >
              <span className="font-serif text-3xl text-bmq-blue/30 block mb-2">FASE 01</span>
              <h3 className="text-[11px] tracking-[0.2em] font-medium uppercase text-bmq-black mb-6">PREVENTIVA</h3>
              <p className="text-[14px] text-bmq-charcoal/70 font-normal leading-relaxed mb-8">
                Antes del procedimiento quirúrgico o tratamiento estético.
              </p>
              <ul className="space-y-4">
                {['Asesoría', 'Documentación', 'Consentimientos', 'Historia clínica', 'Relación precontractual'].map((item, i) => (
                  <li key={i} className="flex items-center text-[14px] text-bmq-charcoal/80 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-bmq-blue/50 mr-4"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 border border-bmq-black/10 p-10 lg:p-14 bg-white"
            >
              <span className="font-serif text-3xl text-bmq-blue/30 block mb-2">FASE 02</span>
              <h3 className="text-[11px] tracking-[0.2em] font-medium uppercase text-bmq-black mb-6">REACTIVA</h3>
              <p className="text-[14px] text-bmq-charcoal/70 font-normal leading-relaxed mb-8">
                Posterior al procedimiento.
              </p>
              <ul className="space-y-4">
                {['Acompañamiento posoperatorio', 'Gestión de crisis', 'Relación médico-paciente', 'Defensa jurídica'].map((item, i) => (
                  <li key={i} className="flex items-center text-[14px] text-bmq-charcoal/80 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-bmq-blue/50 mr-4"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>

          <div className="max-w-4xl mx-auto text-center border-t border-bmq-black/10 pt-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl md:text-5xl leading-[1.2] mb-8">
                ALCANCE NO SIGNIFICA<br className="hidden md:block" /> COBERTURA AUTOMÁTICA.
              </h2>
              <p className="text-[16px] md:text-[18px] text-bmq-charcoal/80 font-normal leading-relaxed max-w-3xl mx-auto">
                El alcance de BMQ describe los ámbitos profesionales y jurídicos en
                los que se estructura el sistema de protección. La cobertura concreta
                de cada paciente y procedimiento está sujeta a las condiciones aplicables
                a la cobertura contratada.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 10. INSTITUCIONES (CARBÓN) */}
      <section className="py-24 lg:py-32 bg-bmq-charcoal text-bmq-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl md:text-5xl leading-[1.2] mb-8">
                NO SOLO SE TRATA DEL PROFESIONAL.
              </h2>
              <p className="text-[17px] md:text-[19px] text-bmq-ivory/70 font-light leading-relaxed max-w-3xl mx-auto">
                La documentación BMQ contempla también instituciones de salud,
                incluyendo IPS y clínicas, dentro del alcance del servicio.
              </p>
            </motion.div>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'PROFESIONALES DE LA SALUD', desc: 'Médicos, especialistas y personal asistencial.' },
              { title: 'INSTITUCIONES DE SALUD', desc: 'IPS y clínicas.' },
              { title: 'CENTROS DE ESTÉTICA Y POSQUIRÚRGICOS', desc: 'Entidades y profesionales relacionados con este ámbito.' }
            ].map((inst, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="border-t border-white/10 pt-8"
              >
                <h3 className="text-[11px] tracking-[0.2em] font-medium uppercase text-bmq-gold mb-6 min-h-[30px]">{inst.title}</h3>
                <p className="text-[15px] text-bmq-ivory/70 font-light leading-relaxed">
                  {inst.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. COBERTURA INDIVIDUAL (NEGRO) */}
      <section className="py-24 lg:py-40 bg-bmq-black text-bmq-ivory border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-5xl mx-auto mb-20 lg:mb-32 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.1] mb-8"
            >
              CADA CASO TIENE<br className="hidden md:block" /> SU PROPIA COBERTURA.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-[17px] md:text-[19px] text-bmq-ivory/70 font-light leading-relaxed max-w-3xl mx-auto"
            >
              Una vez afiliado, el profesional o institución activa la cobertura
              individualmente para cada paciente bajo cobertura.
            </motion.p>
          </div>

          <div className="max-w-5xl mx-auto overflow-hidden">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between relative space-y-12 lg:space-y-0">
              
              <div className="hidden lg:block absolute top-6 left-12 right-12 h-[1px] bg-white/10 z-0"></div>

              {[
                { step: 'AFILIACIÓN', color: 'text-bmq-ivory/60' },
                { step: 'PACIENTE', color: 'text-bmq-ivory/60' },
                { step: 'PROCEDIMIENTO', color: 'text-bmq-ivory/60' },
                { step: 'COBERTURA', color: 'text-bmq-blue' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative z-10 flex flex-row lg:flex-col items-center group w-full lg:w-auto"
                >
                  {idx !== 3 && (
                    <div className="lg:hidden absolute left-3 top-8 bottom-[-3rem] w-[1px] bg-white/10 z-0"></div>
                  )}

                  <div className={`w-6 h-6 rounded-full border ${idx === 3 ? 'border-bmq-blue bg-bmq-black' : 'border-white/20 bg-bmq-charcoal'} flex items-center justify-center mr-6 lg:mr-0 lg:mb-6 transition-all duration-500 z-10`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${idx === 3 ? 'bg-bmq-blue' : 'bg-white/30'}`}></div>
                  </div>
                  
                  <span className={`text-[10px] tracking-[0.2em] font-medium uppercase text-left lg:text-center ${item.color}`}>
                    {item.step}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. RELACIÓN CON BMQ Y BMQ+ (MARFIL) */}
      <section className="py-24 bg-bmq-ivory text-bmq-black border-b border-bmq-black/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl md:text-5xl leading-[1.2] mb-16">
                EL ALCANCE DEL PROCEDIMIENTO<br className="hidden md:block" /> SE DEFINE DENTRO DE LA COBERTURA.
              </h2>
              
              <div className="flex flex-col md:flex-row justify-center space-y-12 md:space-y-0 md:space-x-16 mb-16">
                
                <div className="text-center">
                  <h3 className="font-serif text-2xl text-bmq-blue mb-4">BMQ</h3>
                  <p className="text-[14px] text-bmq-charcoal/70 font-normal leading-relaxed max-w-[240px] mx-auto">
                    Protección jurídica especializada.
                  </p>
                </div>
                
                <div className="hidden md:block w-[1px] h-16 bg-bmq-black/10 self-center"></div>
                <div className="md:hidden w-16 h-[1px] bg-bmq-black/10 mx-auto"></div>

                <div className="text-center">
                  <h3 className="font-serif text-2xl text-bmq-gold flex items-center justify-center mb-4">BMQ<span className="text-lg ml-0.5">+</span></h3>
                  <p className="text-[14px] text-bmq-charcoal/70 font-normal leading-relaxed max-w-[240px] mx-auto">
                    Protección jurídica + respaldo económico.
                  </p>
                </div>

              </div>

              <Link to="/coberturas" className="inline-flex items-center text-[11px] tracking-[0.2em] font-medium text-bmq-black/50 hover:text-bmq-black transition-colors group">
                CONOCER COBERTURAS
                <ArrowRight size={14} className="ml-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>

            </motion.div>
          </div>
        </div>
      </section>

      {/* 13. CTA FINAL (CARBÓN) */}
      <section className="py-24 lg:py-32 bg-bmq-charcoal text-bmq-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-center flex flex-col items-center"
          >
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.2] mb-8">
              ¿TIENES UN PROCEDIMIENTO<br className="hidden md:block" /> EN MENTE?
            </h2>
            <p className="text-[17px] md:text-[20px] text-bmq-ivory/70 font-light leading-relaxed mb-16 max-w-2xl">
              Conozca el alcance de BMQ y active la cobertura correspondiente para
              cada paciente y procedimiento.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-6 w-full mb-8">
              <Link to="/solicitar-cobertura" className="inline-flex items-center justify-center bg-bmq-ivory text-bmq-black px-8 py-5 text-xs tracking-[0.2em] font-medium transition-all duration-500 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group w-full sm:w-auto min-w-[240px]">
                SOLICITAR COBERTURA
                <ArrowRight size={14} className="ml-4 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
              <Link to="/coberturas" className="inline-flex items-center justify-center border border-white/20 text-bmq-ivory px-8 py-5 text-xs tracking-[0.2em] font-medium transition-all duration-500 hover:border-bmq-ivory group w-full sm:w-auto min-w-[240px]">
                CONOCER LAS COBERTURAS
                <ArrowRight size={14} className="ml-4 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
