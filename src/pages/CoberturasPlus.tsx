import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

export function CoberturasPlus() {
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
            <span className="text-[0.65rem] tracking-[0.3em] uppercase text-bmq-gold block mb-8 flex items-center">
              <span className="w-8 h-[1px] bg-bmq-gold/40 mr-4"></span>
              NIVEL DE COBERTURA
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] mb-6 text-bmq-gold">
              Garantía Plus
            </h1>
            <h2 className="font-serif text-3xl md:text-4xl text-bmq-ivory/70 italic mb-10">
              Protección jurídica más respaldo.
            </h2>
            <p className="text-[17px] md:text-[20px] text-bmq-ivory/80 font-light leading-relaxed max-w-3xl mb-16">
              La estructura de protección jurídica de BMQ acompañada de un
              componente de respaldo económico de hasta $250.000.000 ante una
              eventual condena, conforme a las condiciones de la cobertura.
            </p>
            
            <div className="inline-block border border-bmq-gold/30 p-8 relative">
              <div className="absolute top-0 right-0 w-2 h-2 bg-bmq-gold"></div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-bmq-gold block mb-4">HASTA</span>
              <p className="font-serif text-4xl md:text-5xl text-bmq-ivory mb-2">$250.000.000</p>
              <p className="text-[11px] tracking-[0.2em] uppercase text-bmq-ivory/60 mb-6">RESPALDO ECONÓMICO*</p>
              <p className="text-[10px] text-bmq-ivory/40 italic font-light">
                *Ante una eventual condena y conforme a las condiciones de la cobertura.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ¿QUÉ ES BMQ+? (MARFIL) */}
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
                ¿QUÉ ES BMQ+?
              </span>
              <h2 className="font-serif text-3xl md:text-5xl leading-[1.2] mb-10">
                LA MISMA PROTECCIÓN JURÍDICA.<br className="hidden md:block" /> UN COMPONENTE ADICIONAL DE RESPALDO.
              </h2>
              <p className="text-[17px] md:text-[19px] text-bmq-charcoal/80 font-normal leading-relaxed max-w-3xl mx-auto mb-16">
                BMQ+ integra la estructura de protección jurídica de BMQ con un
                componente de respaldo económico de hasta $250.000.000 ante una
                eventual condena, conforme a las condiciones de la cobertura.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 text-[12px] tracking-[0.2em] uppercase font-medium">
                <span className="text-bmq-blue border-b border-bmq-blue/20 pb-2">PROTECCIÓN JURÍDICA</span>
                <span className="text-bmq-black/20">+</span>
                <span className="text-bmq-gold border-b border-bmq-gold/40 pb-2">RESPALDO ECONÓMICO</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. TODO LO QUE INCLUYE BMQ (NEGRO) */}
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
              LA PROTECCIÓN JURÍDICA<br />
              <span className="italic text-bmq-ivory/70">SIGUE SIENDO EL FUNDAMENTO.</span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {[
              { num: '01', title: 'ASESORÍA JURÍDICA PRECONTRACTUAL', desc: 'Acompañamiento antes de la relación contractual con el paciente.' },
              { num: '02', title: 'REPRESENTACIÓN EN RESPONSABILIDAD CIVIL', desc: 'Defensa y representación en procesos relacionados con responsabilidad civil médica y, cuando corresponda, responsabilidad civil empresarial en servicios médicos, quirúrgicos y estéticos.' },
              { num: '03', title: 'PROCESOS PENALES', desc: 'Defensa jurídica frente a investigaciones o procesos penales relacionados con el ejercicio profesional, dentro del alcance de la cobertura.' },
              { num: '04', title: 'DEFENSA DISCIPLINARIA', desc: 'Representación en procesos relacionados con responsabilidad disciplinaria médica ante las autoridades competentes.' },
              { num: '05', title: 'ACOMPAÑAMIENTO POSOPERATORIO', desc: 'Asesoría para la adecuada gestión de la relación médico-paciente durante el postoperatorio, manejo de crisis y control de controversias.' },
              { num: '06', title: 'HISTORIA CLÍNICA', desc: 'Capacitación y acompañamiento para el correcto diligenciamiento de la historia clínica como parte de la gestión preventiva del riesgo jurídico.' },
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
                  <span className="font-serif text-3xl text-bmq-gold mr-6 group-hover:text-bmq-ivory transition-colors duration-500">{comp.num}</span>
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

      {/* 4. LOS CUATRO FRENTES JURÍDICOS (MARFIL) */}
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
              UNA COBERTURA.<br className="hidden md:block"/> CUATRO FRENTES DE RESPONSABILIDAD.
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'CIVIL', desc: 'Responsabilidad civil médica y empresarial cuando corresponda al alcance documentado.' },
              { num: '02', title: 'PENAL', desc: 'Investigaciones y procesos relacionados con el ejercicio profesional.' },
              { num: '03', title: 'DISCIPLINARIO', desc: 'Procesos relacionados con responsabilidad disciplinaria médica.' },
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
                  <span className="font-serif text-xl text-bmq-gold/60 mr-4">{frente.num}</span>
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

      {/* 5. EL COMPONENTE PLUS / RESPALDO ECONÓMICO (CARBÓN) */}
      <section className="py-32 lg:py-48 bg-bmq-charcoal text-bmq-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <span className="text-[0.65rem] tracking-[0.3em] uppercase text-bmq-gold block mb-8">
                EL COMPONENTE PLUS
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8">
                CUANDO LA PROTECCIÓN<br />
                TAMBIÉN NECESITA RESPALDO.
              </h2>
              <p className="text-[17px] md:text-[20px] text-bmq-ivory/70 font-light leading-relaxed mb-8">
                BMQ+ incorpora un componente de respaldo económico de hasta
                $250.000.000 ante una eventual condena, conforme a las condiciones
                de la cobertura.
              </p>
              <p className="text-[12px] text-bmq-ivory/40 font-light italic">
                *El respaldo económico está sujeto a las condiciones y alcance de
                la cobertura contratada.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 w-full"
            >
              <div className="border border-bmq-gold/30 p-12 lg:p-16 relative bg-bmq-black/20">
                <div className="absolute top-0 left-0 w-8 h-[1px] bg-bmq-gold"></div>
                <div className="absolute top-0 left-0 w-[1px] h-8 bg-bmq-gold"></div>
                
                <span className="text-[11px] tracking-[0.3em] uppercase text-bmq-gold/70 block mb-6">HASTA</span>
                <p className="font-serif text-5xl md:text-6xl lg:text-7xl text-bmq-gold mb-6 tracking-tight">
                  $250.000.000
                </p>
                <div className="h-[1px] w-full bg-bmq-gold/10 mb-6"></div>
                <p className="text-[12px] md:text-[13px] tracking-[0.2em] uppercase font-medium text-bmq-ivory/90">
                  DE RESPALDO ECONÓMICO*
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. QUÉ SIGNIFICA "HASTA" (CARBÓN - Borde dorado tenue) */}
      <section className="py-24 bg-bmq-charcoal text-bmq-ivory border-y border-bmq-gold/10">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl leading-[1.2] mb-8 text-bmq-ivory/90">
              "HASTA" NO SIGNIFICA<br />UN PAGO AUTOMÁTICO.
            </h2>
            <p className="text-[16px] md:text-[18px] text-bmq-ivory/60 font-light leading-relaxed">
              El monto de hasta $250.000.000 corresponde al límite máximo de
              respaldo económico anunciado para BMQ+ ante una eventual condena,
              siempre de acuerdo con las condiciones, alcance y términos aplicables
              a la cobertura contratada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 7. NO ES SOLO RESPALDO (NEGRO) */}
      <section className="py-24 lg:py-32 bg-bmq-black text-bmq-ivory border-b border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-4xl mx-auto text-center mb-20 lg:mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-3xl md:text-5xl leading-[1.2] mb-8"
            >
              EL RESPALDO ECONÓMICO<br className="hidden md:block" /> NO REEMPLAZA LA DEFENSA.
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p className="text-[17px] md:text-[19px] text-bmq-ivory/70 font-light leading-relaxed max-w-2xl mx-auto mb-6">
                La propuesta BMQ+ mantiene como fundamento la protección jurídica
                especializada.
              </p>
              <p className="text-[17px] md:text-[19px] text-bmq-ivory/70 font-light leading-relaxed max-w-2xl mx-auto">
                El componente económico complementa esa estructura.
              </p>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 text-[10px] md:text-[11px] tracking-[0.2em] font-medium uppercase text-bmq-ivory/80">
              <span>PROTEGER</span>
              <ArrowRight size={14} className="hidden md:block mx-6 text-bmq-gold/40" />
              <span>ACOMPAÑAR</span>
              <ArrowRight size={14} className="hidden md:block mx-6 text-bmq-gold/40" />
              <span>DEFENDER</span>
              <ArrowRight size={14} className="hidden md:block mx-6 text-bmq-gold/40" />
              <span className="text-bmq-gold border-b border-bmq-gold/30 pb-1">RESPALDAR</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. RELACIÓN MÉDICO-PACIENTE (CARBÓN) */}
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
              LA PROTECCIÓN COMIENZA<br className="hidden md:block" /> ANTES DEL CONFLICTO.
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p className="text-[17px] md:text-[19px] text-bmq-ivory/70 font-light leading-relaxed max-w-3xl mx-auto mb-6">
                Una inconformidad, una diferencia de expectativas o el deterioro de
                la relación médico-paciente pueden convertirse en escenarios que
                requieren acompañamiento jurídico especializado.
              </p>
              <p className="text-[17px] md:text-[19px] text-bmq-ivory/70 font-light leading-relaxed max-w-3xl mx-auto">
                BMQ+ contempla la misma estructura de acompañamiento preventivo y
                reactivo de BMQ.
              </p>
            </motion.div>
          </div>

          <div className="max-w-5xl mx-auto overflow-hidden">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between relative space-y-12 lg:space-y-0">
              {/* Desktop Connecting Line */}
              <div className="hidden lg:block absolute top-6 left-12 right-12 h-[1px] bg-white/10 z-0"></div>

              {[
                { step: 'PREVENCIÓN', color: 'text-bmq-ivory/60' },
                { step: 'ACOMPAÑAMIENTO', color: 'text-bmq-ivory/60' },
                { step: 'GESTIÓN', color: 'text-bmq-ivory/60' },
                { step: 'DEFENSA', color: 'text-bmq-ivory/60' },
                { step: 'RESPALDO', color: 'text-bmq-gold/90' }
              ].map((item, idx) => (
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

                  <div className={`w-6 h-6 rounded-full border ${idx === 4 ? 'border-bmq-gold/50 bg-bmq-black' : 'border-white/20 bg-bmq-charcoal'} flex items-center justify-center mr-6 lg:mr-0 lg:mb-6 transition-all duration-500 z-10`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${idx === 4 ? 'bg-bmq-gold' : 'bg-white/30'}`}></div>
                  </div>
                  
                  <span className={`text-[9px] md:text-[10px] tracking-[0.2em] font-medium uppercase max-w-[140px] text-left lg:text-center ${item.color}`}>
                    {item.step}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. DOCUMENTACIÓN (NEGRO) */}
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
                LA DEFENSA TAMBIÉN SE CONSTRUYE<br className="hidden md:block" /> ANTES DEL CONFLICTO.
              </h2>
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

      {/* 10. VIGENCIA (MARFIL) */}
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
                LA PROTECCIÓN ACOMPAÑA<br className="hidden md:block" /> EL RIESGO JURÍDICO.
              </h2>
              <p className="text-[17px] md:text-[19px] text-bmq-charcoal/80 font-normal leading-relaxed max-w-3xl mx-auto mb-8">
                La documentación BMQ señala que la protección jurídica se mantiene
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

      {/* 11. CÓMO FUNCIONA (CARBÓN) */}
      <section className="py-24 lg:py-40 bg-bmq-charcoal text-bmq-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-5xl mx-auto mb-20 lg:mb-32">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.1] mb-6"
            >
              UNA COBERTURA.<br />
              UN PACIENTE.<br />
              <span className="italic text-bmq-ivory/70">UN PROCEDIMIENTO.</span>
            </motion.h2>
          </div>

          <div className="max-w-6xl mx-auto relative">
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-white/10 z-0"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
              {[
                { step: '01', title: 'AFILIACIÓN', desc: 'El profesional o institución forma parte del sistema BMQ.' },
                { step: '02', title: 'PACIENTE', desc: 'Se identifica el paciente que estará bajo cobertura.' },
                { step: '03', title: 'PROCEDIMIENTO', desc: 'Se determina el procedimiento objeto de cobertura.' },
                { step: '04', title: 'ACTIVACIÓN', desc: 'La cobertura se activa individualmente para ese paciente.' },
                { step: '05', title: 'PROTECCIÓN + RESPALDO', desc: 'El procedimiento queda bajo el alcance de BMQ+, incluyendo el componente de respaldo económico conforme a las condiciones contratadas.' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col relative"
                >
                  <div className={`w-14 h-14 ${idx === 4 ? 'bg-bmq-gold/10 border-bmq-gold/40' : 'bg-bmq-charcoal border-white/20'} border rounded-full flex items-center justify-center mb-8 relative z-10 self-start lg:mx-auto transition-colors`}>
                    <span className={`font-serif text-lg ${idx === 4 ? 'text-bmq-gold' : 'text-bmq-ivory/50'}`}>{item.step}</span>
                  </div>
                  
                  {idx !== 4 && (
                    <div className="lg:hidden absolute left-7 top-14 bottom-[-3rem] w-[1px] bg-white/10 z-0"></div>
                  )}

                  <div className="lg:text-center pl-20 lg:pl-0 -mt-16 lg:mt-0 pr-4 lg:pr-0">
                    <h4 className={`text-[10px] md:text-[11px] tracking-[0.2em] font-medium uppercase mb-4 ${idx === 4 ? 'text-bmq-gold' : 'text-bmq-ivory'}`}>{item.title}</h4>
                    <p className={`text-[13px] md:text-[14px] font-light leading-relaxed ${idx === 4 ? 'text-bmq-ivory/80' : 'text-bmq-ivory/60'}`}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. PRECIO COMERCIAL (NEGRO) */}
      <section className="py-24 lg:py-32 bg-bmq-black text-bmq-ivory border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="border-l border-bmq-gold/50 pl-8"
              >
                <span className="text-[10px] tracking-[0.2em] uppercase text-bmq-ivory/50 block mb-6">BMQ+ — CATEGORÍA</span>
                <h3 className="text-[14px] tracking-[0.1em] font-medium uppercase text-bmq-ivory mb-8 leading-loose min-h-[60px]">
                  CIRUGÍA / CIRUJANOS /<br />CLÍNICAS / IPS
                </h3>
                <span className="text-[10px] tracking-[0.2em] uppercase text-bmq-gold block mb-2">VALOR DE COBERTURA</span>
                <p className="font-serif text-4xl text-bmq-gold">
                  $350.000 <span className="text-xl text-bmq-gold/50 font-sans tracking-widest">+ IVA</span>
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="border-l border-bmq-gold/50 pl-8"
              >
                <span className="text-[10px] tracking-[0.2em] uppercase text-bmq-ivory/50 block mb-6">BMQ+ — CATEGORÍA</span>
                <h3 className="text-[14px] tracking-[0.1em] font-medium uppercase text-bmq-ivory mb-8 leading-loose min-h-[60px]">
                  PROCEDIMIENTOS ESTÉTICOS /<br />ÁCIDO HIALURÓNICO
                </h3>
                <span className="text-[10px] tracking-[0.2em] uppercase text-bmq-gold block mb-2">VALOR DE COBERTURA</span>
                <p className="font-serif text-4xl text-bmq-gold">
                  $150.000 <span className="text-xl text-bmq-gold/50 font-sans tracking-widest">+ IVA</span>
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

      {/* 13. ¿POR QUÉ BMQ+? (CARBÓN) */}
      <section className="py-24 bg-bmq-charcoal text-bmq-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl md:text-5xl leading-[1.2] mb-12">
                ¿POR QUÉ BMQ+?
              </h2>
              
              <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 mb-12">
                
                <div className="flex flex-col items-center">
                  <span className="font-serif text-2xl text-bmq-ivory/50 mb-2">BMQ</span>
                  <span className="text-[10px] tracking-[0.2em] font-medium text-bmq-blue border-b border-bmq-blue/20 pb-1 uppercase">PROTECCIÓN JURÍDICA</span>
                </div>

                <div className="hidden md:block w-[1px] h-12 bg-white/10"></div>
                <div className="md:hidden w-12 h-[1px] bg-white/10"></div>

                <div className="flex flex-col items-center">
                  <span className="font-serif text-2xl text-bmq-gold flex items-center mb-2">BMQ<span className="text-lg ml-0.5">+</span></span>
                  <div className="flex flex-col items-center text-[10px] tracking-[0.2em] font-medium text-bmq-gold uppercase space-y-1">
                    <span>PROTECCIÓN JURÍDICA</span>
                    <span className="text-bmq-gold/50">+</span>
                    <span className="border-b border-bmq-gold/40 pb-1">RESPALDO ECONÓMICO</span>
                  </div>
                </div>

              </div>

              <p className="text-[15px] md:text-[17px] text-bmq-ivory/60 font-light leading-relaxed max-w-2xl mx-auto mb-10">
                BMQ+ mantiene la estructura de protección jurídica de BMQ y añade
                un componente de respaldo económico de hasta $250.000.000 ante una
                eventual condena, conforme a las condiciones de la cobertura.
              </p>
              
              <Link to="/coberturas" className="inline-flex items-center text-xs tracking-[0.2em] font-medium text-bmq-ivory/50 hover:text-bmq-ivory transition-colors group">
                VOLVER A COMPARAR COBERTURAS
                <ArrowRight size={14} className="ml-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>

            </motion.div>
          </div>
        </div>
      </section>

      {/* 14. RESUMEN VISUAL (MARFIL) */}
      <section className="py-24 lg:py-32 bg-bmq-ivory text-bmq-black border-t border-bmq-black/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto border border-bmq-gold/30 p-10 md:p-16 relative bg-white">
            <div className="absolute top-0 right-0 w-3 h-3 bg-bmq-gold"></div>
            
            <h3 className="font-serif text-3xl text-bmq-gold mb-2 flex items-center">BMQ<span className="text-2xl ml-0.5">+</span></h3>
            <span className="text-[10px] tracking-[0.2em] uppercase text-bmq-charcoal/50 block mb-10">COBERTURA PLUS</span>
            
            <ul className="space-y-6 border-t border-bmq-black/10 pt-10">
              {[
                'Asesoría jurídica precontractual',
                'Representación civil',
                'Defensa penal',
                'Defensa disciplinaria',
                'Procesos administrativos',
                'Acompañamiento posoperatorio',
                'Asesoría en historia clínica',
                'Defensa digital',
                'Protección durante la vigencia y prescripción aplicable',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <Check size={16} className="text-bmq-blue mr-4 mt-0.5 flex-shrink-0" />
                  <span className="text-[15px] font-light text-bmq-black leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
              <li className="flex items-start pt-4 border-t border-bmq-gold/20">
                <Check size={16} className="text-bmq-gold mr-4 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[15px] font-medium text-bmq-black leading-relaxed">
                    Respaldo económico de hasta $250.000.000*
                  </span>
                  <span className="text-[11px] text-bmq-charcoal/50 italic mt-1">
                    *Ante una eventual condena y conforme a las condiciones de la cobertura.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 15. CTA FINAL (NEGRO) */}
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
              PROTEGE LO QUE HAS CONSTRUIDO.<br className="hidden md:block" /> Y AÑADE RESPALDO A ESA PROTECCIÓN.
            </h2>
            <p className="text-[17px] md:text-[20px] text-bmq-ivory/70 font-light leading-relaxed mb-16 max-w-2xl">
              Conozca el alcance de BMQ+ y active la cobertura correspondiente
              para cada paciente y procedimiento.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-6 w-full mb-8">
              <Link to="/solicitar-cobertura" className="inline-flex items-center justify-center bg-bmq-gold text-bmq-black px-8 py-5 text-xs tracking-[0.2em] font-medium transition-all duration-500 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group w-full sm:w-auto min-w-[240px]">
                SOLICITAR COBERTURA
                <ArrowRight size={14} className="ml-4 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
              <Link to="/coberturas/basica" className="inline-flex items-center justify-center border border-white/20 text-bmq-ivory px-8 py-5 text-xs tracking-[0.2em] font-medium transition-all duration-500 hover:border-bmq-ivory group w-full sm:w-auto min-w-[240px]">
                CONOCER BMQ
                <ArrowRight size={14} className="ml-4 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </div>
            
            <Link to="/coberturas" className="inline-flex items-center text-[10px] tracking-[0.2em] font-medium text-bmq-ivory/40 hover:text-bmq-ivory transition-colors group mt-4">
              COMPARAR COBERTURAS
              <ArrowRight size={12} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
