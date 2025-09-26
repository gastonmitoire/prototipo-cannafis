import React, { useRef } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView as useInViewLib } from "framer-motion";
import Title from "./ui/title";
interface MercadosSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
  fadeUp: any;
  useInView: any;
}
type MercadosCardProps = {
  text: string;
  fadeUp: any;
  icon?: ReactNode;
};

const MercadosCard: React.FC<MercadosCardProps> = ({ text, icon }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInViewLib(ref, { amount: 0.5, once: false });
  return (
    <div
      ref={ref}
      className="bg-black/30 backdrop-blur-xl rounded-lg px-6 py-32 text-white/90 mb-4 shadow-lg flex flex-col items-center"
    >
      {icon && (
        <motion.span
          initial={{ opacity: 0, y: 32, scale: 0.7 }}
          animate={
            inView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 32, scale: 0.7 }
          }
          transition={{
            type: "spring",
            stiffness: 340,
            damping: 18,
            mass: 0.7,
            delay: 0.05,
          }}
          className="mb-5 text-5xl drop-shadow"
        >
          {icon}
        </motion.span>
      )}
      <motion.span
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
        transition={{ duration: 0.48, delay: 0.13, ease: [0.22, 1, 0.36, 1] }}
        className="block text-center text-3xl font-thin"
      >
        {text}
      </motion.span>
    </div>
  );
};

const mercadosData = [
  {
    text: "Distribución nacional a instituciones habilitadas.",
    icon: "🏥",
  },
  {
    text: "Exportación a mercados regulados con estándares internacionales.",
    icon: "🌍",
  },
  {
    text: "Acuerdos estratégicos con organizaciones del sector salud y biotecnología.",
    icon: "🤝",
  },
];

const MercadosSection: React.FC<MercadosSectionProps> = ({
  sectionRef,
  fadeUp,
}) => {
  return (
    <section
      id="mercados"
      ref={sectionRef}
      className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-900/30 via-blue-950/70 to-slate-900/70 border-y border-blue-900/40 px-4"
    >
      <div className="flex flex-col items-center w-full z-10">
        <div className="container w-full">
          <Title>Mercados y alianzas</Title>
          <div className="grid grid-cols-3 gap-3 mt-6">
            {mercadosData.map((item, key) => (
              <MercadosCard
                key={key}
                text={item.text}
                fadeUp={fadeUp}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MercadosSection;
