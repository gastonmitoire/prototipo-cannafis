import React from "react";

interface FuturistMenuProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sections: string[];
}

const FuturistMenu: React.FC<FuturistMenuProps> = ({
  menuOpen,
  setMenuOpen,
  sections,
}) => {
  if (!menuOpen) return null;
  return (
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
              {id.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FuturistMenu;
