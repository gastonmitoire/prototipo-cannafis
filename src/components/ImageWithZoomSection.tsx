import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ImageWithZoomSectionProps {
  imageUrl: string;
  alt?: string;
  overlayClassName?: string;
  children?: React.ReactNode;
}

const ImageWithZoomSection: React.FC<ImageWithZoomSectionProps> = ({
  imageUrl,
  alt = "Decorative image",
  overlayClassName = "bg-gradient-to-br from-[#0f172a] via-[#0e2e2f] to-[#1e293b] opacity-70",
  children,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  // Usar useInView para obtener el ratio de visibilidad
  const inView = useInView(sectionRef, {
    amount: "some",
    // triggerOnce: false
  });
  // Usar IntersectionObserverEntry para obtener el ratio
  // Inicializar en 0 para que el zoom ya esté aumentado antes de entrar
  const [intersectionRatio, setIntersectionRatio] = React.useState(0);
  const [lockedAtOne, setLockedAtOne] = React.useState(false);
  React.useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        // Si la sección está completamente fuera del viewport por arriba, resetear zoom (como si fuera la primera vez)
        if (entry.boundingClientRect.bottom < 0) {
          setLockedAtOne(false);
          setIntersectionRatio(0);
          return;
        }
        // Si la sección está completamente fuera del viewport por abajo, mantener zoom aumentado (no cambiar a 1)
        if (entry.boundingClientRect.top > window.innerHeight) {
          setLockedAtOne(false);
          setIntersectionRatio(0);
          return;
        }
        // Si la sección está completamente visible, lock en 1
        if (entry.intersectionRatio === 1) {
          setLockedAtOne(true);
          setIntersectionRatio(1);
          return;
        }
        // Si ya pasaste la sección (lockedAtOne), mantener zoom en 1
        if (lockedAtOne) {
          setIntersectionRatio(1);
          return;
        }
        // Si la sección está entrando desde arriba, animar progresivo
        setIntersectionRatio(entry.intersectionRatio);
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [lockedAtOne]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <motion.img
          src={imageUrl}
          alt={alt}
          className="snap-center w-full min-h-screen object-cover"
          style={{
            willChange: "transform",
          }}
          animate={{
            scale: Math.max(2.2 - 1.2 * intersectionRatio, 1),
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      {/* Overlay */}
      <div
        className={`absolute inset-0 w-full h-full z-10 pointer-events-none ${overlayClassName}`}
      />
      {/* Optional children */}
      {children && (
        <div className="relative z-20 w-full flex items-center justify-center">
          {children}
        </div>
      )}
    </section>
  );
};

export default ImageWithZoomSection;
