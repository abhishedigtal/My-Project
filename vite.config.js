import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
<<<<<<< HEAD
      "@": path.resolve(__dirname, "src/assets"),
=======
      '@': path.resolve(__dirname, 'src/assets'),
>>>>>>> 9afe76ded022e433b56c3d153b28e95e7f63b457
    },
  },
});
