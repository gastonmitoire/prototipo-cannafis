import React from "react";
import { motion } from "framer-motion";
interface ResponsabilidadSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
  containerVariants: any;
  fadeUp: any;
  useInView: any;
}

const textoColaboramos =
  "Colaboramos con instituciones de bien público enfocadas en investigación sobre las propiedades benéficas del cannabis medicinal y fundaciones de concientización y apoyo al consumo problemático.";

const ResponsabilidadSection: React.FC<ResponsabilidadSectionProps> = ({
  sectionRef,
  // containerVariants,
  fadeUp,
  useInView,
}) => {
  const inView = useInView(sectionRef, { amount: 0.4 });
  const palabras = textoColaboramos.split(" ");
  return (
    <section
      id="responsabilidad"
      ref={sectionRef}
      className="bg-gradient-to-b from-slate-900 to-slate-900/80 text-blue-900 px-4"
    >
      <div className="container mx-auto h-screen flex items-center justify-center">
        <div className="flex flex-col w-full z-10">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="text-3xl font-bold mb-4 text-white/80"
          >
            Responsabilidad Social
          </motion.h2>
          <p className="max-w-xl text-2xl font-thin text-white/90 py-10">
            {palabras.map((palabra, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                transition={{
                  duration: 0.32,
                  delay: 0.08 + i * 0.045,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {palabra}
                {"\u00A0"}
              </motion.span>
            ))}
          </p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="mt-8 text-white/80 self-end"
          >
            <h3 className="text-xl font-bold mb-2">Contacto</h3>
            <p>Ruta Nacional 36, Colonia Elisa, Chaco – Argentina</p>
            <p>+54 9 362 4758114</p>
            <p>comercialcannafis@gmail.com</p>
            <p>Instagram: @cannafis_</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResponsabilidadSection;
