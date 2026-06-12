import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    // Code splitting configuration
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: {
          // React core - rarely changes
          "vendor-react": ["react", "react-dom"],
          // UI components - changes occasionally
          "vendor-ui": ["@tanstack/react-query", "wouter"],
          // Utility libraries
          "vendor-utils": ["clsx", "tailwind-merge", "class-variance-authority"],
        },
        // Chunk naming for better debugging
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name || "";
          if (/\.(webp|png|jpe?g|gif|svg)$/i.test(info)) {
            return "assets/images/[name]-[hash][extname]";
          }
          if (/\.css$/i.test(info)) {
            return "assets/css/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
    // Target modern browsers for smaller bundles
    target: "es2020",
    // Minification
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Source maps for production debugging (can be disabled for max speed)
    sourcemap: false,
    // CSS optimization
    cssMinify: true,
    // Asset inline threshold (inline small assets)
    assetsInlineLimit: 4096,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "wouter", "@tanstack/react-query"],
  },
});
