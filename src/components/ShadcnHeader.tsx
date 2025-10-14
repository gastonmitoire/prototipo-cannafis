import React from "react";

// IMPORTANTE: El SVG debe estar dentro de src/, no en public
import cannafisMalachiteLogo from "../assets/brand/logo/cannafis-malachite.svg";

interface ShadcnHeaderProps {
  showHeader: boolean;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShadcnHeader: React.FC<ShadcnHeaderProps> = ({
  showHeader,
  menuOpen,
  setMenuOpen,
}) => {
  if (!showHeader) return null;

  return (
    <header className="fixed top-0 w-full z-50 py-4 bg-midnight backdrop-blur-2xl transition-all duration-500">
      <div className="w-[95vw] max-w-[2200px] mx-auto px-8 flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center gap-4 select-none">
          <img
            src={cannafisMalachiteLogo}
            alt="Cannafis Logo"
            className="min-w-32"
          />
        </div>

        {/* Botón hamburguesa */}
        <div className="flex items-center h-full">
          <button
            className="flex flex-col items-center justify-center w-14 h-14 bg-primary/30 rounded-full shadow-lg border border-primary/40 hover:bg-primary/40 transition-all backdrop-blur-xl"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={`block w-8 h-1 rounded bg-primary shadow-[0_0_8px_#22d3ee] transition-all duration-300 mb-1 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-8 h-1 rounded bg-primary shadow-[0_0_8px_#22d3ee] transition-all duration-300 mb-1 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-8 h-1 rounded bg-primary shadow-[0_0_8px_#22d3ee] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default ShadcnHeader;
