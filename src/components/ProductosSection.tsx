import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView as useInViewLib } from "framer-motion";
// Componente animado para canal de distribución
const CanalDistribucion: React.FC<{ text: string }> = ({ text }) => {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const inView = useInViewLib(ref, { amount: 0.7, once: false });
  return (
    <motion.p
      ref={ref}
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
      className="text-right mt-4 text-white/70 italic flex-1 px-2 text-sm capitalize relative overflow-visible"
      style={{ borderTop: "3px solid transparent" }}
    >
      <motion.span
        initial={{ width: 0 }}
        animate={
          inView
            ? { width: "100%", transition: { duration: 0.22, delay: 0.03 } }
            : { width: 0 }
        }
        className="absolute left-0 top-0 h-0.5 bg-white/20 rounded-full"
        style={{ borderRadius: 2, height: 3, background: "#ffffff33" }}
      />
      <span className="relative z-10 mt-2 block">{text}</span>
    </motion.p>
  );
};
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
  const [backgroundStyle, setBackgroundStyle] = React.useState<
    "skulls" | "stardust"
  >("skulls");

  return (
    <section
      id="productos"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-4 pb-20"
      style={{
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/' +
          (backgroundStyle === "skulls" ? "skulls" : "stardust") +
          '.png")',
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <button
        onClick={() =>
          setBackgroundStyle((prev) =>
            prev === "skulls" ? "stardust" : "skulls"
          )
        }
        className="absolute top-4 right-4 bg-white/20 p-2 rounded z-30"
      >
        Cambiar fondo
      </button>
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
                initial={{ opacity: 0, x: -16 }}
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
                    : { opacity: 0, x: -16 }
                }
                className="text-4xl uppercase font-semibold text-left"
              >
                Cápsulas y comprimidos
              </motion.p>
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
                className="text-xl font-thin italic mt-7"
              >
                Presentaciones adaptables a requerimientos de cada laboratorio o
                institución
              </motion.p>
            </ProductosCard>
          </div>
          <div>
            <h3 className="text-xl font-bold text-center mt-8 mb-4 text-white/80">
              Canales de distribución
            </h3>
            <div className="max-w-md mx-auto flex flex-wrap justify-center gap-2">
              {[
                "farmacias magistrales",
                "laboratorios",
                "instituciones de salud",
                "exportación a mercados regulados",
                "convenios con ONGs bajo Reprocann.",
              ].map((text) => (
                <CanalDistribucion key={text} text={text} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductosSection;
