import React from "react";
import { motion } from "framer-motion";
interface MercadosSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
  fadeUp: any;
  useInView: any;
}

interface MercadosCardProps {
  text: string;
  fadeUp: any;
  inView: boolean;
}

const MercadosCard: React.FC<MercadosCardProps> = ({
  text,
  fadeUp,
  inView,
}) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    animate={inView ? "show" : "hidden"}
    className="bg-black/30 rounded-lg p-6 text-lg text-white/90 mb-4 shadow-lg"
  >
    {text}
  </motion.div>
);

const mercadosData = [
  "Distribución nacional a instituciones habilitadas.",
  "Exportación a mercados regulados con estándares internacionales.",
  "Acuerdos estratégicos con organizaciones del sector salud y biotecnología.",
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
        <div className="max-w-2xl">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="text-3xl font-bold mb-4 text-white/80 text-center uppercase"
          >
            Mercados y alianzas
          </motion.h2>
          <div className="flex flex-col gap-3 mt-6">
            {mercadosData.map((text) => (
              <MercadosCard
                key={text}
                text={text}
                fadeUp={fadeUp}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MercadosSection;
