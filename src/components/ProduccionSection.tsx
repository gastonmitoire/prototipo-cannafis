import React from "react";
import { motion } from "framer-motion";
interface ProduccionSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
  containerVariants: any;
  fadeUp: any;
  useInView: any;
}

const ProduccionSection: React.FC<ProduccionSectionProps> = ({
  sectionRef,
  containerVariants,
  fadeUp,
  useInView,
}) => (
  <section
    id="produccion"
    ref={sectionRef}
    className="snap-center h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-green-50 to-white text-blue-900 px-4"
  >
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={useInView(sectionRef, { amount: 0.4 }) ? "show" : "hidden"}
      className="flex flex-col items-center w-full z-10"
    >
      <motion.h2
        variants={fadeUp}
        className="text-3xl font-bold mb-8 text-blue-800 text-center"
      >
        Producción y calidad
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <motion.div
          variants={fadeUp}
          className="bg-white/90 rounded-xl shadow-lg p-6 border border-blue-100 flex flex-col items-center"
        >
          <span className="text-4xl mb-2">🌱</span>
          <span className="font-semibold text-blue-800 mb-1">
            Cultivo controlado
          </span>
          <span className="text-blue-900/80 text-center text-sm">
            Bajo condiciones óptimas y monitoreo constante.
          </span>
        </motion.div>
        <motion.div
          variants={fadeUp}
          className="bg-white/90 rounded-xl shadow-lg p-6 border border-blue-100 flex flex-col items-center"
        >
          <span className="text-4xl mb-2">💧</span>
          <span className="font-semibold text-blue-800 mb-1">
            Secado técnico
          </span>
          <span className="text-blue-900/80 text-center text-sm">
            Preservando la integridad de los principios activos.
          </span>
        </motion.div>
        <motion.div
          variants={fadeUp}
          className="bg-white/90 rounded-xl shadow-lg p-6 border border-blue-100 flex flex-col items-center"
        >
          <span className="text-4xl mb-2">🏷️</span>
          <span className="font-semibold text-blue-800 mb-1">
            Envasado GMP/BPF
          </span>
          <span className="text-blue-900/80 text-center text-sm">
            En origen, cumpliendo normas internacionales.
          </span>
        </motion.div>
        <motion.div
          variants={fadeUp}
          className="bg-white/90 rounded-xl shadow-lg p-6 border border-blue-100 flex flex-col items-center"
        >
          <span className="text-4xl mb-2">🧪</span>
          <span className="font-semibold text-blue-800 mb-1">
            Análisis de laboratorio
          </span>
          <span className="text-blue-900/80 text-center text-sm">
            Garantizando pureza y consistencia en cada lote.
          </span>
        </motion.div>
      </div>
      <motion.p
        variants={fadeUp}
        className="text-center mt-8 text-blue-900/80 max-w-2xl"
      >
        Todos los lotes cuentan con codificación y trazabilidad total,
        cumpliendo con los requisitos de las farmacopeas internacionales.
      </motion.p>
    </motion.div>
  </section>
);

export default ProduccionSection;
