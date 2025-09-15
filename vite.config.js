import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1500, // remove chunk warnings
  },
  server: {
    historyApiFallback: true, // handle client-side routes in dev
  },
});
