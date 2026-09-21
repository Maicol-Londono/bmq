import { motion } from 'framer-motion';

const dimensions = [
  { 
    num: '01', 
    title: 'CIVIL', 
    subtitle: 'RESPONSABILIDAD PATRIMONIAL',
    desc: 'Reclamaciones relacionadas con los daños y perjuicios que un paciente pueda atribuir a la prestación del servicio médico.',
    indicator: 'HASTA 10 AÑOS*',
    note: 'El término depende de la naturaleza de la acción y de las circunstancias del caso.'
  },
  { 
    num: '02', 
    title: 'PENAL', 
    subtitle: 'RESPONSABILIDAD PENAL',
    desc: 'Una actuación médica puede dar lugar a una investigación penal cuando se atribuya la comisión de una conducta punible.',
    indicator: 'HASTA 20 AÑOS*',
    note: 'El término de prescripción depende del delito y de la pena máxima prevista por la ley. No todos los delitos tienen el mismo término.'
  },
  { 
    num: '03', 
    title: 'DISCIPLINARIO', 
    subtitle: 'RESPONSABILIDAD ÉTICO-DISCIPLINARIA',
    desc: 'Actuaciones relacionadas con el ejercicio profesional y el cumplimiento de los deberes éticos de la profesión médica.',
  },
  { 
    num: '04', 
    title: 'ADMINISTRATIVO', 
    subtitle: 'ACTUACIONES ANTE AUTORIDADES',
    desc: 'Procesos y actuaciones administrativas relacionados con la prestación de servicios de salud y las obligaciones aplicables al profesional o institución.',
  }
];

const timelineSteps = [
  'PROCEDIMIENTO',
  'INCONFORMIDAD',
  'RECLAMACIÓN',
  'ACTUACIÓN JURÍDICA',
  'PROCESO',
  'DEFENSA'
];

const bmqPillars = [
  'PREVENIR',
  'DOCUMENTAR',
  'ACOMPAÑAR',
  'DEFENDER',
  'RESPALDAR'
];

export function RiskSection() {
  return (
    <section id="riesgo" className="py-20 lg:py-32 bg-bmq-ivory text-bmq-black relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Intro */}
        <div className="max-w-5xl mx-auto mb-20 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-4 mb-12"
          >
            <span className="h-[1px] w-8 bg-bmq-black/20"></span>
            <span className="text-[0.65rem] tracking-[0.3em] uppercase text-bmq-black/50 font-medium">El Riesgo Profesional</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.1] mb-12 tracking-wide"
          >
            UNA DECISIÓN CLÍNICA <br className="hidden md:block" />
            PUEDE TENER CONSECUENCIAS <br className="hidden md:block" />
            <span className="italic text-bmq-charcoal/80">MUCHO MÁS ALLÁ DEL QUIRÓFANO.</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-[18px] md:text-[20px] text-bmq-charcoal/90 font-normal leading-[1.6] max-w-3xl">
              Cada procedimiento implica decisiones médicas, documentación, comunicación con el paciente y responsabilidades que continúan incluso después de terminada la cirugía.
            </p>
          </motion.div>
        </div>

        {/* Dimension Rows */}
        <div className="max-w-5xl mx-auto mb-32 border-t border-bmq-black/10">
          {dimensions.map((dim, index) => (
            <motion.div 
              key={dim.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row py-12 md:py-16 border-b border-bmq-black/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-bmq-blue/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-in-out z-0 pointer-events-none"></div>
              
              <div className="md:w-2/5 flex flex-col mb-8 md:mb-0 relative z-10 md:pr-8">
                <div className="flex items-center mb-4">
                  <span className="text-[13px] md:text-[14px] text-bmq-charcoal/40 font-serif w-8 mr-4 group-hover:text-bmq-blue transition-colors duration-300">{dim.num}</span>
                  <span className="h-[1px] w-6 bg-bmq-black/10 mr-6 group-hover:w-12 group-hover:bg-bmq-blue transition-all duration-500"></span>
                  <h3 className="text-[16px] md:text-[18px] tracking-[0.2em] font-medium text-bmq-black uppercase group-hover:translate-x-2 transition-transform duration-500">
                    {dim.title}
                  </h3>
                </div>
                <span className="text-[10px] tracking-widest text-bmq-charcoal/50 uppercase md:ml-[5.5rem] block">{dim.subtitle}</span>
              </div>
              
              <div className="md:w-3/5 relative z-10 flex flex-col justify-center">
                <p className="text-[17px] md:text-[19px] text-bmq-charcoal/80 font-normal leading-relaxed group-hover:text-bmq-black transition-colors duration-300 mb-6">
                  {dim.desc}
                </p>
                {dim.indicator && (
                  <div className="bg-bmq-charcoal/5 border border-bmq-black/10 p-6 self-start">
                    <span className="block text-sm tracking-[0.2em] font-medium text-bmq-black mb-2">{dim.indicator}</span>
                    <p className="text-xs text-bmq-charcoal/60 leading-relaxed max-w-sm">{dim.note}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transición Editorial */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[0.65rem] tracking-[0.3em] uppercase text-bmq-black/50 font-medium block mb-8">
              EL RIESGO NO TERMINA EN EL QUIRÓFANO
            </span>
            <h3 className="font-serif text-3xl md:text-5xl text-bmq-black leading-[1.2] mb-10">
              Una decisión médica puede generar <br className="hidden md:block"/> consecuencias jurídicas años después.
            </h3>
            <p className="text-[17px] md:text-[19px] text-bmq-charcoal/80 font-normal leading-relaxed max-w-3xl mx-auto">
              Una inconformidad del paciente puede convertirse en una reclamación y,
              dependiendo del caso, dar lugar a actuaciones civiles, penales,
              disciplinarias o administrativas.
            </p>
            <p className="text-[17px] md:text-[19px] text-bmq-charcoal/80 font-normal leading-relaxed max-w-3xl mx-auto mt-6">
              Por eso, la protección no debe comenzar cuando llega una demanda. Debe
              existir desde antes del procedimiento y permanecer durante el período de
              riesgo jurídico correspondiente.
            </p>
          </motion.div>
        </div>

        {/* Línea de tiempo / Riesgo */}
        <div className="max-w-5xl mx-auto mb-40 relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-bmq-black/10 hidden md:block -translate-y-1/2 z-0"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 space-y-12 md:space-y-0">
            {timelineSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-row md:flex-col items-center group relative w-full md:w-auto"
              >
                {/* Mobile vertical line connector */}
                {idx !== timelineSteps.length - 1 && (
                  <div className="absolute left-3 top-8 bottom-[-3rem] w-[1px] bg-bmq-black/10 md:hidden z-0"></div>
                )}
                
                <div className="w-6 h-6 rounded-full bg-bmq-ivory border border-bmq-black/20 flex items-center justify-center mr-6 md:mr-0 md:mb-6 group-hover:border-bmq-blue group-hover:scale-110 transition-all duration-500 z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-bmq-black/40 group-hover:bg-bmq-blue transition-colors duration-500"></div>
                </div>
                
                <span className="text-[10px] md:text-[11px] tracking-[0.2em] font-medium text-bmq-black/60 uppercase group-hover:text-bmq-black transition-colors duration-300">
                  {step}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cierre de alto impacto */}
        <div className="max-w-4xl mx-auto text-center border-t border-bmq-black/10 pt-32 pb-16">
          <motion.h3 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.1] text-bmq-black mb-8"
          >
            "EL PROBLEMA NO ES SOLO <br className="hidden md:block"/> QUE TE DEMANDEN."
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[13px] tracking-[0.3em] uppercase font-medium text-bmq-blue mb-20"
          >
            ES TODO LO QUE PUEDE OCURRIR ANTES, DURANTE Y DESPUÉS.
          </motion.p>

          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 md:gap-x-12">
            {bmqPillars.map((pillar, idx) => (
              <motion.div 
                key={pillar}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + (idx * 0.1) }}
                className="flex items-center"
              >
                <span className="text-[11px] md:text-[12px] tracking-[0.2em] font-medium text-bmq-charcoal/80">
                  {pillar}
                </span>
                {idx !== bmqPillars.length - 1 && (
                  <span className="ml-6 md:ml-12 text-bmq-gold/50 font-serif hidden sm:inline">+</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
