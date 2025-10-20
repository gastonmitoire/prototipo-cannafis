import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { CertCard, certificaciones } from "./CertificacionesSection";

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "presentacion", label: "Presentación" },
  { id: "quienes-somos", label: "Quiénes Somos" },
  { id: "produccion", label: "Producción" },
  { id: "certificaciones", label: "Certificaciones" },
  { id: "productos", label: "Productos" },
  { id: "mercados", label: "Mercados" },
  { id: "responsabilidad", label: "Responsabilidad" },
];

const Footer: React.FC = () => (
  <footer className="w-full bg-gradient-to-br from-background via-blue-950 to-background text-white/80 py-10 px-4 border-t border-blue-900/40">
    <div className="@container flex flex-col md:flex-row justify-between items-start gap-8">
      {/* Mapa del sitio */}
      <nav className="flex-1 mb-6 md:mb-0">
        <h4 className="font-bold text-lg mb-2 text-blue-300">Mapa del sitio</h4>
        <ul className="flex flex-wrap gap-4 text-sm">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="hover:text-cyan-400 transition-colors"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="md:col-span-2">
        <motion.span
          initial={{ width: 0 }}
          animate={{
            width: "100%",
            transition: { duration: 1.22, delay: 0.13 },
          }}
          className="absolute left-0 top-0 h-0.5 bg-white/20 rounded-full"
          style={{ borderRadius: 2, height: 1.5, background: "#ffffff33" }}
        />

        <div className="grid grid-cols-4 gap-4 lg:px-8">
          {certificaciones.map((cert) => (
            <img
              key={cert.title}
              src={cert.imgSrc}
              alt={cert.title}
              className="w-16 h-16 object-fill rounded-full"
            />
          ))}
        </div>
      </div>
      {/* Redes sociales */}
      <div className="flex-1 flex flex-col items-end">
        <h4 className="font-bold text-lg mb-2 text-blue-300">Redes sociales</h4>
        <div className="flex gap-5 text-2xl">
          <a
            href="https://instagram.com/cannafis_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/gastonmitoire"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
    <div className="@container mt-16 flex items-center">
      {/* Div for spacing */}
      <div />
      <div className="flex-1 text-center text-xs text-blue-200/60">
        &copy; {new Date().getFullYear()} Cannafis. Todos los derechos
        reservados.
      </div>
      {/* Creador */}
      <div className="self-center flex flex-col items-center md:items-end">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline text-sm font-semibold"
        >
          <img
            src="/images/extras/yaguaretech-iso.svg"
            alt="Logo de Gastón Mitoire"
            className="w-5"
          />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
