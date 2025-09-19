import React from "react";
import { motion } from "framer-motion";
interface CertificacionesSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
  containerVariants: any;
  fadeUp: any;
  useInView: any;
}

const CertificacionesSection: React.FC<CertificacionesSectionProps> = ({
  sectionRef,
  containerVariants,
  fadeUp,
  useInView,
}) => (
  <section
    id="certificaciones"
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
          Certificaciones
        </motion.h2>
        <motion.ul
          variants={containerVariants}
          className="text-left list-disc list-inside text-blue-900/90 space-y-2"
        >
          <motion.li variants={fadeUp}>
            Certificación GMP (Buenas Prácticas de Manufactura)
          </motion.li>
          <motion.li variants={fadeUp}>
            Certificación ISO 9001:2015 en Sistema de Gestión de Calidad
          </motion.li>
          <motion.li variants={fadeUp}>
            Certificación ISO 22000 en Seguridad Alimentaria
          </motion.li>
          <motion.li variants={fadeUp}>
            Registro en ANMAT como Productor de IFA de Cannabis
          </motion.li>
        </motion.ul>
        <motion.p
          variants={fadeUp}
          className="text-center mt-4 text-blue-900/80"
        >
          Comprometidos con los más altos estándares de calidad y seguridad.
        </motion.p>
      </motion.div>
    </motion.div>
  </section>
);

export default CertificacionesSection;
