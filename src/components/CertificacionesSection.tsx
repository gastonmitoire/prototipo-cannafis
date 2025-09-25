// Datos de certificaciones y habilitaciones para cards reutilizables
const certificaciones = [
  {
    logo: (
      <svg width="110" height="110" fill="none" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="16" fill="#6366f1" opacity=".15" />
        <path
          d="M18 12v12M12 18h12"
          stroke="#6366f1"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="18" cy="18" r="12" stroke="#6366f1" strokeWidth="2.2" />
      </svg>
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
      <svg width="110" height="110" fill="none" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="16" fill="#22c55e" opacity=".15" />
        <path
          d="M12 18h12M18 12v12"
          stroke="#22c55e"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="18" cy="18" r="12" stroke="#22c55e" strokeWidth="2.2" />
      </svg>
    ),
    title: "Control Unión",
    subtitle: "Cumplimiento GACP y calidad vegetal exportable",
    bg: "from-green-100 via-green-50 to-blue-100",
  },
  {
    logo: (
      <img
        src="/gmp-certified-logo.png"
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

function CertCard({
  logo,
  title,
  subtitle,
  bg,
  side = "left",
}: {
  logo: React.ReactNode;
  title: string;
  subtitle: string;
  bg: string;
  side?: "left" | "right";
}) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center md:items-start gap-6 p-6 rounded-2xl shadow-lg border border-green-100 bg-gradient-to-br ${bg} ${
        side === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-shrink-0 flex items-center justify-center">
        {logo}
      </div>
      <div
        className={`flex flex-col ${
          side === "right"
            ? "items-center md:items-end text-center md:text-right"
            : "items-center md:items-start text-center md:text-left"
        } w-full`}
      >
        <div className="font-bold text-3xl md:text-4xl text-blue-900 mb-2">
          {title}
        </div>
        <div className="text-lg md:text-xl text-blue-900/70">{subtitle}</div>
      </div>
    </div>
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
}) => (
  <section
    id="certificaciones"
    ref={sectionRef}
    className="snap-center min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-green-50 to-blue-100 text-blue-900 w-full px-8"
  >
    <div className="flex flex-col items-center w-full z-10">
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-4 text-green-700 text-center">
          Certificaciones
        </h2>
        {/* Cards de certificación grandes y reutilizables */}
        <div className="flex flex-col gap-8 my-8 w-full">
          {certificaciones.map((cert, index) => (
            <CertCard
              key={cert.title}
              {...cert}
              side={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
        <p className="text-center text-blue-900/80">
          Nuestras certificaciones garantizan la calidad y seguridad de nuestros
          productos, cumpliendo con los más altos estándares internacionales.
        </p>
      </div>
    </div>
  </section>
);

export default CertificacionesSection;
