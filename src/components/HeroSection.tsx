import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LogoDraw from "./LogoDraw";
import { RiScrollToBottomLine } from "react-icons/ri";

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
  const isInView = useInView(sectionRef, { amount: 0.4 });

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="min-h-screen flex flex-col gap-20 items-center justify-center bg-gradient-to-br from-blue-50 via-cyan-100 to-green-50 relative overflow-hidden"
    >
      {/* Soft pastel gradient blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-cyan-100/30 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-100/30 rounded-full blur-2xl animate-pulse z-0" />
      <div
        style={{
          backgroundImage: 'url("/images/backgrounds/cogollos.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
        }}
        className="absolute inset-0 opacity-10 z-0"
      />

      {/* Glassmorphism card with animated logo and text */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="flex flex-col items-center justify-center h-full w-full z-10"
      >
        <motion.div
          className="min-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* forzamos remount para resetear la animación */}
          {isInView && <LogoDraw key={isInView ? "logo-show" : "logo-hide"} />}
        </motion.div>

        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-6 text-accent text-center drop-shadow-neon-accent"
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

      <div className="grid place-items-end pb-5">
        <RiScrollToBottomLine size={24} className="text-accent" />
      </div>
    </section>
  );
};

export default HeroSection;
