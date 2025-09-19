import React from "react";
import { motion } from "framer-motion";
interface ProductosSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
  containerVariants: any;
  fadeUp: any;
  useInView: any;
}

const ProductosSection: React.FC<ProductosSectionProps> = ({
  sectionRef,
  containerVariants,
  fadeUp,
  useInView,
}) => (
  <section
    id="productos"
    ref={sectionRef}
    className="snap-center h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-green-50 to-white text-blue-900 px-4"
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
          Productos y formatos
        </motion.h2>
        <motion.ul
          variants={containerVariants}
          className="text-left list-disc list-inside text-blue-900/90 space-y-2"
        >
          <motion.li variants={fadeUp}>
            Frascos y bolsas de 20g, 40g, 100g y 500g
          </motion.li>
          <motion.li variants={fadeUp}>
            Presentaciones adaptables a requerimientos de cada laboratorio o
            institución
          </motion.li>
        </motion.ul>
        <motion.p
          variants={fadeUp}
          className="text-center mt-4 text-blue-900/80"
        >
          Canales: farmacias magistrales, laboratorios, instituciones de salud,
          exportación a mercados regulados, convenios con ONGs bajo Reprocann.
        </motion.p>
      </motion.div>
    </motion.div>
  </section>
);

export default ProductosSection;
