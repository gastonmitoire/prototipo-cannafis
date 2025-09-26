import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type TitleVariant = "top" | "bottom" | "left" | "right";

interface TitleProps extends React.ComponentProps<typeof motion.h2> {
  heading?: boolean; // Si es true, es un título de sección grande; si es false, es un título general más chico
  children: React.ReactNode;
  variant?: TitleVariant; // Dirección de la animación
}

const Title: React.FC<TitleProps> = ({
  heading = false,
  children,
  className = "",
  variant = "bottom",
  ...props
}) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const base = heading
    ? "text-5xl md:text-6xl font-extrabold tracking-tight mb-6 uppercase"
    : "text-lg md:text-xl font-bold tracking-tight mb-2 uppercase";

  // Definir animación según variant
  let initial: any = { opacity: 0 };
  let animate: any = { opacity: 1 };
  switch (variant) {
    case "top":
      initial.y = -40;
      animate.y = 0;
      break;
    case "bottom":
      initial.y = 40;
      animate.y = 0;
      break;
    case "left":
      initial.x = -40;
      animate.x = 0;
      break;
    case "right":
      initial.x = 40;
      animate.x = 0;
      break;
    default:
      initial.y = 40;
      animate.y = 0;
  }

  return (
    <motion.h2
      ref={ref}
      className={`${base} ${className ? className : "text-white/80"}`}
      initial={initial}
      animate={inView ? animate : initial}
      transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.h2>
  );
};

export default Title;
