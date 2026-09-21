import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'CONOCE TU PROTECCIÓN' },
  { num: '02', title: 'ACTIVA TU COBERTURA' },
  { num: '03', title: 'CUENTA CON BMQ' },
  { num: '04', title: 'RECIBE ACOMPAÑAMIENTO' }
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-24 lg:py-40 bg-bmq-charcoal border-t border-white/5 relative overflow-hidden">
      
      {/* Background graphic */}
      <div className="absolute -right-64 -bottom-64 w-[800px] h-[800px] border-[1px] border-white/5 rounded-full pointer-events-none"></div>
      <div className="absolute -right-32 -bottom-32 w-[600px] h-[600px] border-[1px] border-white/5 rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-24">
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-bmq-ivory/50 block">Proceso</span>
        </div>

        <div className="max-w-4xl">
          {steps.map((step, index) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="flex flex-col md:flex-row items-start md:items-center py-10 md:py-16 border-b border-white/5 last:border-0 group"
            >
              <div className="flex items-center mb-4 md:mb-0 md:w-1/3">
                <span className="text-xs text-bmq-blue mr-8 font-serif group-hover:pl-4 transition-all duration-300">{step.num}</span>
                <div className="w-12 h-[1px] bg-white/10 group-hover:bg-bmq-blue group-hover:w-20 transition-all duration-500"></div>
              </div>
              <h3 className="text-sm md:text-base tracking-[0.2em] text-bmq-ivory md:w-2/3 uppercase group-hover:text-bmq-gold transition-colors duration-300">
                {step.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
