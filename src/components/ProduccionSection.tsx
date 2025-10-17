import React from "react";
import { motion, useInView } from "framer-motion";
import { Heading } from "./ui/heading";

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
  // custom,
  // variants,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  return (
    <div
      ref={ref}
      className="bg-black/30 rounded-xl shadow-lg px-6 py-28 flex flex-col items-center z-10"
    >
      <motion.span
        className="text-5xl mb-2"
        initial={{ opacity: 0, x: 16 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {icon}
      </motion.span>
      <Heading>{title}</Heading>
      <motion.span
        className="text-white/50 text-center"
        initial={{ opacity: 0, x: 10 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
        transition={{ duration: 0.5, delay: 0.38 }}
      >
        {description}
      </motion.span>
    </div>
  );
};

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
    className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-background/90 via-background/70 to-background/40 px-4 pt-20"
  >
    <div className="absolute bg-gradient-to-b from-background w-full h-52 top-0 z-0" />
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={useInView(sectionRef, { amount: 0.4 }) ? "show" : "hidden"}
      className="@container flex flex-col items-center w-full z-10"
    >
      {/* Título con animación solo cuando es visible */}
      {(() => {
        return (
          <Heading expand className="self-start text-white/80 pb-10">
            Producción y calidad
          </Heading>
        );
      })()}
      {/* Cards con stagger: animan juntas cuando el contenedor es visible */}
      {/* Cards: se mantienen visibles mientras la sección está visible */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={useInView(sectionRef, { amount: 0.4 }) ? "show" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full"
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
