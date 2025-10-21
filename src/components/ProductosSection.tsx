import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView as useInViewLib } from "framer-motion";
import { Heading } from "./ui/heading";

// Componente animado para canal de distribución
const CanalDistribucion: React.FC<{ text: string }> = ({ text }) => {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const inView = useInViewLib(ref, { amount: 0.7, once: false });
  return (
    <motion.div ref={ref} className="relative text-white/90">
      <motion.h2
        ref={ref}
        className="uppercase text-xl lg:text-3xl text-white/80 font-bold pt-1.5"
        transition={{ duration: 1.02, delay: 0.33 }}
        initial={{ opacity: 0, x: 16 }}
        animate={
          inView
            ? { opacity: 1, x: 0, transition: { duration: 1.02, delay: 0.13 } }
            : { opacity: 0, x: 16 }
        }
      >
        {text}
      </motion.h2>

      <motion.span
        initial={{ width: 0 }}
        animate={
          inView
            ? { width: "100%", transition: { duration: 1.22, delay: 0.13 } }
            : { width: 0 }
        }
        className="absolute left-0 top-0 h-0.5 bg-white/20 rounded-full"
        style={{ borderRadius: 2, height: 1.5, background: "#ffffff33" }}
      />
    </motion.div>
  );
};
interface ProductosSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
  containerVariants: any;
  fadeUp: any;
  useInView: any;
}

// const ProductosCard = ({ children }: { children: React.ReactNode }) => (
//   <div className="h-full w-full text-lg p-10 bg-black/10 backdrop-blur-sm">
//     {children}
//   </div>
// );

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
    className="py-7 space-y-1.5 grid grid-cols-2 lg:grid-cols-4 gap-5"
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
          className={`text-right text-lg 2xl:text-3xl font-semibold p-1.5 2xl:pr-3 py-3.5 2xl:py-7 rounded-tr-2xl rounded-bl-2xl bg-gradient-to-l ${colorClass}`}
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
  const [backgroundStyle] = React.useState<"skulls" | "stardust">("skulls");

  return (
    <section
      id="productos"
      ref={sectionRef}
      className="relative min-h-screen px-4 -z-10"
      style={{
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/' +
          (backgroundStyle === "skulls" ? "skulls" : "stardust") +
          '.png")',
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background backdrop-blur-xs -z-10" />
      {/* <button
        onClick={() =>
          setBackgroundStyle((prev) =>
            prev === "skulls" ? "stardust" : "skulls"
          )
        }
        className="absolute top-4 right-4 bg-white/20 p-2 rounded z-30"
      >
        Cambiar fondo
      </button> */}
      <div className="@container grid lg:grid-cols-5 gap-5 pt-10 2xl:pt-20">
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
              <div>
                <Heading expand className="text-right">
                  Frascos y bolsas
                </Heading>
                <ProductosList
                  items={["20g", "40g", "100g", "500g"]}
                  inView={inView}
                />
              </div>
              <div className="flex flex-col">
                <Heading expand className="text-right">
                  Cápsulas y comprimidos
                </Heading>
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
                  className="text-sm 2xl:text-xl self-end max-w-[85%] lg:max-w-[60%] font-thin italic"
                >
                  Presentaciones adaptables a requerimientos de cada laboratorio
                  o institución
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="col-span-2">
          <Heading className="text-right lg:text-left text-white/80">
            Canales de distribución
          </Heading>

          <div className="max-w-2xl w-full mx-auto flex flex-col justify-center gap-3 lg:gap-10">
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
