// Datos de certificaciones y habilitaciones para cards reutilizables
const certificaciones = [
  {
    logo: (
      <img
        src="https://cosantiago.com.ar/controladores/resize.php?carpeta=actualidades&width=850&height=0&file=COS1570536621U7.jpg"
        alt="ANMAT Logo"
        className="w-32 h-32 object-contain rounded-full bg-white/80 border border-green-200 shadow"
      />
    ),
    title: "ANMAT",
    subtitle: "Disposición N° DI-2025-5561",
    bg: "from-blue-100 via-blue-50 to-green-100",
  },
  {
    logo: (
      <svg width="110" height="110" fill="none" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="16" fill="#fbbf24" opacity=".15" />
        <rect
          x="12"
          y="12"
          width="12"
          height="12"
          rx="3"
          stroke="#fbbf24"
          strokeWidth="2.2"
        />
        <path
          d="M15 18h6"
          stroke="#fbbf24"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Sustancia Controlada (CSC)",
    subtitle: "Cannabis psicoactivo habilitado",
    bg: "from-yellow-100 via-yellow-50 to-green-100",
  },
  {
    logo: (
      <img
        src="https://tb-farming.com/wp-content/uploads/2024/01/GACP-LOGO.png"
        alt="Control Unión Logo"
        className="w-32 h-32 object-contain pl-3.5 rounded-full bg-white/80 border border-green-200 shadow"
      />
    ),
    title: "Control Unión",
    subtitle: "Cumplimiento GACP y calidad vegetal exportable",
    bg: "from-green-100 via-green-50 to-blue-100",
  },
  {
    logo: (
      <img
        src="https://static.vecteezy.com/system/resources/previews/021/863/065/non_2x/gmp-certified-or-good-manufacturing-practice-certified-badge-stamp-icon-seal-label-tag-emblem-for-cbd-label-oil-and-packaging-design-illustration-vector.jpg"
        alt="GMP Certified Logo"
        className="w-32 h-32 object-contain rounded-full bg-white/80 border border-green-200 shadow"
      />
    ),
    title: "GMP/BPF",
    subtitle: "Buenas Prácticas de Fabricación certificadas",
    bg: "from-green-100 via-green-50 to-blue-100",
  },
];
import React from "react";
import { motion, useInView } from "framer-motion";

import type { Variants } from "framer-motion";

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

function CertCard({
  logo,
  title,
  subtitle,
  bg,
}: {
  logo: React.ReactNode;
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
        {logo}
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
  containerVariants,
  fadeUp,
  useInView,
}) => {
  const bottomTextRef = React.useRef<HTMLParagraphElement>(null);
  const bottomInView = useInView(bottomTextRef, { amount: 0.3 });
  return (
    <section
      id="certificaciones"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-green-50 to-blue-100 text-blue-900 w-full px-8 pt-5"
    >
      <div className="flex flex-col items-center w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="w-full"
        >
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
            className="text-4xl font-bold mb-8 text-slate-900 text-center pt-12 pb-5 uppercase"
          >
            Certificaciones
          </motion.h2>
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
