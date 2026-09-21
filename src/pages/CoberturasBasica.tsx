import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, X } from 'lucide-react';

export function CoberturasBasica() {
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
              NIVEL DE COBERTURA
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] mb-6 text-bmq-ivory">
              Garantía Básica
            </h1>
            <h2 className="font-serif text-3xl md:text-4xl text-bmq-ivory/70 italic mb-10">
              Protección jurídica para tu práctica.
            </h2>
            <p className="text-[17px] md:text-[20px] text-bmq-ivory/80 font-light leading-relaxed max-w-3xl">
              Protección jurídica especializada, acompañamiento preventivo y defensa
              para profesionales e instituciones del sector salud.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. IDENTIFICACIÓN DEL PRODUCTO (MARFIL) */}
      <section className="py-24 lg:py-32 bg-bmq-ivory text-bmq-black">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[0.65rem] tracking-[0.3em] uppercase text-bmq-black/50 block mb-8">
                ¿QUÉ ES BMQ?
              </span>
              <h2 className="font-serif text-3xl md:text-5xl leading-[1.2] mb-10">
                UNA ESTRUCTURA DE PROTECCIÓN<br className="hidden md:block" /> PARA EL EJERCICIO PROFESIONAL.
              </h2>
              <p className="text-[17px] md:text-[19px] text-bmq-charcoal/80 font-normal leading-relaxed max-w-3xl mx-auto mb-6">
                BMQ es un sistema de protección jurídica diseñado para acompañar al
                profesional de la salud frente a los riesgos derivados de la relación
                con sus pacientes y del ejercicio de procedimientos quirúrgicos y estéticos.
              </p>
              <p className="text-[17px] md:text-[19px] text-bmq-charcoal/80 font-normal leading-relaxed max-w-3xl mx-auto">
                La Cobertura Básica concentra ese sistema en prevención,
                acompañamiento y defensa jurídica, sin incluir el componente de
                respaldo económico propio de BMQ+.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. ¿PARA QUIÉN ESTÁ PENSADA? (CARBÓN) */}
      <section className="py-24 lg:py-32 bg-bmq-charcoal text-bmq-ivory border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto mb-20"
          >
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.2] mb-8">
              DISEÑADA PARA QUIENES<br className="hidden md:block"/> ASUMEN EL RIESGO PROFESIONAL.
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: '01', title: 'PROFESIONALES DE LA SALUD', desc: 'Médicos, especialistas y personal asistencial.' },
              { num: '02', title: 'INSTITUCIONES DE SALUD', desc: 'IPS y clínicas.' },
              { num: '03', title: 'CENTROS DE ESTÉTICA Y POSQUIRÚRGICOS', desc: 'Entidades y profesionales relacionados con procedimientos estéticos y cuidados posteriores.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="border-t border-white/10 pt-8"
              >
                <span className="font-serif text-2xl text-bmq-ivory/20 block mb-6">{item.num}</span>
                <h3 className="text-[11px] tracking-[0.2em] font-medium uppercase text-bmq-gold mb-4 min-h-[40px]">{item.title}</h3>
                <p className="text-[15px] text-bmq-ivory/70 font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SEIS COMPONENTES (NEGRO) */}
      <section className="py-24 lg:py-40 bg-bmq-black text-bmq-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto mb-24"
          >
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] mb-6">
              SEIS COMPONENTES.<br />
              <span className="italic text-bmq-ivory/70">UNA MISMA COBERTURA.</span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {[
              { num: '01', title: 'ASESORÍA JURÍDICA PRECONTRACTUAL', desc: 'Acompañamiento antes de establecer la relación contractual con el paciente. Asesoría y acompañamiento jurídico en la etapa precontractual relacionada con la atención del paciente.' },
              { num: '02', title: 'REPRESENTACIÓN EN PROCESOS DE RESPONSABILIDAD CIVIL', desc: 'Defensa y representación en procesos relacionados con responsabilidad civil médica y, cuando corresponda, responsabilidad civil empresarial en servicios médicos, quirúrgicos y estéticos.' },
              { num: '03', title: 'REPRESENTACIÓN EN PROCESOS PENALES', desc: 'Defensa jurídica frente a investigaciones o procesos penales relacionados con el ejercicio profesional, dentro del alcance de la cobertura.' },
              { num: '04', title: 'DEFENSA ANTE EL TRIBUNAL DE ÉTICA MÉDICA', desc: 'Representación en procesos relacionados con responsabilidad disciplinaria médica ante las autoridades ético-disciplinarias competentes.' },
              { num: '05', title: 'ACOMPAÑAMIENTO EN EL PROCESO POSOPERATORIO', desc: 'Asesoría para la adecuada gestión de la relación médico-paciente durante el postoperatorio, manejo de crisis y control de controversias.' },
              { num: '06', title: 'ASESORÍA EN HISTORIA CLÍNICA', desc: 'Capacitación y acompañamiento para el correcto diligenciamiento de la historia clínica, como parte de la gestión preventiva del riesgo jurídico.' },
              { num: '07', title: 'DEFENSA DIGITAL', desc: 'Acompañamiento jurídico frente a contenidos calumniosos que puedan afectar la reputación profesional en entornos digitales.' }
            ].map((comp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group"
              >
                <div className="flex items-center mb-6 border-b border-white/10 pb-6">
                  <span className="font-serif text-3xl text-bmq-blue mr-6 group-hover:text-bmq-ivory transition-colors duration-500">{comp.num}</span>
                  <h3 className="text-[12px] md:text-[13px] tracking-[0.2em] font-medium uppercase text-bmq-ivory leading-relaxed">{comp.title}</h3>
                </div>
                <p className="text-[16px] md:text-[17px] text-bmq-ivory/70 font-light leading-relaxed">
                  {comp.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. LOS CUATRO FRENTES JURÍDICOS (MARFIL) */}
      <section className="py-24 lg:py-32 bg-bmq-ivory text-bmq-black border-y border-bmq-black/5">
        <div className="container mx-auto px-6 lg:px-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-24"
          >
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.2]">
              PROTECCIÓN FRENTE A LOS<br className="hidden md:block"/> PRINCIPALES FRENTES DE RESPONSABILIDAD.
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'CIVIL', desc: 'Responsabilidad civil médica y responsabilidad civil empresarial cuando corresponda al alcance documentado.' },
              { num: '02', title: 'PENAL', desc: 'Investigaciones y procesos penales relacionados con el ejercicio profesional.' },
              { num: '03', title: 'DISCIPLINARIO', desc: 'Procesos relacionados con la responsabilidad disciplinaria médica.' },
              { num: '04', title: 'ADMINISTRATIVO', desc: 'Procesos y actuaciones administrativas contempladas dentro del alcance de la cobertura.' }
            ].map((frente, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border-t border-bmq-black/10 pt-8"
              >
                <div className="flex items-center mb-6">
                  <span className="font-serif text-xl text-bmq-blue/40 mr-4">{frente.num}</span>
                  <h3 className="text-[11px] tracking-[0.2em] font-medium uppercase text-bmq-black">{frente.title}</h3>
                </div>
                <p className="text-[15px] text-bmq-charcoal/70 font-normal leading-relaxed">
                  {frente.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. RELACIÓN MÉDICO-PACIENTE (CARBÓN) */}
      <section className="py-24 lg:py-40 bg-bmq-charcoal text-bmq-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-4xl mx-auto text-center mb-20 lg:mb-32">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.2] mb-10"
            >
              LA PROTECCIÓN TAMBIÉN SE CONSTRUYE<br className="hidden md:block" /> EN LA RELACIÓN CON EL PACIENTE.
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p className="text-[17px] md:text-[19px] text-bmq-ivory/70 font-light leading-relaxed max-w-3xl mx-auto mb-6">
                Una inconformidad no siempre comienza como una demanda.
              </p>
              <p className="text-[17px] md:text-[19px] text-bmq-ivory/70 font-light leading-relaxed max-w-3xl mx-auto">
                Las diferencias de expectativas, los resultados que generan
                inconformidad o el deterioro de la relación médico-paciente pueden
                escalar hasta convertirse en una controversia. BMQ contempla
                acompañamiento para gestionar estas situaciones y restablecer,
                cuando sea posible, la relación médico-paciente.
              </p>
            </motion.div>
          </div>

          <div className="max-w-5xl mx-auto overflow-hidden">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between relative space-y-12 lg:space-y-0">
              {/* Desktop Connecting Line */}
              <div className="hidden lg:block absolute top-6 left-12 right-12 h-[1px] bg-white/10 z-0"></div>

              {[
                'INCONFORMIDAD',
                'GESTIÓN',
                'ACOMPAÑAMIENTO',
                'CONTROVERSIA',
                'DEFENSA'
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

                  <div className="w-6 h-6 rounded-full border border-white/20 bg-bmq-charcoal flex items-center justify-center mr-6 lg:mr-0 lg:mb-6 transition-all duration-500 z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                  </div>
                  
                  <span className="text-[9px] md:text-[10px] tracking-[0.2em] font-medium uppercase text-bmq-ivory/60 max-w-[140px] text-left lg:text-center">
                    {step}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. DOCUMENTACIÓN (NEGRO) */}
      <section className="py-24 lg:py-32 bg-bmq-black text-bmq-ivory border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-5xl mx-auto mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.2] mb-8">
                ANTES DE DEFENDER,<br className="hidden md:block" /> HAY QUE DOCUMENTAR.
              </h2>
              <p className="text-[17px] md:text-[20px] text-bmq-ivory/70 font-light leading-relaxed max-w-3xl">
                La documentación del acto médico forma parte de la prevención del
                riesgo jurídico.
              </p>
            </motion.div>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { title: 'HISTORIA CLÍNICA', desc: 'Acompañamiento y capacitación para su correcto diligenciamiento.' },
              { title: 'CONSENTIMIENTO INFORMADO', desc: 'El material BMQ contempla la elaboración técnica de consentimientos informados relacionados con procedimientos quirúrgicos y tratamientos estéticos.' },
              { title: 'RELACIÓN PRECONTRACTUAL', desc: 'Asesoría y acompañamiento jurídico antes de establecer la relación con el paciente.' }
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
      </section>

      {/* 8. ALCANCE TEMPORAL (MARFIL) */}
      <section className="py-24 lg:py-32 bg-bmq-ivory text-bmq-black border-y border-bmq-black/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[0.65rem] tracking-[0.3em] uppercase text-bmq-black/50 block mb-8">
                VIGENCIA DE LA PROTECCIÓN
              </span>
              <h2 className="font-serif text-3xl md:text-5xl leading-[1.2] mb-10">
                LA PROTECCIÓN NO TERMINA<br className="hidden md:block" /> NECESARIAMENTE CON EL PROCEDIMIENTO.
              </h2>
              <p className="text-[17px] md:text-[19px] text-bmq-charcoal/80 font-normal leading-relaxed max-w-3xl mx-auto mb-8">
                La documentación BMQ señala que la cobertura jurídica se mantiene
                durante la vigencia y durante el período de prescripción de las
                acciones que correspondan.
              </p>
              <div className="bg-bmq-charcoal/5 border border-bmq-black/10 p-8 max-w-2xl mx-auto text-left">
                <p className="text-[14px] md:text-[15px] text-bmq-charcoal/70 font-normal leading-relaxed">
                  <strong className="font-medium text-bmq-black block mb-2">Por ejemplo:</strong>
                  Una acción de responsabilidad civil extracontractual puede estar sujeta a un plazo de hasta 10 años, dependiendo de la naturaleza de la acción y de las circunstancias aplicables.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. CÓMO FUNCIONA + 10. ACLARACIÓN (CARBÓN) */}
      <section className="py-24 lg:py-40 bg-bmq-charcoal text-bmq-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-5xl mx-auto mb-20 lg:mb-32">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.1] mb-10"
            >
              UNA COBERTURA.<br />
              UN PACIENTE.<br />
              <span className="italic text-bmq-ivory/70">UN PROCEDIMIENTO.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-[16px] md:text-[18px] text-bmq-ivory/70 font-light leading-relaxed max-w-3xl"
            >
              La afiliación al sistema BMQ y la cobertura de un procedimiento son
              conceptos diferentes. La afiliación es un requisito previo para acceder
              al sistema. La cobertura se activa individualmente para cada paciente/procedimiento.
            </motion.p>
          </div>

          <div className="max-w-6xl mx-auto relative">
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-white/10 z-0"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
              {[
                { step: '01', title: 'AFILIACIÓN', desc: 'El profesional o institución hace parte del sistema BMQ.' },
                { step: '02', title: 'PACIENTE', desc: 'Se identifica el paciente que estará bajo cobertura.' },
                { step: '03', title: 'PROCEDIMIENTO', desc: 'Se determina el procedimiento que será objeto de cobertura.' },
                { step: '04', title: 'ACTIVACIÓN', desc: 'La cobertura se activa individualmente para ese paciente.' },
                { step: '05', title: 'PROTECCIÓN', desc: 'El procedimiento queda bajo el alcance de la Cobertura Básica.' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col relative"
                >
                  <div className="w-14 h-14 bg-bmq-charcoal border border-white/20 rounded-full flex items-center justify-center mb-8 relative z-10 self-start lg:mx-auto">
                    <span className="font-serif text-lg text-bmq-ivory/50">{item.step}</span>
                  </div>
                  
                  {idx !== 4 && (
                    <div className="lg:hidden absolute left-7 top-14 bottom-[-3rem] w-[1px] bg-white/10 z-0"></div>
                  )}

                  <div className="lg:text-center pl-20 lg:pl-0 -mt-16 lg:mt-0 pr-4 lg:pr-0">
                    <h4 className="text-[10px] md:text-[11px] tracking-[0.2em] font-medium uppercase text-bmq-ivory mb-4">{item.title}</h4>
                    <p className="text-[13px] md:text-[14px] text-bmq-ivory/60 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. VALOR / PRECIO (NEGRO) */}
      <section className="py-24 lg:py-32 bg-bmq-black text-bmq-ivory border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="border-l border-bmq-blue/30 pl-8"
              >
                <span className="text-[10px] tracking-[0.2em] uppercase text-bmq-ivory/50 block mb-6">CATEGORÍA</span>
                <h3 className="text-[14px] tracking-[0.1em] font-medium uppercase text-bmq-ivory mb-8 leading-loose min-h-[60px]">
                  CIRUGÍA / CIRUGÍA PLÁSTICA /<br />CIRUJANOS / CLÍNICAS / IPS
                </h3>
                <span className="text-[10px] tracking-[0.2em] uppercase text-bmq-gold block mb-2">VALOR DE COBERTURA</span>
                <p className="font-serif text-4xl text-bmq-ivory">
                  $300.000 <span className="text-xl text-bmq-ivory/50 font-sans tracking-widest">+ IVA</span>
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="border-l border-bmq-blue/30 pl-8"
              >
                <span className="text-[10px] tracking-[0.2em] uppercase text-bmq-ivory/50 block mb-6">CATEGORÍA</span>
                <h3 className="text-[14px] tracking-[0.1em] font-medium uppercase text-bmq-ivory mb-8 leading-loose min-h-[60px]">
                  PROCEDIMIENTOS ESTÉTICOS /<br />ÁCIDO HIALURÓNICO
                </h3>
                <span className="text-[10px] tracking-[0.2em] uppercase text-bmq-gold block mb-2">VALOR DE COBERTURA</span>
                <p className="font-serif text-4xl text-bmq-ivory">
                  $100.000 <span className="text-xl text-bmq-ivory/50 font-sans tracking-widest">+ IVA</span>
                </p>
              </motion.div>

            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[12px] md:text-[13px] text-bmq-ivory/40 font-light italic"
            >
              *El valor de la cobertura depende de la categoría del procedimiento.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 12. LO QUE BMQ BÁSICA NO INCLUYE (CARBÓN) */}
      <section className="py-24 bg-bmq-charcoal text-bmq-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl md:text-5xl leading-[1.2] mb-6">
                UN LÍMITE CLARO.<br />UN PRODUCTO CLARO.
              </h2>
              <p className="text-[16px] md:text-[18px] text-bmq-ivory/70 font-light leading-relaxed max-w-2xl mx-auto mb-16">
                La Cobertura Básica contempla protección jurídica y acompañamiento especializado.
                No incluye el componente de respaldo económico de BMQ+.
              </p>
              
              <div className="border border-white/10 p-8 max-w-md mx-auto mb-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <X size={64} />
                </div>
                <h4 className="text-[12px] tracking-[0.2em] uppercase font-medium text-bmq-ivory mb-2">RESPALDO ECONÓMICO</h4>
                <div className="h-[1px] w-8 bg-white/20 mx-auto my-4"></div>
                <p className="text-[11px] tracking-[0.2em] uppercase text-bmq-ivory/50">NO INCLUIDO EN BMQ BÁSICA</p>
              </div>

              <p className="text-[15px] md:text-[16px] text-bmq-ivory/60 font-light mb-8">
                Para conocer la cobertura que incorpora respaldo económico, consulte BMQ+.
              </p>
              
              <Link to="/coberturas/plus" className="inline-flex items-center text-xs tracking-[0.2em] font-medium text-bmq-gold hover:text-bmq-ivory transition-colors group">
                CONOCER BMQ+
                <ArrowRight size={14} className="ml-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>

            </motion.div>
          </div>
        </div>
      </section>

      {/* 13. RESUMEN (MARFIL) */}
      <section className="py-24 lg:py-32 bg-bmq-ivory text-bmq-black border-t border-bmq-black/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto border border-bmq-black/10 p-10 md:p-16">
            <h3 className="font-serif text-3xl text-bmq-black mb-2">BMQ</h3>
            <span className="text-[10px] tracking-[0.2em] uppercase text-bmq-charcoal/50 block mb-2">COBERTURA BÁSICA</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-bmq-blue font-medium block mb-10">PROTECCIÓN JURÍDICA</span>
            
            <ul className="space-y-6 border-t border-bmq-black/10 pt-10">
              {[
                { text: 'Asesoría precontractual', active: true },
                { text: 'Representación civil', active: true },
                { text: 'Defensa penal', active: true },
                { text: 'Defensa disciplinaria', active: true },
                { text: 'Procesos administrativos', active: true },
                { text: 'Acompañamiento posoperatorio', active: true },
                { text: 'Asesoría en historia clínica', active: true },
                { text: 'Defensa digital', active: true },
                { text: 'Protección durante la vigencia y prescripción aplicable', active: true },
                { text: 'Respaldo económico', active: false }
              ].map((item, idx) => (
                <li key={idx} className="flex items-center">
                  {item.active ? (
                    <Check size={16} className="text-bmq-blue mr-4 flex-shrink-0" />
                  ) : (
                    <X size={16} className="text-bmq-black/30 mr-4 flex-shrink-0" />
                  )}
                  <span className={`text-[15px] font-light ${item.active ? 'text-bmq-black' : 'text-bmq-black/40 line-through'}`}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 14. CTA FINAL (NEGRO) */}
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
              PROTEGER TU PRÁCTICA<br className="hidden md:block" /> TAMBIÉN ES PREPARARLA.
            </h2>
            <p className="text-[17px] md:text-[20px] text-bmq-ivory/70 font-light leading-relaxed mb-16 max-w-2xl">
              Conozca el alcance de BMQ y active la protección correspondiente
              para cada paciente y procedimiento.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
              <Link to="/solicitar-cobertura" className="inline-flex items-center justify-center bg-bmq-ivory text-bmq-black px-10 py-5 text-xs tracking-[0.2em] font-medium transition-all duration-500 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group w-full sm:w-auto">
                SOLICITAR COBERTURA
                <ArrowRight size={14} className="ml-4 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
              <Link to="/coberturas/plus" className="inline-flex items-center justify-center border border-white/20 text-bmq-ivory px-10 py-5 text-xs tracking-[0.2em] font-medium transition-all duration-500 hover:border-bmq-gold hover:text-bmq-gold group w-full sm:w-auto">
                CONOCER BMQ+
                <ArrowRight size={14} className="ml-4 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
