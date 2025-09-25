import React from "react";
import { motion } from "framer-motion";
interface QuienesSomosSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
  containerVariants: any;
  fadeUp: any;
  useInView: any;
}

const QuienesSomosSection: React.FC<QuienesSomosSectionProps> = ({
  sectionRef,
  containerVariants,
  fadeUp,
  useInView,
}) => (
  <section
    id="quienes-somos"
    ref={sectionRef}
    className="h-screen bg-gradient-to-br from-green-50 via-white to-blue-100 text-blue-900 px-4"
    style={{
      backgroundImage:
        'url("https://www.transparenttextures.com/patterns/shattered.png")',
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    }}
  >
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)" }}
      animate={
        useInView(sectionRef, { amount: 0.4 })
          ? { opacity: 1, filter: "blur(0px)" }
          : { opacity: 0, filter: "blur(8px)" }
      }
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex flex-col max-w-2xl h-full px-20 pt-52 mx-auto bg-black/30 backdrop-blur-md"
    >
      <motion.h2
        initial={{ opacity: 0, y: -32 }}
        animate={
          useInView(sectionRef, { amount: 0.4 })
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: -32 }
        }
        transition={{
          duration: 0.6,
          delay: 0.18,
          type: "spring",
          stiffness: 60,
        }}
        className="text-4xl font-bold mb-8 text-white/30 uppercase"
      >
        Quiénes somos
      </motion.h2>
      <div className="space-y-4 [&>p]:text-xl [&>p]:text-blue-100/90 [&>p]:text-left [&>p]:font-thin">
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          animate={
            useInView(sectionRef, { amount: 0.4 })
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: -40 }
          }
          transition={{
            duration: 0.6,
            delay: 0.36,
            type: "spring",
            stiffness: 60,
          }}
        >
          CannaFIS es una empresa de capital nacional que combina innovación
          biotecnológica, excelencia en proceso industrial y cumplimiento
          normativo riguroso.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          animate={
            useInView(sectionRef, { amount: 0.4 })
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: -40 }
          }
          transition={{
            duration: 0.6,
            delay: 0.48,
            type: "spring",
            stiffness: 60,
          }}
        >
          Nacimos para abastecer a laboratorios, farmacias magistrales e
          instituciones de salud con cannabis medicinal de calidad farmacéutica.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          animate={
            useInView(sectionRef, { amount: 0.4 })
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: -40 }
          }
          transition={{
            duration: 0.6,
            delay: 0.6,
            type: "spring",
            stiffness: 60,
          }}
        >
          Nuestro compromiso: ofrecer productos estandarizados, seguros y
          legales, que aporten valor real a tratamientos terapéuticos en
          mercados regulados.
        </motion.p>
      </div>
    </motion.div>
  </section>
);

export default QuienesSomosSection;
