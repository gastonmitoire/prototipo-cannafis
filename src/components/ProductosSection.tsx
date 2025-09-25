import React from "react";
import { motion } from "framer-motion";
interface ProductosSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
  containerVariants: any;
  fadeUp: any;
  useInView: any;
}

const ProductosCard = ({ children }: { children: React.ReactNode }) => (
  <div className="h-full text-left text-lg p-10 bg-black/30 rounded-lg">
    {children}
  </div>
);

// Variants para la lista con stagger llamativo pero profesional
const listStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.08,
    },
  },
};

const liSlide = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 420,
      damping: 32,
      mass: 0.7,
    },
  },
};

interface ProductosListProps {
  items: string[];
  inView: boolean;
}

const ProductosList = ({ items, inView }: ProductosListProps) => (
  <motion.ul
    className="py-7 space-y-1.5"
    variants={listStagger}
    initial="hidden"
    animate={inView ? "show" : "hidden"}
  >
    {items.map((item) => {
      const colorClass =
        item === "20g"
          ? "from-blue-900/90 to-blue-100/10"
          : item === "40g"
          ? "from-green-900/90 to-green-100/10"
          : item === "100g"
          ? "from-purple-900/90 to-purple-100/10"
          : "from-pink-700/90 to-orange-100/10";
      return (
        <motion.li
          key={item}
          variants={liSlide}
          className={`text-right text-3xl font-semibold pr-3 py-1.5 rounded-tr-2xl rounded-bl-2xl bg-gradient-to-l ${colorClass}`}
        >
          {item}
        </motion.li>
      );
    })}
  </motion.ul>
);

const ProductosSection: React.FC<ProductosSectionProps> = ({
  sectionRef,
  containerVariants,
  fadeUp,
  useInView,
}) => {
  const inView = useInView(sectionRef, { amount: 0.4 });
  return (
    <section
      id="productos"
      ref={sectionRef}
      className="h-screen flex items-center justify-center px-4"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="flex flex-col items-center w-full z-10"
      >
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-3xl font-bold mb-4 pt-20 pb-5 text-white/80 text-center"
        >
          Productos y formatos
        </motion.h2>
        <div className="max-w-2xl w-full">
          <div className="text-white/80 space-y-2 grid grid-cols-2 gap-4">
            <ProductosCard>
              <motion.p
                initial={{ opacity: 0, x: 16 }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        x: 0,
                        transition: {
                          type: "spring" as const,
                          stiffness: 320,
                          damping: 28,
                          mass: 0.7,
                        },
                      }
                    : { opacity: 0, x: 16 }
                }
                className="text-4xl uppercase font-semibold text-right"
              >
                Frascos y bolsas
              </motion.p>
              <ProductosList
                items={["20g", "40g", "100g", "500g"]}
                inView={inView}
              />
            </ProductosCard>
            <ProductosCard>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              >
                Presentaciones adaptables a requerimientos de cada laboratorio o
                institución
              </motion.p>
            </ProductosCard>
          </div>
          {[
            "Canales: farmacias magistrales",
            "laboratorios",
            "instituciones de salud",
            "exportación a mercados regulados",
            "convenios con ONGs bajo Reprocann.",
          ].map((text) => (
            <motion.p
              key={text}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="text-center mt-4 text-blue-900/80"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProductosSection;
