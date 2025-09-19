import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

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
  const sectionRefs = sections.map(() => useRef(null));

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

      {/* Header glassmorphism futurista */}
      {showHeader ? (
        <header
          className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-gradient-to-r from-cyan-900/80 via-cyan-700/80 to-green-700/80 backdrop-blur-2xl shadow-2xl border-b border-cyan-400/30 rounded-b-3xl transition-all duration-500 opacity-100 pointer-events-auto"
          style={{ transitionProperty: "opacity, box-shadow, background" }}
        >
          <div className="flex items-center gap-4 select-none">
            <img
              src="/vite.svg"
              alt="Logo"
              className="w-12 h-12 drop-shadow-neon-cyan"
            />
            <span className="text-2xl font-extrabold tracking-widest text-cyan-300 drop-shadow-neon-cyan futurist">
              CannaFIS
            </span>
          </div>
          <button
            className="flex flex-col items-center justify-center w-14 h-14 bg-cyan-200/30 rounded-full shadow-lg border border-cyan-400/40 hover:bg-cyan-100/40 transition-all backdrop-blur-xl"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={`block w-8 h-1 rounded bg-cyan-400 shadow-[0_0_8px_#22d3ee] transition-all duration-300 mb-1 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-1 rounded bg-cyan-400 shadow-[0_0_8px_#22d3ee] transition-all duration-300 mb-1 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-1 rounded bg-cyan-400 shadow-[0_0_8px_#22d3ee] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </header>
      ) : (
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

      {/* Overlay menú glass */}
      {menuOpen && (
        <nav className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white/80 backdrop-blur-2xl animate-fadeIn">
          <ul className="space-y-8 text-2xl font-bold text-blue-800">
            {sections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    document
                      .getElementById(id)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  {id
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <main className="relative h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth pt-[68px] z-10">
        {/* 1. Hero */}
        <section
          id="inicio"
          ref={sectionRefs[0]}
          className="snap-center h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-400 to-green-300 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/public/vite.svg')] bg-no-repeat bg-right-bottom opacity-10 pointer-events-none" />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={
              useInView(sectionRefs[0], { amount: 0.4 }) ? "show" : "hidden"
            }
            className="flex flex-col items-center z-10"
          >
            <motion.div
              variants={fadeUp}
              className="mb-8 flex items-center gap-4"
            >
              <img
                src="/vite.svg"
                alt="Logo"
                className="w-20 h-20 drop-shadow-xl"
              />
              <span className="text-6xl font-extrabold tracking-tight drop-shadow-lg">
                CannaFIS
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-2xl font-bold drop-shadow mb-6 text-white/90 text-center"
            >
              Pioneros en cannabis medicinal farmacéutico en Argentina
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="bg-white/10 rounded-xl px-8 py-4 shadow-lg backdrop-blur-md border border-white/20"
            >
              <span className="text-lg font-medium text-white/90">
                Innovación, calidad y trazabilidad en cada paso.
              </span>
            </motion.div>
          </motion.div>
        </section>
        {/* 2. Presentación */}
        <section
          id="presentacion"
          ref={sectionRefs[1]}
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
            animate={
              useInView(sectionRefs[1], { amount: 0.4 }) ? "show" : "hidden"
            }
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
                Para elaborar, importar y exportar Ingredientes Farmacéuticos
                Activos (IFA) a base de Cannabis sativa.
                <br />
                Con certificaciones internacionales, estándares farmacéuticos y
                trazabilidad total, llevamos el cannabis medicinal a toda
                Argentina y el mundo.
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
        {/* 3. Quiénes somos */}
        <section
          id="quienes-somos"
          ref={sectionRefs[2]}
          className="snap-center h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-100 text-blue-900 px-4"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={
              useInView(sectionRefs[2], { amount: 0.4 }) ? "show" : "hidden"
            }
            className="flex flex-col items-center w-full z-10"
          >
            <motion.div
              variants={fadeUp}
              className="bg-white/80 rounded-2xl shadow-xl p-10 flex-1 border border-green-200 flex flex-col justify-center"
            >
              <motion.h2
                variants={fadeUp}
                className="text-3xl font-bold mb-4 text-green-700 text-left"
              >
                Quiénes somos
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-lg text-blue-900/80 text-left"
              >
                CannaFIS es una empresa de capital nacional que combina
                innovación biotecnológica, excelencia en proceso industrial y
                cumplimiento normativo riguroso.
                <br />
                Nacimos para abastecer a laboratorios, farmacias magistrales e
                instituciones de salud con cannabis medicinal de calidad
                farmacéutica.
                <br />
                Nuestro compromiso: ofrecer productos estandarizados, seguros y
                legales, que aporten valor real a tratamientos terapéuticos en
                mercados regulados.
              </motion.p>
            </motion.div>
          </motion.div>
        </section>
        {/* 4. Producción y calidad */}
        <section
          id="produccion"
          ref={sectionRefs[3]}
          className="snap-center h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-green-50 to-white text-blue-900 px-4"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={
              useInView(sectionRefs[3], { amount: 0.4 }) ? "show" : "hidden"
            }
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
        {/* 5. Certificaciones */}
        <section
          id="certificaciones"
          ref={sectionRefs[4]}
          className="snap-center h-screen flex items-center justify-center bg-gradient-to-br from-white via-green-50 to-blue-100 text-blue-900 px-4"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={
              useInView(sectionRefs[4], { amount: 0.4 }) ? "show" : "hidden"
            }
            className="flex flex-col items-center w-full z-10"
          >
            <motion.div
              variants={fadeUp}
              className="bg-white/90 rounded-2xl shadow-xl p-10 max-w-2xl border border-green-100"
            >
              <motion.h2
                variants={fadeUp}
                className="text-3xl font-bold mb-4 text-green-700 text-center"
              >
                Certificaciones
              </motion.h2>
              <motion.ul
                variants={containerVariants}
                className="text-left list-disc list-inside text-blue-900/90 space-y-2"
              >
                <motion.li variants={fadeUp}>
                  Certificación GMP (Buenas Prácticas de Manufactura)
                </motion.li>
                <motion.li variants={fadeUp}>
                  Certificación ISO 9001:2015 en Sistema de Gestión de Calidad
                </motion.li>
                <motion.li variants={fadeUp}>
                  Certificación ISO 22000 en Seguridad Alimentaria
                </motion.li>
                <motion.li variants={fadeUp}>
                  Registro en ANMAT como Productor de IFA de Cannabis
                </motion.li>
              </motion.ul>
              <motion.p
                variants={fadeUp}
                className="text-center mt-4 text-blue-900/80"
              >
                Comprometidos con los más altos estándares de calidad y
                seguridad.
              </motion.p>
            </motion.div>
          </motion.div>
        </section>
        {/* 6. Productos */}
        <section
          id="productos"
          ref={sectionRefs[5]}
          className="snap-center h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-green-50 to-white text-blue-900 px-4"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={
              useInView(sectionRefs[5], { amount: 0.4 }) ? "show" : "hidden"
            }
            className="flex flex-col items-center w-full z-10"
          >
            <motion.div
              variants={fadeUp}
              className="bg-white/90 rounded-2xl shadow-xl p-10 max-w-2xl border border-blue-100"
            >
              <motion.h2
                variants={fadeUp}
                className="text-3xl font-bold mb-4 text-blue-700 text-center"
              >
                Productos y formatos
              </motion.h2>
              <motion.ul
                variants={containerVariants}
                className="text-left list-disc list-inside text-blue-900/90 space-y-2"
              >
                <motion.li variants={fadeUp}>
                  Frascos y bolsas de 20g, 40g, 100g y 500g
                </motion.li>
                <motion.li variants={fadeUp}>
                  Presentaciones adaptables a requerimientos de cada laboratorio
                  o institución
                </motion.li>
              </motion.ul>
              <motion.p
                variants={fadeUp}
                className="text-center mt-4 text-blue-900/80"
              >
                Canales: farmacias magistrales, laboratorios, instituciones de
                salud, exportación a mercados regulados, convenios con ONGs bajo
                Reprocann.
              </motion.p>
            </motion.div>
          </motion.div>
        </section>
        {/* 7. Mercados y alianzas */}
        <section
          id="mercados"
          ref={sectionRefs[6]}
          className="snap-center h-screen flex items-center justify-center bg-gradient-to-br from-white via-green-50 to-blue-100 text-blue-900 px-4"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={
              useInView(sectionRefs[6], { amount: 0.4 }) ? "show" : "hidden"
            }
            className="flex flex-col items-center w-full z-10"
          >
            <motion.div
              variants={fadeUp}
              className="bg-white/90 rounded-2xl shadow-xl p-10 max-w-2xl border border-green-100"
            >
              <motion.h2
                variants={fadeUp}
                className="text-3xl font-bold mb-4 text-green-700 text-center"
              >
                Mercados y alianzas
              </motion.h2>
              <motion.ul
                variants={containerVariants}
                className="text-left list-disc list-inside text-blue-900/90 space-y-2"
              >
                <motion.li variants={fadeUp}>
                  Distribución nacional a instituciones habilitadas.
                </motion.li>
                <motion.li variants={fadeUp}>
                  Exportación a mercados regulados con estándares
                  internacionales.
                </motion.li>
                <motion.li variants={fadeUp}>
                  Acuerdos estratégicos con organizaciones del sector salud y
                  biotecnología.
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
        </section>
        {/* 8. Responsabilidad Social */}
        <section
          id="responsabilidad"
          ref={sectionRefs[7]}
          className="snap-center h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-green-50 text-blue-900 px-4"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={
              useInView(sectionRefs[7], { amount: 0.4 }) ? "show" : "hidden"
            }
            className="flex flex-col items-center w-full z-10"
          >
            <motion.div
              variants={fadeUp}
              className="bg-white/90 rounded-2xl shadow-xl p-10 max-w-2xl border border-blue-100"
            >
              <motion.h2
                variants={fadeUp}
                className="text-3xl font-bold mb-4 text-blue-700 text-center"
              >
                Responsabilidad Social
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-center text-blue-900/80"
              >
                Colaboramos con instituciones de bien público enfocadas en
                investigación sobre las propiedades benéficas del cannabis
                medicinal y fundaciones de concientización y apoyo al consumo
                problemático.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 text-center">
                <h3 className="text-xl font-bold mb-2">Contacto</h3>
                <p>Ruta Nacional 36, Colonia Elisa, Chaco – Argentina</p>
                <p>+54 9 362 4758114</p>
                <p>comercialcannafis@gmail.com</p>
                <p>Instagram: @cannafis_</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default App;
