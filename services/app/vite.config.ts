import { defineConfig } from "vitest/config";
import path from "path";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";
console.log("Running vite.config.ts");
export default defineConfig({
  plugins: [react(), basicSsl()],
  base: "./",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".css", ".jsx"],
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      v3api: path.resolve(__dirname, "./lib/v3api/js"),
    },
  },
  server: {
    origin: "https://localhost:5173/",
    cors: {
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      origin: "*",
      credentials: true,
      allowedHeaders: ["Content-Type", "Authorization"],
      exposedHeaders: ["Content-Type", "Authorization"],
    },
    proxy: {
      configure: {
        configure(proxy, options) {
          console.log("configure", proxy, options);
          proxy.on("proxyReq", (proxyReq, req, res, options) => {
            console.error("proxyReq", proxyReq, req, res, options);
          });
        },
      },
      "/openbis/": {
        //You can use https://sgl01646:8443/ for remote development with the instance in SG. You can also use https://openbis-empa-lab402.ethz.ch/openbis/webapp/eln-lims/ but be careful with creating objects
        target: "https://localhost:8445/",
        changeOrigin: true,
        secure: false,
      },
      "/openbis-empa-lab402/": {
        target: "https://openbis-empa-lab402.ethz.ch/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  test: {
    environment: "jsdom",
  },
});
