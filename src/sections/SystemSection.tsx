import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'PREVENIR', desc: 'Preparación y orientación preventiva.' },
  { num: '02', title: 'DOCUMENTAR', desc: 'Historia clínica, consentimiento informado y documentación.' },
  { num: '03', title: 'ACOMPAÑAR', desc: 'Acompañamiento jurídico especializado.' },
  { num: '04', title: 'DEFENDER', desc: 'Representación y defensa cuando corresponda.' },
  { num: '05', title: 'RESPALDAR', desc: 'Componente económico conforme a la cobertura contratada.' },
];

export function SystemSection() {
  return (
    <section id="sistema" className="py-24 lg:py-40 bg-bmq-charcoal relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 md:mb-32 max-w-4xl"
        >
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-bmq-ivory/50 block mb-6">El Sistema BMQ</span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-bmq-ivory">Un sistema de protección integral.</h2>
        </motion.div>

        {/* Desktop Layout (Horizontal) */}
        <div className="hidden lg:grid grid-cols-5 gap-8 border-t border-white/10 pt-20">
          {steps.map((step, index) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="flex flex-col relative group"
            >
              <div className="absolute -top-[81px] left-0 w-full h-[1px] bg-bmq-blue/0 group-hover:bg-bmq-blue transition-colors duration-500"></div>
              <span className="font-serif text-[24px] md:text-[28px] text-bmq-ivory/30 mb-8 group-hover:text-bmq-gold transition-colors duration-300">{step.num}</span>
              <h3 className="text-[16px] md:text-[18px] tracking-[0.15em] font-medium mb-6 text-bmq-ivory">{step.title}</h3>
              <p className="text-[16px] md:text-[18px] text-bmq-ivory/80 font-normal leading-[1.6] pr-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet Layout (Vertical) */}
        <div className="lg:hidden flex flex-col space-y-16 border-l border-white/10 pl-8 ml-2">
          {steps.map((step, index) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -left-[37px] top-2 w-2 h-2 rounded-full bg-bmq-charcoal border border-white/30"></div>
              <span className="font-serif text-[22px] md:text-[24px] text-bmq-ivory/40 mb-4 block">{step.num}</span>
              <h3 className="text-[16px] md:text-[18px] tracking-[0.15em] font-medium mb-4 text-bmq-ivory">{step.title}</h3>
              <p className="text-[16px] md:text-[18px] text-bmq-ivory/80 font-normal leading-[1.6]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
