import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" keeps asset paths relative so the build works from any
// sub-path (GitHub Pages project sites) as well as a domain root.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
