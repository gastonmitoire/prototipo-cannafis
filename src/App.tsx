// Variants para animaciones de las secciones
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
const fadeUp = {
  hidden: { opacity: 0, x: -48, scale: 0.98 },
  show: (i = 0) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 320,
      damping: 12,
      mass: 0.6,
      duration: 0.62,
      delay: i * 0.09,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};
import { useRef, useState, useEffect } from "react";
import { useInView, motion } from "framer-motion";
import ShadcnHeader from "./components/ShadcnHeader";
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
  // Estado para animar el zoom de la imagen al entrar/salir apenas inicia el scroll
  const [zoomedIn, setZoomedIn] = useState(false);
  // Ref y estado para la sección con imagen
  const imagenSectionRef = useRef<HTMLElement>(null);
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

  // Mostrar header solo si el usuario hizo scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 0);
    };
    // Ejecutar al montar para ocultar el header si scrollY === 0
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#0e2e2f] to-[#1e293b] overflow-hidden font-sans futurist">
      {/* Fondo decorativo glass global y overlays futuristas */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Glow radial */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-radial from-green-400/30 via-cyan-400/10 to-transparent blur-3xl opacity-80" />
        {/* Blobs y neones */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-cyan-400/30 rounded-full blur-3xl shadow-[0_0_80px_40px_#22d3ee55] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-400/30 rounded-full blur-2xl shadow-[0_0_80px_40px_#4ade8055] animate-pulse" />
        {/* Overlay de luz */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-cyan-200/10" />
      </div>
      {/* Header y menú */}
      {showHeader ? (
        <ShadcnHeader
          showHeader={showHeader}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      ) : (
        <button
          className="fixed top-6 right-6 z-50 flex flex-col items-center justify-center w-14 h-14 bg-cyan-200/30 rounded-full shadow-lg border border-cyan-400/40 hover:bg-cyan-100/40 transition-all backdrop-blur-xl"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block w-8 h-1 rounded bg-cyan-400 shadow-[0_0_8px_#22d3ee] transition-all duration-300 mb-1 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-8 h-1 rounded bg-cyan-400 shadow-[0_0_8px_#22d3ee] transition-all duration-300 mb-1 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-8 h-1 rounded bg-cyan-400 shadow-[0_0_8px_#22d3ee] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      )}
      <FuturistMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        sections={sections}
      />
      <main className="relative min-h-screen overflow-y-auto scroll-smooth z-10">
        <HeroSection
          sectionRef={sectionRefs[0]}
          containerVariants={containerVariants}
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
        <section
          ref={imagenSectionRef}
          className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Imagen con animación de zoom controlada por eventos viewport */}
          <div className="absolute inset-0 w-full h-full z-0">
            <motion.img
              src="https://cdn.labmanager.com/assets/articleNo/21736/aImg/39650/regulation-in-cannabis-labs-l.webp"
              alt="Imagen decorativa"
              className="snap-center w-full min-h-screen object-cover"
              initial={{ scale: 1.12, opacity: 0.7 }}
              animate={
                zoomedIn
                  ? { scale: 1, opacity: 1 }
                  : { scale: 1.12, opacity: 0.7 }
              }
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              onViewportEnter={() => setZoomedIn(true)}
              onViewportLeave={() => setZoomedIn(false)}
              viewport={{ amount: 0.1 }}
            />
          </div>
          {/* Overlay corregido, cubre toda la imagen */}
          <div className="absolute inset-0 w-full h-full z-10 pointer-events-none bg-gradient-to-br from-[#0f172a] via-[#0e2e2f] to-[#1e293b] opacity-70" />
        </section>
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
