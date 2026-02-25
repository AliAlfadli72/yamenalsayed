import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  build: {
    // ── Chunk splitting: each page → separate file
    rollupOptions: {
      output: {
        manualChunks: {
          // vendor chunk (React core)
          "vendor-react": ["react", "react-dom"],
          // routing
          "vendor-router": ["react-router-dom"],
          // animation (biggest lib)
          "vendor-motion": ["framer-motion"],
          // icons
          "vendor-icons": ["@iconify/react", "@mdi/react", "@mdi/js"],
        },
      },
    },
    // ── Minify with better compressor
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // remove console.log in production
        drop_debugger: true,
      },
    },
    // ── CSS is auto code-split per chunk
    cssCodeSplit: true,
    // ── Source map off in prod (saves size)
    sourcemap: false,
    // ── Chunk size warning threshold
    chunkSizeWarningLimit: 600,
  },

  // ── Dev server keeps fast HMR
  server: {
    hmr: true,
  },
});
