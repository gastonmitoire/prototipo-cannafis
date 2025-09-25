import React from "react";
import { motion, useInView } from "framer-motion";
interface ProduccionSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
  containerVariants: any;
  fadeUp: any;
  useInView: any;
}

// Card reutilizable para producción
interface ProduccionCardProps {
  icon: string;
  title: string;
  description: string;
  custom: number;
  variants: any;
}

const ProduccionCard: React.FC<ProduccionCardProps> = ({
  icon,
  title,
  description,
  custom,
  variants,
}) => (
  <motion.div
    variants={variants}
    custom={custom}
    className="bg-black/30 rounded-xl shadow-lg px-6 py-16 flex flex-col items-center z-10"
  >
    <span className="text-4xl mb-2">{icon}</span>
    <span className="font-semibold text-white/80 mb-1">{title}</span>
    <span className="text-white/50 text-center text-sm">{description}</span>
  </motion.div>
);

const produccionCards = [
  {
    icon: "🌱",
    title: "Cultivo controlado",
    description: "Bajo condiciones óptimas y monitoreo constante.",
  },
  {
    icon: "💧",
    title: "Secado técnico",
    description: "Preservando la integridad de los principios activos.",
  },
  {
    icon: "🏷️",
    title: "Envasado GMP/BPF",
    description: "En origen, cumpliendo normas internacionales.",
  },
  {
    icon: "🧪",
    title: "Análisis de laboratorio",
    description: "Garantizando pureza y consistencia en cada lote.",
  },
];

// Animaciones sutiles y profesionales
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.08,
    },
  },
};
const fadeUp = {
  hidden: { opacity: 0, scale: 0.7 },
  show: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 180,
      damping: 18,
      mass: 0.7,
      duration: 0.7,
      delay: i * 0.13,
      ease: "easeInOut",
    },
  }),
};
const fadeOpacity = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7 } },
};

const ProduccionSection: React.FC<ProduccionSectionProps> = ({
  sectionRef,
  useInView,
}) => (
  <section
    id="produccion"
    ref={sectionRef}
    className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900 px-4 pt-20"
  >
    <div className="absolute bg-gradient-to-b from-slate-900 w-full h-52 top-0 z-0" />
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={useInView(sectionRef, { amount: 0.4 }) ? "show" : "hidden"}
      className="flex flex-col items-center w-full z-10"
    >
      {/* Título con animación solo cuando es visible */}
      {(() => {
        const ref = React.useRef<HTMLHeadingElement>(null);
        const inView = useInView(ref, { amount: 1 });
        return (
          <motion.h2
            ref={ref}
            variants={fadeOpacity}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="text-4xl font-bold mb-8 text-white/30 uppercase"
          >
            Producción y calidad
          </motion.h2>
        );
      })()}
      {/* Cards con stagger: animan juntas cuando el contenedor es visible */}
      {/* Cards: se mantienen visibles mientras la sección está visible */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={useInView(sectionRef, { amount: 0.4 }) ? "show" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl"
      >
        {produccionCards.map((card, idx) => (
          <ProduccionCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            description={card.description}
            variants={fadeUp}
            custom={idx}
          />
        ))}
      </motion.div>
      {/* Párrafo con animación solo cuando es visible */}
      {(() => {
        const ref = React.useRef<HTMLParagraphElement>(null);
        const inView = useInView(ref, { amount: 1 });
        return (
          <motion.p
            ref={ref}
            variants={fadeOpacity}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="text-center text-2xl text-white/80 font-semibold mt-8 pt-24 pb-52 max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 -z-10 opacity-20"
              style={{
                backgroundImage:
                  'url("https://www.transparenttextures.com/patterns/shattered.png")',
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
              }}
            />
            Todos los lotes cuentan con codificación y trazabilidad total,
            cumpliendo con los requisitos de las farmacopeas internacionales.
          </motion.p>
        );
      })()}
    </motion.div>
  </section>
);

export default ProduccionSection;
