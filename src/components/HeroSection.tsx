import React from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
  containerVariants: any;
  fadeUp: any;
  useInView: any;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  sectionRef,
  containerVariants,
  fadeUp,
  useInView,
}) => (
  <section
    id="inicio"
    ref={sectionRef}
    className="snap-center h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-400 to-green-300 text-white relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-[url('/public/vite.svg')] bg-no-repeat bg-right-bottom opacity-10 pointer-events-none" />
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={useInView(sectionRef, { amount: 0.4 }) ? "show" : "hidden"}
      className="flex flex-col items-center z-10"
    >
      <motion.div variants={fadeUp} className="mb-8 flex items-center gap-4">
        <img src="/vite.svg" alt="Logo" className="w-20 h-20 drop-shadow-xl" />
        <span className="text-6xl font-extrabold tracking-tight drop-shadow-lg">
          CannaFIS
        </span>
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className="text-2xl font-bold drop-shadow mb-6 text-white/90 text-center"
      >
        Pioneros en cannabis medicinal farmacéutico en Argentina
      </motion.h2>
      <motion.div
        variants={fadeUp}
        className="bg-white/10 rounded-xl px-8 py-4 shadow-lg backdrop-blur-md border border-white/20"
      >
        <span className="text-lg font-medium text-white/90">
          Innovación, calidad y trazabilidad en cada paso.
        </span>
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
