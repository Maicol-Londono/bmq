import { motion, useAnimationFrame, useReducedMotion } from 'framer-motion';
import { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export type BmqNetworkItem = {
  id: string;
  name: string;
  image: string;
  type: "professional" | "institution";
  imageFit?: "cover" | "contain";
};

// Mock data
export const mockNetworkItems: BmqNetworkItem[] = [
  {
    id: "prof-1",
    name: "Profesional 01",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
    type: "professional",
    imageFit: "cover"
  },
  {
    id: "inst-1",
    name: "Institución 01",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    type: "institution",
    imageFit: "cover"
  },
  {
    id: "prof-2",
    name: "Profesional 02",
    image: "https://images.unsplash.com/photo-1594824406940-2465f2420959?q=80&w=1938&auto=format&fit=crop",
    type: "professional",
    imageFit: "cover"
  },
  {
    id: "inst-2",
    name: "Institución 02",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2128&auto=format&fit=crop",
    type: "institution",
    imageFit: "cover"
  },
  {
    id: "prof-3",
    name: "Profesional 03",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop",
    type: "professional",
    imageFit: "cover"
  },
  {
    id: "inst-3",
    name: "Institución 03",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop",
    type: "institution",
    imageFit: "cover"
  }
];

export interface BmqNetworkCarouselProps {
  eyebrow?: string;
  title?: string;
  items?: BmqNetworkItem[];
}

export function BmqNetworkCarousel({ 
  eyebrow = "NUESTRA RED", 
  title = "Profesionales e instituciones que confían en BMQ", 
  items = mockNetworkItems 
}: BmqNetworkCarouselProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Animation state
  const x = useRef(0);
  const targetX = useRef(0);
  const isManual = useRef(false);

  useAnimationFrame((_time, delta) => {
    if (shouldReduceMotion) return;

    if (isManual.current) {
      // Manual smooth scroll interpolation
      const damping = 1 - Math.exp(-delta * 0.008);
      x.current += (targetX.current - x.current) * damping;
      
      // Snap to target if very close to finish manual interpolation
      if (Math.abs(targetX.current - x.current) < 0.1) {
        isManual.current = false;
        x.current = targetX.current;
      }
    } else if (!isHovered) {
      // Continuous auto-scroll: 1 loop (100 units) per 40 seconds
      x.current -= (delta / 1000) * 2.5; 
      targetX.current = x.current;
    }
    
    // Wrap between -100 and 0
    let wrapped = x.current % 100;
    if (wrapped > 0) {
      wrapped -= 100;
    }
    
    if (containerRef.current) {
      // The container has 3 sets. One set is 33.333% of the container width.
      containerRef.current.style.transform = `translateX(${wrapped / 3}%)`;
    }
  });

  const handleNext = () => {
    isManual.current = true;
    targetX.current -= (100 / items.length);
  };

  const handlePrev = () => {
    isManual.current = true;
    targetX.current += (100 / items.length);
  };

  // We duplicate the items 3 times to ensure a smooth continuous scroll.
  const displayItems = [...items, ...items, ...items];

  return (
    <section className="py-24 lg:py-32 bg-bmq-charcoal text-bmq-ivory border-y border-white/5 overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {eyebrow && (
            <span className="text-[0.65rem] tracking-[0.3em] uppercase text-bmq-ivory/50 block mb-6">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.2]">
              {title}
            </h2>
          )}
        </motion.div>
      </div>

      <div 
        className="w-full relative flex items-center group touch-pan-y"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Controles de navegación manual */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 z-10 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={handlePrev}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-bmq-black/80 border border-white/10 flex items-center justify-center text-bmq-ivory hover:text-bmq-blue hover:border-bmq-blue/30 transition-all backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bmq-blue focus-visible:opacity-100"
            aria-label="Anterior"
          >
            <ArrowLeft size={18} strokeWidth={1.5} />
          </button>
        </div>
        
        <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-10 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={handleNext}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-bmq-black/80 border border-white/10 flex items-center justify-center text-bmq-ivory hover:text-bmq-blue hover:border-bmq-blue/30 transition-all backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bmq-blue focus-visible:opacity-100"
            aria-label="Siguiente"
          >
            <ArrowRight size={18} strokeWidth={1.5} />
          </button>
        </div>

        <div 
          ref={containerRef}
          className={`flex whitespace-nowrap w-max will-change-transform ${shouldReduceMotion ? 'overflow-x-auto snap-x snap-mandatory' : ''}`}
        >
          {displayItems.map((item, idx) => (
            <div 
              key={`${item.id}-${idx}`}
              className={`inline-block w-[75vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] xl:w-[18vw] mx-3 sm:mx-4 border border-white/10 bg-bmq-black/20 rounded-md overflow-hidden flex-shrink-0 ${shouldReduceMotion ? 'snap-center' : ''}`}
            >
              <div className="aspect-[4/5] w-full relative bg-bmq-black/40">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className={`w-full h-full ${item.imageFit === 'contain' ? 'object-contain p-8' : 'object-cover'} filter brightness-90 contrast-125 grayscale-[30%] mix-blend-luminosity`}
                  loading="lazy"
                />
              </div>
              <div className="p-6 border-t border-white/5">
                <h4 className="text-[13px] md:text-[14px] font-medium text-bmq-ivory/90 font-sans tracking-wide">
                  {item.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
