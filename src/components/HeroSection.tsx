import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import LogoDraw from "./LogoDraw";
import { RiScrollToBottomLine } from "react-icons/ri";
import { gsap } from "gsap";

interface HeroSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
  containerVariants: any;
  useInView: any;
}

export function ScrollIcon() {
  const iconRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (iconRef.current) {
      // animación de "sube y baja" infinita
      gsap.to(iconRef.current, {
        y: 10,
        repeat: -1, // infinito
        yoyo: true, // vuelve al punto original
        ease: "power1.inOut",
        duration: 0.8,
      });
    }
  }, []);

  return (
    <div className="grid place-items-end pb-5" ref={iconRef}>
      <RiScrollToBottomLine size={24} className="text-accent" />
    </div>
  );
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
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-cyan-100 to-green-50 relative overflow-hidden"
    >
      {/* Soft pastel gradient blobs (responsive sizes) */}
      <div className="absolute -top-20 -left-20 w-[220px] h-[220px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] xl:w-[900px] xl:h-[900px] bg-cyan-100/30 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-0 right-0 w-[180px] h-[180px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] xl:w-[800px] xl:h-[800px] bg-green-100/30 rounded-full blur-2xl animate-pulse z-0" />
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
        className="@container flex-1 flex flex-col items-center justify-center h-full w-full z-10"
      >
        {/* Logo area: centered, scales with viewport width but capped for huge screens */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 70,
          }}
          style={{ width: "clamp(290px, 35vw, 530px)" }}
        >
          {/* forzamos remount para resetear la animación */}
          {isInView && <LogoDraw key={isInView ? "logo-show" : "logo-hide"} />}
        </motion.div>

        <motion.h2
          className="font-bold my-6 text-accent text-center drop-shadow-neon-accent max-w-xs md:max-w-md lg:max-w-lg"
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
            fontSize: "clamp(1.125rem, 2.6vw, 2.25rem)",
            textShadow: "0 0 16px #a5f3fc, 0 2px 8px #38bdf8, 0 0 2px #fff",
          }}
        >
          Pioneros en cannabis medicinal farmacéutico en Argentina
        </motion.h2>
        <motion.div
          className="bg-white/60 rounded-2xl px-6 md:px-8 py-3 md:py-4 shadow-2xl backdrop-blur-xl border border-cyan-200/40 mt-2 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <span
            className="text-base md:text-lg font-medium text-cyan-900"
            style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.125rem)" }}
          >
            Innovación, calidad y trazabilidad en cada paso.
          </span>
        </motion.div>
      </motion.div>

      <ScrollIcon />
    </section>
  );
};

export default HeroSection;
