// Datos de certificaciones y habilitaciones para cards reutilizables
export const certificaciones = [
  {
    imgSrc: "/images/certifications/anmat_cert.png",
    title: "ANMAT",
    subtitle: "Disposición N° DI-2025-5561",
    bg: "from-blue-100 via-blue-50 to-green-100",
  },
  {
    imgSrc: "/images/certifications/csc_cert.png",
    title: "Sustancia Controlada (CSC)",
    subtitle: "Cannabis psicoactivo habilitado",
    bg: "from-yellow-100 via-yellow-50 to-green-100",
  },
  {
    imgSrc: "/images/certifications/gacp_cert.png",
    title: "Control Unión",
    subtitle: "Cumplimiento GACP y calidad vegetal exportable",
    bg: "from-green-100 via-green-50 to-blue-100",
  },
  {
    imgSrc: "/images/certifications/gmp_cert.png",
    title: "GMP/BPF",
    subtitle: "Buenas Prácticas de Fabricación certificadas",
    bg: "from-green-100 via-green-50 to-blue-100",
  },
];
import React from "react";
import { motion, useInView } from "framer-motion";

import type { Variants } from "framer-motion";
import { Heading } from "./ui/heading";

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 32 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, duration: 0.7, bounce: 0.18 },
  },
  exit: { opacity: 0, scale: 0.95, y: 32, transition: { duration: 0.4 } },
};
const gridVariants = {
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

export function CertCard({
  imgSrc,
  title,
  subtitle,
  bg,
}: {
  imgSrc?: string;
  title: string;
  subtitle: string;
  bg: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  return (
    <motion.div
      ref={ref}
      className={`flex flex-col items-center justify-center aspect-square max-w-xs w-full mx-auto p-8 rounded-3xl shadow-2xl border border-blue-100 bg-gradient-to-br ${bg}`}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      exit="exit"
    >
      <motion.div
        className="mb-6 flex items-center justify-center w-full"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        exit={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.5, delay: 0.08 }}
      >
        {imgSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imgSrc}
            alt={title}
            className="w-20 h-20 object-contain"
            loading="lazy"
          />
        ) : (
          <div className="w-20 h-20 bg-blue-200/50 rounded-full flex items-center justify-center text-blue-900 font-bold">
            No Image
          </div>
        )}
      </motion.div>
      <div className="flex flex-col items-center text-center w-full">
        <motion.div
          className="font-bold text-2xl md:text-3xl text-blue-900 mb-2"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          {title}
        </motion.div>
        <motion.div
          className="text-base md:text-lg text-blue-900/70"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.28 }}
        >
          {subtitle}
        </motion.div>
      </div>
    </motion.div>
  );
}
interface CertificacionesSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
  containerVariants: any;
  fadeUp: any;
  useInView: any;
}

const CertificacionesSection: React.FC<CertificacionesSectionProps> = ({
  sectionRef,
  // containerVariants,
  // fadeUp,
  useInView,
}) => {
  const bottomTextRef = React.useRef<HTMLParagraphElement>(null);
  const bottomInView = useInView(bottomTextRef, { amount: 0.3 });
  return (
    <section
      id="certificaciones"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-green-50 to-blue-100 text-blue-900 w-full pt-5"
    >
      <div className="flex flex-col items-center w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="container mx-auto px-8 w-full pt-10"
        >
          <Heading className="text-center mx-auto">Certificaciones</Heading>
          {/* Cards de certificación grandes y reutilizables */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-8 w-full max-w-3xl mx-auto"
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {certificaciones.map((cert) => (
              <CertCard key={cert.title} {...cert} />
            ))}
          </motion.div>
          <motion.p
            ref={bottomTextRef}
            initial={{ opacity: 0, y: 24 }}
            animate={
              bottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
            }
            transition={{ duration: 0.7, delay: 0.4, type: "tween" }}
            className="text-center text-2xl text-slate-900 font-semibold mt-8 pt-24 pb-52 mx-auto max-w-2xl"
          >
            Nuestras certificaciones garantizan la calidad y seguridad de
            nuestros productos, cumpliendo con los más altos estándares
            internacionales.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificacionesSection;
