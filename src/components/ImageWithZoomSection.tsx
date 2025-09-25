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
  const [intersectionRatio, setIntersectionRatio] = React.useState(0);
  // Guardar el último intersectionRatio máximo alcanzado (para clamp)
  const lastRatio = React.useRef(0);
  const lastScrollY = React.useRef(window.scrollY);
  React.useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        const currentScrollY = window.scrollY;
        const scrollingUp = currentScrollY < lastScrollY.current;
        lastScrollY.current = currentScrollY;
        if (scrollingUp) {
          // Si sube, actualizar el ratio normalmente (zoom vuelve a crecer)
          setIntersectionRatio(entry.intersectionRatio);
          lastRatio.current = entry.intersectionRatio;
        } else {
          // Si baja, clamp a 1 como mínimo
          setIntersectionRatio(Math.max(entry.intersectionRatio, 1));
        }
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
