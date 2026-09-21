import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { BmqNetworkCarousel } from '../components/BmqNetworkCarousel';

export function Nosotros() {
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
              NUESTRA IDENTIDAD
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] mb-6 text-bmq-ivory">
              Quiénes Somos.
            </h1>
            <h2 className="font-serif text-3xl md:text-4xl text-bmq-ivory/70 italic mb-10">
              Protección jurídica para quienes ejercen la medicina.
            </h2>
            <p className="text-[17px] md:text-[20px] text-bmq-ivory/80 font-light leading-relaxed max-w-3xl">
              Blindaje Médico Quirúrgico es un equipo especializado en brindar
              herramientas de protección jurídica y judicial a profesionales del
              ámbito médico y estético.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. NUESTRA ESPECIALIZACIÓN (CARBÓN) */}
      <section className="py-24 lg:py-32 bg-bmq-charcoal text-bmq-ivory border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[0.65rem] tracking-[0.3em] uppercase text-bmq-ivory/50 block mb-8">
                NUESTRA ESPECIALIZACIÓN
              </span>
              <h2 className="font-serif text-3xl md:text-5xl leading-[1.2] mb-8">
                PROTEGER EL EJERCICIO PROFESIONAL<br className="hidden md:block" /> REQUIERE ENTENDERLO.
              </h2>
              <p className="text-[17px] md:text-[19px] text-bmq-ivory/70 font-light leading-relaxed max-w-3xl mx-auto mb-6">
                El ejercicio médico y estético implica decisiones clínicas,
                relaciones humanas y responsabilidades jurídicas que pueden
                extenderse mucho más allá del momento de la atención.
              </p>
              <p className="text-[17px] md:text-[19px] text-bmq-ivory/70 font-light leading-relaxed max-w-3xl mx-auto">
                BMQ desarrolla herramientas de protección jurídica y judicial
                orientadas específicamente a este entorno profesional.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 3. EL KIT DE PREVENCIÓN (MARFIL) */}
      <section className="py-24 lg:py-40 bg-bmq-ivory text-bmq-black border-y border-bmq-black/5">
        <div className="container mx-auto px-6 lg:px-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto mb-20 lg:mb-24"
          >
            <span className="text-[0.65rem] tracking-[0.3em] uppercase text-bmq-black/50 block mb-8">
              NUESTRA HERRAMIENTA DE PREVENCIÓN
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8">
              EL BLINDAJE COMIENZA<br className="hidden md:block" /> ANTES DEL CONFLICTO.
            </h2>
            <p className="text-[17px] md:text-[19px] text-bmq-charcoal/80 font-normal leading-relaxed max-w-3xl">
              BMQ desarrolló el Kit de Prevención y Blindaje Jurídico para ayudar
              a sus clientes a estructurar preventivamente su práctica profesional.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { num: '01', title: 'CONTRATOS', desc: 'Elaboración de contratos a medida relacionados con la prestación de servicios.' },
              { num: '02', title: 'CONSENTIMIENTOS INFORMADOS', desc: 'Elaboración de consentimientos informados a medida para los procedimientos correspondientes.' },
              { num: '03', title: 'CAPACITACIÓN', desc: 'Acompañamiento y capacitación para el correcto uso de las herramientas documentales.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="border-t border-bmq-black/10 pt-8"
              >
                <div className="flex items-center mb-6">
                  <span className="font-serif text-2xl text-bmq-blue/40 mr-4">{item.num}</span>
                  <h3 className="text-[11px] tracking-[0.2em] font-medium uppercase text-bmq-black">{item.title}</h3>
                </div>
                <p className="text-[15px] text-bmq-charcoal/70 font-normal leading-relaxed pl-10">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. QUÉ HACEMOS / PREVENIR ANTES DE DEFENDER (NEGRO) */}
      <section className="py-24 lg:py-40 bg-bmq-black text-bmq-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-4xl mx-auto text-center mb-24 lg:mb-32">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-3xl md:text-5xl leading-[1.2] mb-10"
            >
              LA DEFENSA COMIENZA<br className="hidden md:block" /> MUCHO ANTES DE UNA DEMANDA.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-[17px] md:text-[19px] text-bmq-ivory/70 font-light leading-relaxed max-w-3xl mx-auto mb-16"
            >
              Una estructura documental adecuada, una relación correctamente
              establecida con el paciente y una práctica organizada permiten
              gestionar preventivamente parte del riesgo jurídico asociado al
              ejercicio profesional.
            </motion.p>

            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 text-[10px] md:text-[11px] tracking-[0.2em] font-medium uppercase text-bmq-ivory/80">
              <span>PREVENIR</span>
              <ArrowRight size={14} className="hidden md:block mx-6 text-white/20" />
              <span>DOCUMENTAR</span>
              <ArrowRight size={14} className="hidden md:block mx-6 text-white/20" />
              <span>ACOMPAÑAR</span>
              <ArrowRight size={14} className="hidden md:block mx-6 text-white/20" />
              <span className="text-bmq-blue border-b border-bmq-blue/30 pb-1">DEFENDER</span>
            </div>
          </div>

          <div className="max-w-5xl mx-auto pt-24 border-t border-white/10">
            <span className="text-[0.65rem] tracking-[0.3em] uppercase text-bmq-ivory/50 block mb-6 text-center">
              QUÉ HACEMOS
            </span>
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.2] mb-16 text-center">
              DE LA PREVENCIÓN<br className="hidden md:block" /> A LA DEFENSA.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {[
                { num: '01', title: 'PREVENCIÓN JURÍDICA', desc: 'Herramientas para estructurar preventivamente la práctica profesional.' },
                { num: '02', title: 'DOCUMENTACIÓN', desc: 'Contratos, consentimientos informados e historia clínica como parte de la gestión preventiva del riesgo.' },
                { num: '03', title: 'ACOMPAÑAMIENTO', desc: 'Asesoría y acompañamiento jurídico durante el ejercicio profesional y frente a situaciones que puedan generar controversia.' },
                { num: '04', title: 'DEFENSA JURÍDICA', desc: 'Representación y defensa en los ámbitos contemplados por las coberturas BMQ.' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group border-l border-white/10 pl-8 lg:pl-10 py-2 hover:border-bmq-ivory/30 transition-colors duration-500"
                >
                  <div className="flex items-center mb-4">
                    <span className="font-serif text-xl text-bmq-ivory/20 mr-4">{item.num}</span>
                    <h3 className="text-[11px] tracking-[0.2em] font-medium uppercase text-bmq-ivory leading-relaxed">{item.title}</h3>
                  </div>
                  <p className="text-[15px] md:text-[16px] text-bmq-ivory/60 font-light leading-relaxed pl-10">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. ESPECIALIZACIÓN EN EL SECTOR (CARBÓN) */}
      <section className="py-24 lg:py-32 bg-bmq-charcoal text-bmq-ivory border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl md:text-5xl leading-[1.2] mb-8">
                CONOCEMOS EL ENTORNO<br className="hidden md:block" /> EN EL QUE SE PRODUCE EL RIESGO.
              </h2>
              <p className="text-[17px] md:text-[19px] text-bmq-ivory/70 font-light leading-relaxed max-w-3xl mx-auto">
                BMQ orienta su propuesta al ámbito médico y estético, incluyendo
                profesionales de la salud e instituciones relacionadas con la
                prestación de servicios médicos, quirúrgicos y estéticos.
              </p>
            </motion.div>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { title: 'PROFESIONALES DE LA SALUD', desc: 'Médicos, especialistas y personal asistencial.' },
              { title: 'INSTITUCIONES DE SALUD', desc: 'IPS y clínicas.' },
              { title: 'SECTOR ESTÉTICO Y POSQUIRÚRGICO', desc: 'Centros de estética y posquirúrgicos.' }
            ].map((sector, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="border-t border-white/10 pt-8"
              >
                <h3 className="text-[11px] tracking-[0.2em] font-medium uppercase text-bmq-ivory/90 mb-6 min-h-[30px]">{sector.title}</h3>
                <p className="text-[15px] text-bmq-ivory/60 font-light leading-relaxed">
                  {sector.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. PREVENCIÓN Y DEFENSA (MARFIL - Contraste visual) */}
      <section className="py-32 lg:py-48 bg-bmq-ivory text-bmq-black border-b border-bmq-black/5 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
            
            {/* Lado Izquierdo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/3 text-center lg:text-right lg:pr-12"
            >
              <h3 className="font-serif text-3xl md:text-4xl text-bmq-blue mb-8">PREVENIR</h3>
              <ul className="space-y-4">
                {['estructurar', 'documentar', 'orientar', 'acompañar'].map((item, i) => (
                  <li key={i} className="text-[14px] tracking-[0.2em] uppercase text-bmq-charcoal/60 font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Centro */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/3 text-center border-y lg:border-y-0 lg:border-x border-bmq-black/10 py-12 lg:py-0 lg:px-12"
            >
              <h2 className="font-serif text-3xl md:text-5xl leading-[1.2] mb-6 text-bmq-black">
                UNA PROTECCIÓN<br /> QUE NO ESPERA<br /> AL CONFLICTO.
              </h2>
              <p className="text-[15px] md:text-[16px] text-bmq-charcoal/80 font-normal leading-relaxed">
                La propuesta BMQ integra prevención y defensa dentro de una misma
                estructura de protección jurídica.
              </p>
            </motion.div>

            {/* Lado Derecho */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/3 text-center lg:text-left lg:pl-12"
            >
              <h3 className="font-serif text-3xl md:text-4xl text-bmq-black mb-8">DEFENDER</h3>
              <ul className="space-y-4">
                {['representar', 'responder', 'acompañar procesos', 'proteger jurídicamente'].map((item, i) => (
                  <li key={i} className="text-[14px] tracking-[0.2em] uppercase text-bmq-charcoal/60 font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 7. PRINCIPIOS (NEGRO) */}
      <section className="py-24 lg:py-32 bg-bmq-black text-bmq-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[0.65rem] tracking-[0.3em] uppercase text-bmq-ivory/50 block mb-8">
                NUESTROS PRINCIPIOS
              </span>
              <h2 className="font-serif text-3xl md:text-5xl leading-[1.2] mb-8">
                EXCELENCIA.<br className="hidden md:block" /> ÉTICA.<br className="hidden md:block" /> ESPECIALIZACIÓN.
              </h2>
              <p className="text-[17px] md:text-[19px] text-bmq-ivory/70 font-light leading-relaxed max-w-3xl mx-auto">
                El trabajo de BMQ está orientado por el compromiso con la excelencia
                y la ética en el acompañamiento de sus clientes.
              </p>
            </motion.div>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { title: 'EXCELENCIA', desc: 'Rigor en la estructuración de herramientas de protección.' },
              { title: 'ÉTICA', desc: 'Compromiso con un ejercicio responsable del acompañamiento jurídico.' },
              { title: 'ESPECIALIZACIÓN', desc: 'Comprensión del contexto médico y estético en el que se desarrolla la práctica profesional.' }
            ].map((principio, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="border-t border-white/10 pt-8"
              >
                <h3 className="text-[12px] tracking-[0.2em] font-medium uppercase text-bmq-ivory/90 mb-6">{principio.title}</h3>
                <p className="text-[15px] text-bmq-ivory/60 font-light leading-relaxed">
                  {principio.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. EL ENFOQUE BMQ (CARBÓN) */}
      <section className="py-24 lg:py-32 bg-bmq-charcoal text-bmq-ivory border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-3xl md:text-5xl leading-[1.2] mb-8"
            >
              NO SE TRATA SOLO<br className="hidden md:block" /> DE DEFENDER.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-[17px] md:text-[19px] text-bmq-ivory/70 font-light leading-relaxed max-w-3xl mx-auto"
            >
              Se trata de preparar la práctica antes de que aparezca el conflicto,
              acompañar al profesional cuando surgen dudas o situaciones complejas
              y ofrecer defensa cuando corresponde.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 text-[11px] md:text-[12px] tracking-[0.2em] font-medium uppercase text-bmq-ivory mb-16">
              <span className="flex flex-col items-center"><span className="text-[9px] text-bmq-ivory/40 mb-2">ANTES</span>PREVENCIÓN</span>
              <span className="text-white/10 mx-6 md:mt-4">+</span>
              <span className="flex flex-col items-center"><span className="text-[9px] text-bmq-ivory/40 mb-2">DURANTE</span>ACOMPAÑAMIENTO</span>
              <span className="text-white/10 mx-6 md:mt-4">+</span>
              <span className="flex flex-col items-center"><span className="text-[9px] text-bmq-ivory/40 mb-2">DESPUÉS</span>DEFENSA</span>
              
              <span className="text-white/10 mx-6 md:mt-4">+</span>
              <span className="flex flex-col items-center text-bmq-gold">
                <span className="text-[9px] text-bmq-gold/50 mb-2">Y PARA BMQ+</span>
                <span className="border-b border-bmq-gold/30 pb-1">RESPALDO</span>
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 9. DEFENSA DIGITAL (MARFIL) */}
      <section className="py-24 lg:py-32 bg-bmq-ivory text-bmq-black border-b border-bmq-black/5">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <span className="text-[0.65rem] tracking-[0.3em] uppercase text-bmq-black/50 block mb-6">
                DEFENSA DIGITAL
              </span>
              <h2 className="font-serif text-3xl md:text-5xl leading-[1.2] mb-8">
                LA REPUTACIÓN PROFESIONAL<br className="hidden md:block" /> TAMBIÉN MERECE PROTECCIÓN.
              </h2>
              <p className="text-[16px] md:text-[18px] text-bmq-charcoal/80 font-normal leading-relaxed mb-6">
                BMQ contempla herramientas de defensa digital orientadas a proteger
                la reputación profesional frente a contenidos calumniosos en entornos
                digitales.
              </p>
              <p className="text-[15px] md:text-[16px] text-bmq-charcoal/60 font-normal leading-relaxed italic">
                La documentación describe la eliminación legal de contenidos
                calumniosos en redes sociales y buscadores.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 w-full"
            >
              <div className="border border-bmq-black/10 p-10 lg:p-14 bg-white relative">
                <div className="absolute top-0 right-0 w-2 h-2 bg-bmq-blue/50"></div>
                
                <h3 className="text-[10px] tracking-[0.3em] uppercase text-bmq-charcoal/40 mb-8 block">
                  ENTORNOS CONTEMPLADOS
                </h3>
                
                <ul className="space-y-6 border-l border-bmq-black/10 pl-6 mb-12">
                  {['Instagram', 'TikTok', 'Facebook', 'Google Maps'].map((red, idx) => (
                    <li key={idx} className="flex items-center text-[15px] tracking-widest font-medium text-bmq-black uppercase">
                      <span className="w-1 h-1 bg-bmq-blue/70 mr-4 rounded-full"></span>
                      {red}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 10. PROTEGER ES MÁS QUE RESPONDER (NEGRO) */}
      <section className="py-24 lg:py-32 bg-bmq-black text-bmq-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center border border-white/10 p-12 lg:p-20 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-bmq-ivory/20"></div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl md:text-5xl leading-[1.2] mb-8">
                PROTEGER ES MÁS QUE RESPONDER.
              </h2>
              <p className="text-[17px] md:text-[19px] text-bmq-ivory/70 font-light leading-relaxed mb-6">
                Una defensa jurídica es necesaria cuando aparece un proceso.<br />
                La prevención permite trabajar antes de llegar a ese punto.
              </p>
              <p className="text-[17px] md:text-[19px] text-bmq-ivory/70 font-light leading-relaxed mb-10">
                BMQ estructura ambas dimensiones dentro de su propuesta:
              </p>
              <p className="text-[13px] tracking-[0.3em] uppercase font-medium text-bmq-ivory">
                PREVENCIÓN <span className="text-bmq-ivory/30 mx-4 font-light lowercase">y</span> DEFENSA.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 11. DOS NIVELES (CARBÓN) */}
      <section className="py-24 lg:py-32 bg-bmq-charcoal text-bmq-ivory border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-3xl md:text-5xl leading-[1.2] mb-8"
            >
              UN SISTEMA.<br className="hidden md:block" /> DOS NIVELES DE PROTECCIÓN.
            </motion.h2>
            <p className="text-[17px] md:text-[19px] text-bmq-ivory/70 font-light leading-relaxed">
              BMQ estructura su propuesta en dos niveles:
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center space-y-12 md:space-y-0 md:space-x-16 mb-16">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <h3 className="font-serif text-2xl text-bmq-blue mb-4">BMQ</h3>
              <p className="text-[14px] text-bmq-ivory/60 font-light leading-relaxed max-w-[240px] mx-auto">
                Protección jurídica especializada.
              </p>
            </motion.div>
            
            <div className="hidden md:block w-[1px] h-16 bg-white/10 self-center"></div>
            <div className="md:hidden w-16 h-[1px] bg-white/10 mx-auto"></div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="font-serif text-2xl text-bmq-gold flex items-center justify-center mb-4">BMQ<span className="text-lg ml-0.5">+</span></h3>
              <p className="text-[14px] text-bmq-ivory/60 font-light leading-relaxed max-w-[240px] mx-auto">
                Protección jurídica + respaldo económico.
              </p>
            </motion.div>

          </div>

          <div className="text-center">
            <Link to="/coberturas" className="inline-flex items-center text-[11px] tracking-[0.2em] font-medium text-bmq-ivory/50 hover:text-bmq-ivory transition-colors group">
              CONOCER LAS COBERTURAS
              <ArrowRight size={14} className="ml-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>

        </div>
      </section>

      <BmqNetworkCarousel />

      {/* 12. CONTACTO / CTA FINAL (NEGRO) */}
      <section className="py-24 lg:py-32 bg-bmq-black text-bmq-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-center flex flex-col items-center"
          >
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.2] mb-8">
              PROTEGER UNA PRÁCTICA PROFESIONAL<br className="hidden md:block" /> EMPIEZA POR ENTENDER SUS RIESGOS.
            </h2>
            <p className="text-[17px] md:text-[20px] text-bmq-ivory/70 font-light leading-relaxed mb-16 max-w-2xl">
              Conozca el Sistema BMQ y encuentre el nivel de protección adecuado
              para cada paciente y procedimiento.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-6 w-full mb-16">
              <Link to="/solicitar-cobertura" className="inline-flex items-center justify-center bg-bmq-ivory text-bmq-black px-8 py-5 text-xs tracking-[0.2em] font-medium transition-all duration-500 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group w-full sm:w-auto min-w-[240px]">
                SOLICITAR COBERTURA
                <ArrowRight size={14} className="ml-4 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
              <Link to="/coberturas" className="inline-flex items-center justify-center border border-white/20 text-bmq-ivory px-8 py-5 text-xs tracking-[0.2em] font-medium transition-all duration-500 hover:border-bmq-ivory group w-full sm:w-auto min-w-[240px]">
                CONOCER LAS COBERTURAS
                <ArrowRight size={14} className="ml-4 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </div>

            <div className="border-t border-white/10 pt-16 flex flex-col items-center">
              <span className="text-[10px] tracking-[0.2em] uppercase text-bmq-ivory/40 block mb-6">ESCRÍBANOS POR WHATSAPP</span>
              <a href="https://wa.me/573016546268?text=Hola,%20estaba%20visitando%20su%20web.%20Estoy%20interesado%20en%20adquirir%20sus%20servicios" target="_blank" rel="noopener noreferrer" className="font-serif text-2xl text-bmq-ivory hover:text-bmq-blue transition-colors flex items-center mb-6">
                <MessageCircle size={18} className="mr-4 text-bmq-blue" />
                +57 301 654 6268
              </a>
              <a href="https://wa.me/573016546268?text=Hola,%20estaba%20visitando%20su%20web.%20Estoy%20interesado%20en%20adquirir%20sus%20servicios" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[10px] tracking-[0.2em] font-medium text-bmq-ivory/40 hover:text-bmq-ivory transition-colors group">
                HABLAR CON UN ESPECIALISTA
                <ArrowRight size={12} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>
            
          </motion.div>
        </div>
      </section>

    </div>
  );
}
