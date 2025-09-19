import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import FuturistHeader from "./components/FuturistHeader";
import FuturistMenu from "./components/FuturistMenu";
import HeroSection from "./components/HeroSection";
import PresentacionSection from "./components/PresentacionSection";
import QuienesSomosSection from "./components/QuienesSomosSection";
import ProduccionSection from "./components/ProduccionSection";
import CertificacionesSection from "./components/CertificacionesSection";
import ProductosSection from "./components/ProductosSection";
import MercadosSection from "./components/MercadosSection";
import ResponsabilidadSection from "./components/ResponsabilidadSection";

function App() {
  // Estado para el menú hamburguesa y visibilidad del header
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  // Refs para cada sección
  const sections = [
    "inicio",
    "presentacion",
    "quienes-somos",
    "produccion",
    "certificaciones",
    "productos",
    "mercados",
    "responsabilidad",
  ];

  // Refs para cada sección
  const sectionRefs = sections.map(() => useRef<HTMLElement>(null));

  // Mostrar header solo si NO está la primera sección en view
  const heroInView = useInView(sectionRefs[0], { amount: 0.6 });
  useEffect(() => {
    setShowHeader(!heroInView);
  }, [heroInView]);

  // Variants para animaciones
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80 },
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#0e2e2f] to-[#1e293b] overflow-hidden font-sans futurist">
      {/* Fondo decorativo glass global y overlays futuristas */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Glow radial */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-radial from-green-400/30 via-cyan-400/10 to-transparent blur-3xl opacity-80" />
        {/* Líneas geométricas */}
        <svg
          className="absolute left-0 top-0 w-full h-full opacity-10"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="linea"
              x1="0"
              y1="0"
              x2="1440"
              y2="900"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#67e8f9" />
              <stop offset="1" stopColor="#4ade80" />
            </linearGradient>
          </defs>
          <line
            x1="0"
            y1="0"
            x2="1440"
            y2="900"
            stroke="url(#linea)"
            strokeWidth="2"
          />
          <line
            x1="1440"
            y1="0"
            x2="0"
            y2="900"
            stroke="url(#linea)"
            strokeWidth="2"
          />
        </svg>
        {/* Blobs y neones */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-cyan-400/30 rounded-full blur-3xl shadow-[0_0_80px_40px_#22d3ee55] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-400/30 rounded-full blur-2xl shadow-[0_0_80px_40px_#4ade8055] animate-pulse" />
        {/* Overlay de luz */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-cyan-200/10" />
      </div>

      {/* Header y menú */}
      <FuturistHeader
        showHeader={showHeader}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      {!showHeader && (
        <button
          className="fixed top-6 right-6 z-50 flex flex-col items-center justify-center w-14 h-14 bg-cyan-200/30 rounded-full shadow-lg border border-cyan-400/40 hover:bg-cyan-100/40 transition-all backdrop-blur-xl"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block w-8 h-1 rounded bg-cyan-400 shadow-[0_0_8px_#22d3ee] transition-all duration-300 mb-1 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }
            }`}
          ></span>
          <span
            className={`block w-8 h-1 rounded bg-cyan-400 shadow-[0_0_8px_#22d3ee] transition-all duration-300 mb-1 ${
              menuOpen ? "opacity-0" : ""
            }
            }`}
          ></span>
          <span
            className={`block w-8 h-1 rounded bg-cyan-400 shadow-[0_0_8px_#22d3ee] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }
            }`}
          ></span>
        </button>
      )}
      <FuturistMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        sections={sections}
      />

      <main className="relative h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth pt-[68px] z-10">
        <HeroSection
          sectionRef={sectionRefs[0]}
          containerVariants={containerVariants}
          fadeUp={fadeUp}
          useInView={useInView}
        />
        <PresentacionSection
          sectionRef={sectionRefs[1]}
          containerVariants={containerVariants}
          fadeUp={fadeUp}
          useInView={useInView}
        />
        <QuienesSomosSection
          sectionRef={sectionRefs[2]}
          containerVariants={containerVariants}
          fadeUp={fadeUp}
          useInView={useInView}
        />
        <ProduccionSection
          sectionRef={sectionRefs[3]}
          containerVariants={containerVariants}
          fadeUp={fadeUp}
          useInView={useInView}
        />
        <CertificacionesSection
          sectionRef={sectionRefs[4]}
          containerVariants={containerVariants}
          fadeUp={fadeUp}
          useInView={useInView}
        />
        <ProductosSection
          sectionRef={sectionRefs[5]}
          containerVariants={containerVariants}
          fadeUp={fadeUp}
          useInView={useInView}
        />
        <MercadosSection
          sectionRef={sectionRefs[6]}
          containerVariants={containerVariants}
          fadeUp={fadeUp}
          useInView={useInView}
        />
        <ResponsabilidadSection
          sectionRef={sectionRefs[7]}
          containerVariants={containerVariants}
          fadeUp={fadeUp}
          useInView={useInView}
        />
      </main>
    </div>
  );
}

export default App;
