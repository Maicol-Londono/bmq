import { motion } from 'framer-motion';

const items = [
  { title: "ESPECIALIZACIÓN", desc: "Conocimiento profundo del entorno médico y sus marcos regulatorios." },
  { title: "PREVENCIÓN", desc: "Mitigación de riesgos desde la primera interacción clínica." },
  { title: "DOCUMENTACIÓN", desc: "Estructuración jurídica de protocolos y consentimientos." },
  { title: "ACOMPAÑAMIENTO", desc: "Asesoría continua durante el ejercicio profesional." },
  { title: "DEFENSA", desc: "Representación experta ante cualquier controversia." }
];

export function AuthoritySection() {
  return (
    <section id="nosotros" className="py-24 lg:py-48 bg-bmq-black relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mb-24 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-bmq-ivory"
          >
            Cuando tu práctica está en juego, <br className="hidden md:block" />
            <span className="italic text-bmq-gold">necesitas especialistas.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-t border-white/10 pt-6 group"
            >
              <h4 className="text-[16px] tracking-[0.15em] text-bmq-ivory/90 mb-4 uppercase group-hover:text-bmq-blue transition-colors duration-300">{item.title}</h4>
              <p className="text-[14px] md:text-[15px] text-bmq-ivory/60 font-light leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-8 w-8 h-[1px] bg-white/5 group-hover:w-full group-hover:bg-bmq-blue/50 transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
