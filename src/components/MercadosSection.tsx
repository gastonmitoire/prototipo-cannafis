import React, { useRef } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView as useInViewLib } from "framer-motion";
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

const MercadosCard: React.FC<MercadosCardProps> = ({ text, fadeUp, icon }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInViewLib(ref, { amount: 0.5, once: false });
  return (
    <div
      ref={ref}
      className="bg-black/30 rounded-lg p-6 text-xl text-white/90 mb-4 shadow-lg flex flex-col items-center"
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
          className="mb-2 text-4xl drop-shadow"
        >
          {icon}
        </motion.span>
      )}
      <motion.span
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
        transition={{ duration: 0.48, delay: 0.13, ease: [0.22, 1, 0.36, 1] }}
        className="block text-center"
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
  useInView,
}) => {
  const inView = useInView(sectionRef, { amount: 0.4 });
  return (
    <section
      id="mercados"
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-900/50 to-slate-900/70 px-4"
    >
      <div className="absolute bg-gradient-to-b from-slate-900 w-full h-52 top-0" />
      <div className="flex flex-col items-center w-full z-10">
        <div className="w-full">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="text-3xl font-bold mb-4 text-white/80 text-center uppercase"
          >
            Mercados y alianzas
          </motion.h2>
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
      <div className="absolute bg-gradient-to-t from-slate-900 w-full h-52 bottom-0" />
    </section>
  );
};

export default MercadosSection;
