/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta funcional
        background: "#001F3E", // Midnight Blue
        foreground: "#E9EAE1", // Pearl
        primary: "#05D16E", // Malachite
        secondary: "#00804C", // Leaf Green
        accent: "#1E4990", // Nuit

        // Paleta de marca (opcional si querés usar por nombre también)
        midnight: "#001F3E",
        malachite: "#05D16E",
        pearl: "#E9EAE1",
        nuit: "#1E4990",
        "leaf-green": "#00804C",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
