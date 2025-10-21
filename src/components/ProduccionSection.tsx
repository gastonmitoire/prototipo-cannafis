import React from "react";
import { motion, useInView } from "framer-motion";
import { Heading } from "./ui/heading";
import { Card } from "./ui/card";

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
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      className="relative aspect-[3/2] lg:aspect-[2/1] p-6 flex flex-col items-center justify-center text-center rounded-lg overflow-hidden backdrop-blur-md bg-black/30 shadow-md shadow-accent/10 group z-20"
    >
      {/* Borde animado */}
      <div className="absolute inset-0 border-[2px] border-transparent border-gradient-motion pointer-events-none" />

      {/* Contenido */}
      <div className="z-10">
        <div className="text-5xl mb-4 group-hover:hidden transition-all">
          {icon}
        </div>
        <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-white group-hover:hidden transition-all">
          {title}
        </h3>
        <p className="text-lg tracking-wide text-white/80 lg:hidden lg:group-hover:block transition-all">
          {description}
        </p>
      </div>

      {/* Estilos del borde animado */}
      <style>{`
        @property --a {
          syntax: "<angle>";
          inherits: true;
          initial-value: 0deg;
        }

        @keyframes spin-border {
          from { --a: 0deg; }
          to { --a: 360deg; }
        }

        .border-gradient-motion {
          border-image: conic-gradient(from var(--a), #1e4990, #05d16e, #001f3e, #1e4990) 1;
          opacity: 0.4;
          transition: opacity 0.4s ease-in-out;
          mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }

        /* Al hacer hover sobre la tarjeta */
        .group:hover .border-gradient-motion {
          animation: spin-border 4s linear infinite;
          opacity: 1;
        }
      `}</style>
    </motion.div>
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
    className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background/90 via-background/70 to-background/40 px-4 pt-20"
  >
    <div className="absolute bg-gradient-to-b from-background w-full h-52 top-0 z-0" />
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={useInView(sectionRef, { amount: 0.4 }) ? "show" : "hidden"}
      className="@container flex flex-col items-center max-w-xl w-full z-10"
    >
      {/* Título con animación solo cuando es visible */}
      {(() => {
        return (
          <Heading className="self-start text-blue-300 pb-10">
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
        className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full"
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
