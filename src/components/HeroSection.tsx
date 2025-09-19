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
      {/* Futuristic lines overlay */}
      <svg
        className="absolute left-0 top-0 w-full h-full opacity-10 z-0"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="linea"
            x1="0"
            y1="0"
            x2="1440"
            y2="900"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#67e8f9" />
            <stop offset="1" stopColor="#4ade80" />
          </linearGradient>
        </defs>
        <line
          x1="0"
          y1="0"
          x2="1440"
          y2="900"
          stroke="url(#linea)"
          strokeWidth="2"
        />
        <line
          x1="1440"
          y1="0"
          x2="0"
          y2="900"
          stroke="url(#linea)"
          strokeWidth="2"
        />
      </svg>
      {/* Glassmorphism card with animated logo and text */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={useInView(sectionRef, { amount: 0.4 }) ? "show" : "hidden"}
        className="flex flex-col items-center z-10"
      >
        <motion.div variants={fadeUp} className="mb-8 flex items-center gap-4">
          <motion.img
            src="/vite.svg"
            alt="Logo"
            className="w-24 h-24 drop-shadow-neon-cyan"
            initial={{ scale: 0.7, rotate: -10, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 10,
              delay: 0.2,
            }}
          />
          <motion.span
            className="text-7xl md:text-8xl font-extrabold tracking-tight futurist drop-shadow-neon-cyan"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, delay: 0.4 }}
            style={{
              textShadow:
                "0 0 32px #67e8f9, 0 2px 8px #38bdf8, 0 0 8px #4ade80, 0 0 2px #fff",
            }}
          >
            CannaFIS
          </motion.span>
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="text-2xl md:text-3xl font-bold mb-6 text-cyan-900 text-center drop-shadow-neon-cyan"
          style={{
            textShadow: "0 0 16px #a5f3fc, 0 2px 8px #38bdf8, 0 0 2px #fff",
          }}
        >
          Pioneros en cannabis medicinal farmacéutico en Argentina
        </motion.h2>
        <motion.div
          variants={fadeUp}
          className="bg-white/60 rounded-2xl px-8 py-4 shadow-2xl backdrop-blur-xl border border-cyan-200/40 mt-2"
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
