import { motion } from "framer-motion";
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
    <nav className="fixed h-screen inset-0 z-40 flex flex-col items-center justify-center bg-slate-900/90 backdrop-blur-2xl">
      <ul className="container mx-auto w-full text-7xl font-bold text-white/80">
        {sections.map((id, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1 + 0.3,
              type: "spring",
              stiffness: 100,
            }}
            className={
              "group w-full h-24 cursor-pointer" +
              (index % 2 === 0 ? " text-left" : " text-right")
            }
          >
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`block group-hover:text-blue-500 transition-all duration-200 ${
                index % 2 === 0 ? "group-hover:pl-2" : "group-hover:pr-2"
              }`}
            >
              {id.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default FuturistMenu;
