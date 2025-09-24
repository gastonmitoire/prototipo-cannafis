import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

// https://vite.dev/config/
const __dirname = path.dirname(fileURLToPath(import.meta.url));
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
  "@": path.resolve(__dirname, "src"),
    },
  },
});
