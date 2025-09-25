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
  // fadeUp,
  useInView,
}) => (
  <section
    id="presentacion"
    ref={sectionRef}
    className="snap-center h-screen flex items-center justify-center bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-900/90 px-4 relative overflow-hidden"
  >
    {/* Divider decorativo superior */}
    {/* <svg
      className="absolute top-20 left-0 w-full h-24 z-0"
      viewBox="0 0 1440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#e0f2fe"
        fillOpacity="0.7"
        d="M0,64L48,80C96,96,192,128,288,133.3C384,139,480,117,576,117.3C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      />
    </svg> */}
    {/* Blob decorativo derecho */}
    <div className="absolute bg-gradient-to-b from-slate-900 w-full h-52 top-0" />
    <div className="absolute right-0 top-1/3 w-72 h-72 bg-blue-200/40 rounded-full blur-2xl z-0" />
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={useInView(sectionRef, { amount: 0.4 }) ? "show" : "hidden"}
      className="max-w-5xl"
    >
      <motion.div className="grid grid-cols-2">
        {/* Lado izquierdo: títulos, entran desde la derecha */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 80 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.7,
                delay: 0.2,
                type: "spring",
                stiffness: 60,
              },
            },
          }}
        >
          <motion.h2
            className="text-6xl font-bold mb-4 text-blue-400 text-right"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.3 },
              },
            }}
          >
            La primera empresa argentina
          </motion.h2>
          <motion.h2
            className="text-6xl font-bold mb-4 text-white/80 text-right"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.5 },
              },
            }}
          >
            habilitada por ANMAT
          </motion.h2>
        </motion.div>
        {/* Lado derecho: párrafos, entran desde la izquierda */}
        <motion.div
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
                delay: 0.4,
                type: "spring",
                stiffness: 60,
              },
            },
          }}
        >
          <motion.p
            className="text-2xl text-white/80 text-left p-5"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.5 },
              },
            }}
          >
            Para elaborar, importar y exportar Ingredientes Farmacéuticos
            Activos (IFA) a base de Cannabis sativa.
          </motion.p>
          <motion.p
            className="text-2xl text-white/80 text-left p-5"
            style={{ marginTop: "-1rem" }}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.9 },
              },
            }}
          >
            Con certificaciones internacionales, estándares farmacéuticos y
            trazabilidad total, llevamos el cannabis medicinal a toda Argentina
            y el mundo.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
    {/* Divider decorativo inferior */}
    {/* <svg
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
    </svg> */}
    <div className="absolute bg-gradient-to-t from-slate-900 w-full h-52 bottom-0" />
  </section>
);

export default PresentacionSection;
