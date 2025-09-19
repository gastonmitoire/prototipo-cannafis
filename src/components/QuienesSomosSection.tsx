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
    className="snap-center h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-100 text-blue-900 px-4"
  >
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={useInView(sectionRef, { amount: 0.4 }) ? "show" : "hidden"}
      className="flex flex-col items-center w-full z-10"
    >
      <motion.div
        variants={fadeUp}
        className="bg-white/80 rounded-2xl shadow-xl p-10 flex-1 border border-green-200 flex flex-col justify-center"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-bold mb-4 text-green-700 text-left"
        >
          Quiénes somos
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-lg text-blue-900/80 text-left"
        >
          CannaFIS es una empresa de capital nacional que combina innovación
          biotecnológica, excelencia en proceso industrial y cumplimiento
          normativo riguroso.
          <br />
          Nacimos para abastecer a laboratorios, farmacias magistrales e
          instituciones de salud con cannabis medicinal de calidad farmacéutica.
          <br />
          Nuestro compromiso: ofrecer productos estandarizados, seguros y
          legales, que aporten valor real a tratamientos terapéuticos en
          mercados regulados.
        </motion.p>
      </motion.div>
    </motion.div>
  </section>
);

export default QuienesSomosSection;
