import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
    hmr: true
  },
  plugins: [react(), tailwindcss()],
});
