import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type AnimationProps = {
  transition?: {
    duration?: number;
    delay?: number;
    ease?: number[];
  };
  direction?: "top" | "bottom" | "left" | "right" | "none"; // Dirección de la animación
};

interface HeadingProps extends React.ComponentProps<typeof motion.h2> {
  expand?: boolean; // Si es true, es un título de sección grande; si es false, es un título general más chico
  children: React.ReactNode;
  animation?: AnimationProps; // Dirección de la animación
}

const Heading: React.FC<HeadingProps> = ({
  expand = false,
  children,
  className = "",
  animation = {
    direction: "none",
    transition: { duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] },
  },
  ...props
}) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const base = expand
    ? "text-2xl xl:text-3xl 2xl:text-6xl font-extrabold tracking-tight uppercase"
    : "text-sm xl:text-lg 2xl:text-xl font-bold tracking-tight mb-2 uppercase";

  // Definir animación según variant
  let initial: any = { opacity: 0 };
  let animate: any = { opacity: 1 };
  switch (animation?.direction) {
    case "top":
      initial = { opacity: 0, y: -16 };
      animate = { opacity: 1, y: 0 };
      break;
    case "bottom":
      initial = { opacity: 0, y: 16 };
      animate = { opacity: 1, y: 0 };
      break;
    case "left":
      initial = { opacity: 0, x: -16 };
      animate = { opacity: 1, x: 0 };
      break;
    case "right":
      initial = { opacity: 0, x: 16 };
      animate = { opacity: 1, x: 0 };
      break;
    case "none":
    default:
      initial = { opacity: 0 };
      animate = { opacity: 1 };
      break;
  }

  return (
    <motion.h2
      ref={ref}
      className={`${base} ${className ? className : "text-white/80"}`}
      initial={initial}
      animate={inView ? { ...animate, ...animation?.transition } : initial}
      transition={{ ...animation?.transition } as any}
      {...props}
    >
      {children}
    </motion.h2>
  );
};

export { Heading };
