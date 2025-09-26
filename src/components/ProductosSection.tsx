import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView as useInViewLib } from "framer-motion";
import { Heading } from "./ui/heading";
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
      className="text-white/70 w-max line-clamp-1 text-3xl font-medium italic capitalize relative overflow-visible"
      style={{ borderTop: "3px solid transparent" }}
    >
      <motion.span
        initial={{ width: 0 }}
        animate={
          inView
            ? { width: "100%", transition: { duration: 1.02, delay: 0.03 } }
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
  <div className="h-full w-full text-right text-lg p-10 bg-black/30 backdrop-blur-sm">
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
  <motion.div
    className="py-7 space-y-1.5 grid grid-cols-4 gap-5"
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
        <motion.div
          key={item}
          variants={liSlide}
          className={`text-right text-3xl font-semibold pr-3 py-7 rounded-tr-2xl rounded-bl-2xl bg-gradient-to-l ${colorClass}`}
        >
          {item}
        </motion.div>
      );
    })}
  </motion.div>
);

const ProductosSection: React.FC<ProductosSectionProps> = ({
  sectionRef,
  containerVariants,
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
      className="relative h-screen -z-10"
      style={{
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/' +
          (backgroundStyle === "skulls" ? "skulls" : "stardust") +
          '.png")',
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-transparent backdrop-blur-xs -z-10" />
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
      <div className="container mx-auto grid grid-cols-5 gap-5 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="col-span-3 flex flex-col w-full"
        >
          <Heading className="self-end text-white/80">
            Productos y formatos
          </Heading>
          <div className="w-full">
            <div className="mx-auto text-white/80 space-y-2 gap-4">
              <ProductosCard>
                <Heading expand>Frascos y bolsas</Heading>
                <ProductosList
                  items={["20g", "40g", "100g", "500g"]}
                  inView={inView}
                />
              </ProductosCard>
              <ProductosCard>
                <Heading expand>Cápsulas y comprimidos</Heading>
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
                  Presentaciones adaptables a requerimientos de cada laboratorio
                  o institución
                </motion.p>
              </ProductosCard>
            </div>
          </div>
        </motion.div>
        <div className="col-span-2">
          <Heading>Canales de distribución</Heading>

          <div className="max-w-2xl w-full mx-auto flex flex-col justify-center gap-10">
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
    </section>
  );
};

export default ProductosSection;
