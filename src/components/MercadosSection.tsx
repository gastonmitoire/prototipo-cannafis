import React, { useRef } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView as useInViewLib } from "framer-motion";
import { Heading } from "./ui/heading";
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
    <motion.div ref={ref} className="relative py-3 text-white/90">
      <Heading
        expand
        className="text-right mt-3"
        animation={{
          direction: "right",
          transition: { duration: 1.02, delay: 0.33 },
        }}
      >
        {text}
      </Heading>
      <motion.span
        initial={{ width: 0 }}
        animate={
          inView
            ? { width: "100%", transition: { duration: 1.22, delay: 0.13 } }
            : { width: 0 }
        }
        className="absolute left-0 top-0 h-0.5 bg-white/20 rounded-full"
        style={{ borderRadius: 2, height: 1.5, background: "#ffffff33" }}
      />
    </motion.div>
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
          <Heading
            animation={{
              direction: "bottom",
              transition: { duration: 1.32, delay: 0.13 },
            }}
          >
            Mercados y alianzas
          </Heading>
          <div className="max-w-6xl grid grid-rows-3 gap-3 mt-6">
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
