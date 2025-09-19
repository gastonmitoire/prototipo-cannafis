import React from "react";
import { motion } from "framer-motion";
interface MercadosSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
  containerVariants: any;
  fadeUp: any;
  useInView: any;
}

const MercadosSection: React.FC<MercadosSectionProps> = ({
  sectionRef,
  containerVariants,
  fadeUp,
  useInView,
}) => (
  <section
    id="mercados"
    ref={sectionRef}
    className="snap-center h-screen flex items-center justify-center bg-gradient-to-br from-white via-green-50 to-blue-100 text-blue-900 px-4"
  >
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={useInView(sectionRef, { amount: 0.4 }) ? "show" : "hidden"}
      className="flex flex-col items-center w-full z-10"
    >
      <motion.div
        variants={fadeUp}
        className="bg-white/90 rounded-2xl shadow-xl p-10 max-w-2xl border border-green-100"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-bold mb-4 text-green-700 text-center"
        >
          Mercados y alianzas
        </motion.h2>
        <motion.ul
          variants={containerVariants}
          className="text-left list-disc list-inside text-blue-900/90 space-y-2"
        >
          <motion.li variants={fadeUp}>
            Distribución nacional a instituciones habilitadas.
          </motion.li>
          <motion.li variants={fadeUp}>
            Exportación a mercados regulados con estándares internacionales.
          </motion.li>
          <motion.li variants={fadeUp}>
            Acuerdos estratégicos con organizaciones del sector salud y
            biotecnología.
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  </section>
);

export default MercadosSection;
