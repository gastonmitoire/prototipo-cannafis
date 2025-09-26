import React from "react";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  heading?: boolean; // Si es true, es un título de sección grande; si es false, es un título general más chico
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({
  heading = false,
  children,
  className = "",
  ...props
}) => {
  const base = heading
    ? "text-5xl md:text-6xl font-extrabold tracking-tight text-white/80 mb-6 uppercase"
    : "text-lg md:text-xl font-bold tracking-tight text-white/80 mb-2 uppercase";
  return (
    <h2 className={`${base} ${className}`} {...props}>
      {children}
    </h2>
  );
};

export default Title;
