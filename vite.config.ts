import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // GitHub Pages custom domain serves this site from the domain root —
  // not from /thedepco/. Use "/" so asset URLs resolve.
  base: "/",
  plugins: [react()],
});
