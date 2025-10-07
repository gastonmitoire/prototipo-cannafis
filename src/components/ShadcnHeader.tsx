import React from "react";

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
    <header className="fixed top-0 w-full h-20 z-50 bg-slate-900 backdrop-blur-2xl transition-all duration-500">
      <div className="flex items-center justify-between h-full px-8">
        <div className="flex items-center gap-4 select-none">
          <span className="text-2xl font-extrabold tracking-widest text-white/80">
            CannaFIS
          </span>
        </div>
        <div className="flex items-center h-full">
          <button
            className="flex flex-col items-center justify-center w-14 h-14 bg-cyan-200/30 rounded-full shadow-lg border border-cyan-400/40 hover:bg-cyan-100/40 transition-all backdrop-blur-xl"
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
        </div>
      </div>
    </header>
  );
};

export default ShadcnHeader;
