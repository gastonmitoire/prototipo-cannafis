import React from "react";
import { motion } from "framer-motion";
interface PresentacionSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
  containerVariants: any;
  fadeUp: any;
  useInView: any;
}

const PresentacionSection: React.FC<PresentacionSectionProps> = ({
  sectionRef,
  containerVariants,
  fadeUp,
  useInView,
}) => (
  <section
    id="presentacion"
    ref={sectionRef}
    className="snap-center h-screen flex items-center justify-center bg-gradient-to-r from-blue-100/80 to-green-100/80 text-blue-900 px-4 relative overflow-hidden"
  >
    {/* Divider decorativo superior */}
    <svg
      className="absolute -top-1 left-0 w-full h-24 z-0"
      viewBox="0 0 1440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#e0f2fe"
        fillOpacity="0.7"
        d="M0,64L48,80C96,96,192,128,288,133.3C384,139,480,117,576,117.3C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      />
    </svg>
    {/* Blob decorativo derecho */}
    <div className="absolute right-0 top-1/3 w-72 h-72 bg-blue-200/40 rounded-full blur-2xl z-0" />
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={useInView(sectionRef, { amount: 0.4 }) ? "show" : "hidden"}
      className="flex flex-row items-center justify-center w-full z-10 gap-10 max-w-5xl"
    >
      <motion.img
        variants={fadeUp}
        src="/vite.svg"
        alt="ANMAT"
        className="w-40 h-40 object-contain hidden md:block drop-shadow-xl"
      />
      <motion.div
        variants={fadeUp}
        className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl p-10 flex-1 border border-blue-100 flex flex-col justify-center"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-bold mb-4 text-blue-700 text-left"
        >
          La primera empresa argentina habilitada por ANMAT
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-lg text-blue-900/80 text-left"
        >
          Para elaborar, importar y exportar Ingredientes Farmacéuticos Activos
          (IFA) a base de Cannabis sativa.
          <br />
          Con certificaciones internacionales, estándares farmacéuticos y
          trazabilidad total, llevamos el cannabis medicinal a toda Argentina y
          el mundo.
        </motion.p>
      </motion.div>
    </motion.div>
    {/* Divider decorativo inferior */}
    <svg
      className="absolute -bottom-1 left-0 w-full h-24 z-0"
      viewBox="0 0 1440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#e0f2fe"
        fillOpacity="0.7"
        d="M0,224L48,202.7C96,181,192,139,288,128C384,117,480,139,576,154.7C672,171,768,181,864,170.7C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </section>
);

export default PresentacionSection;
