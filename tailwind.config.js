/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "32px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1440px", // aumentar para pantallas grandes
        "2xl": "2200px", // permitir muy pantallas muy anchas
      },
    },
  },
  plugins: ["tw-animate-css"],
};
