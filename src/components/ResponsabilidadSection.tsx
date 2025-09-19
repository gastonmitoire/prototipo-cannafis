import React from "react";
import { motion } from "framer-motion";
interface ResponsabilidadSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
  containerVariants: any;
  fadeUp: any;
  useInView: any;
}

const ResponsabilidadSection: React.FC<ResponsabilidadSectionProps> = ({
  sectionRef,
  containerVariants,
  fadeUp,
  useInView,
}) => (
  <section
    id="responsabilidad"
    ref={sectionRef}
    className="snap-center h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-green-50 text-blue-900 px-4"
  >
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={useInView(sectionRef, { amount: 0.4 }) ? "show" : "hidden"}
      className="flex flex-col items-center w-full z-10"
    >
      <motion.div
        variants={fadeUp}
        className="bg-white/90 rounded-2xl shadow-xl p-10 max-w-2xl border border-blue-100"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-bold mb-4 text-blue-700 text-center"
        >
          Responsabilidad Social
        </motion.h2>
        <motion.p variants={fadeUp} className="text-center text-blue-900/80">
          Colaboramos con instituciones de bien público enfocadas en
          investigación sobre las propiedades benéficas del cannabis medicinal y
          fundaciones de concientización y apoyo al consumo problemático.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-8 text-center">
          <h3 className="text-xl font-bold mb-2">Contacto</h3>
          <p>Ruta Nacional 36, Colonia Elisa, Chaco – Argentina</p>
          <p>+54 9 362 4758114</p>
          <p>comercialcannafis@gmail.com</p>
          <p>Instagram: @cannafis_</p>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default ResponsabilidadSection;
