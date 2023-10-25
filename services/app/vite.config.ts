import path from "path";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { loadEnv, defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  console.log(env)
  return {
    plugins: [react(), basicSsl()],
    base: "./",
    envDir: "./",
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
        "/local/": {
          //You can use https://sgl01646:8443/ for remote development with the instance in SG. You can also use https://openbis-empa-lab402.ethz.ch/openbis/webapp/eln-lims/ but be careful with creating objects
          target: `${env.VITE_OPENBIS_HOST}`,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => {
            const newPath = path.replace("/local", "");
            console.log(newPath);
            return newPath;
          },
        },
        "^/openbis-empa-(w+)/": {
          target: "https://openbis-empa-lab402.ethz.ch/",
          changeOrigin: true,
          secure: false,
          rewrite: (path) => {
            console.log(path);
            return path.replace(/^\/openbis-empa-(\w+)/, "/$1");
          },
        },
      },
    },
    test: {
      environment: "jsdom",
    },
  };
});
