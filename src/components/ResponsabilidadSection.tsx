import React from "react";
import { motion } from "framer-motion";
import { ContactoStepper } from "./ui/stepper";
import { Heading } from "./ui/heading";
interface ResponsabilidadSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
  containerVariants: any;
  fadeUp: any;
  useInView: any;
}

const textoColaboramos =
  "Colaboramos con instituciones de bien público enfocadas en investigación sobre las propiedades benéficas del cannabis medicinal y fundaciones de concientización y apoyo al consumo problemático.";
const contactInfoData = [
  "Ruta Nacional 36, Colonia Elisa, Chaco – Argentina",
  "+54 9 362 4758114",
  "comercialcannafis@gmail.com",
  "Instagram: @cannafis_",
];

const Contacto = ({ inView }: { inView: boolean }) => {
  const ContactInfoText = ({ children }: { children: React.ReactNode }) => (
    <motion.p
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{
        duration: 0.32,
        delay: 0.38,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.p>
  );

  return (
    <div className="mt-8 text-white/80 self-end text-right">
      <Heading>Contacto</Heading>

      <div className="text-sm md:text-base">
        {contactInfoData.map((info, index) => (
          <ContactInfoText key={index}>{info}</ContactInfoText>
        ))}
      </div>
    </div>
  );
};

/* large input stepper with 3 steps (name, email, comment) and a submit button */

const ResponsabilidadSection: React.FC<ResponsabilidadSectionProps> = ({
  sectionRef,
  // containerVariants,
  useInView,
}) => {
  const inView = useInView(sectionRef, { amount: 0.4 });
  const palabras = textoColaboramos.split(" ");
  return (
    <section
      id="responsabilidad"
      ref={sectionRef}
      className="bg-gradient-to-b from-slate-900 to-slate-900/80 px-4"
    >
      <div className="container mx-auto h-screen grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div className="flex flex-col items-end w-full z-10">
          <Heading expand variant="left">
            Responsabilidad Social
          </Heading>
          <p className="max-w-xl text-3xl text-right font-thin text-white/90 py-10">
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
        </div>
        <div className="flex flex-col justify-end h-2/3 w-full z-10">
          <div className="max-w-sm flex justify-end w-full self-end">
            <ContactoStepper inView={inView} />
          </div>
          <Contacto inView={inView} />
        </div>
      </div>
    </section>
  );
};

export default ResponsabilidadSection;
