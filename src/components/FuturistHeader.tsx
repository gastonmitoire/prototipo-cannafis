import React from "react";

interface FuturistHeaderProps {
  showHeader: boolean;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FuturistHeader: React.FC<FuturistHeaderProps> = ({
  showHeader,
  menuOpen,
  setMenuOpen,
}) => {
  if (!showHeader) return null;
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-slate-900/80 backdrop-blur-2xl transition-all duration-500 opacity-100 pointer-events-auto"
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
  );
};

export default FuturistHeader;
