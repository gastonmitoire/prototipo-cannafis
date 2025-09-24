import React from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
  containerVariants: any;
  useInView: any;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  sectionRef,
  containerVariants,
  useInView,
}) => {
  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="snap-center h-screen flex items-center justify-center bg-gradient-to-br from-cyan-100 via-blue-50 to-green-100 relative overflow-hidden"
    >
      {/* Animated gradient blobs */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-cyan-300/40 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-200/40 rounded-full blur-2xl animate-pulse z-0" />
      {/* Futuristic lines overlay eliminado para fondo limpio */}
      {/* Glassmorphism card with animated logo and text */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={useInView(sectionRef, { amount: 0.4 }) ? "show" : "hidden"}
        className="flex flex-col items-center justify-center w-full z-10"
      >
        <motion.h1
          className="text-7xl md:text-8xl font-extrabold tracking-tight futurist drop-shadow-neon-cyan text-center antialiased subpixel-antialiased"
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 80 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.7,
                delay: 0.3,
                type: "spring",
                stiffness: 60,
              },
            },
          }}
          style={{
            textShadow:
              "0 0 32px #67e8f9, 0 2px 8px #38bdf8, 0 0 8px #4ade80, 0 0 2px #fff",
          }}
        >
          CannaFIS
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-6 text-cyan-900 text-center drop-shadow-neon-cyan"
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -80 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.7,
                delay: 0.5,
                type: "spring",
                stiffness: 60,
              },
            },
          }}
          style={{
            textShadow: "0 0 16px #a5f3fc, 0 2px 8px #38bdf8, 0 0 2px #fff",
          }}
        >
          Pioneros en cannabis medicinal farmacéutico en Argentina
        </motion.h2>
        <motion.div
          className="bg-white/60 rounded-2xl px-8 py-4 shadow-2xl backdrop-blur-xl border border-cyan-200/40 mt-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <span className="text-lg font-medium text-cyan-900">
            Innovación, calidad y trazabilidad en cada paso.
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
