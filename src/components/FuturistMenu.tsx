import { motion } from "framer-motion";
import React from "react";
import { Heading } from "./ui/heading";

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
    <nav className="fixed min-h-screen inset-0 pt-24 2xl:pt-28 z-40 flex flex-col items-center justify-center bg-slate-900/90 backdrop-blur-2xl">
      <ul className="container mx-auto grid w-full h-full text-4xl 2xl:text-7xl font-bold text-white/80">
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
            className={"group w-full cursor-pointer"}
          >
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                const section = document.getElementById(id);
                if (section) {
                  const yOffset = -80; // altura del navbar o el margen que quieras
                  const y =
                    section.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className={`flex items-center h-full group-hover:text-blue-500 transition-all duration-200 ${
                index % 2 === 0 ? "" : "justify-end"
              }`}
            >
              <Heading
                expand
                className={
                  index % 2 === 0
                    ? "group-hover:pl-2"
                    : "justify-end group-hover:pr-2"
                }
              >
                {id.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </Heading>
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default FuturistMenu;
