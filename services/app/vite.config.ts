import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl'
console.log("Running vite.config.ts");
export default defineConfig({
    plugins: [react(), basicSsl()],
    base: './',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', ".css", '.jsx'],
        alias: {
            '@src': path.resolve(__dirname,"./src"),
            "v3api": path.resolve(__dirname, "./lib/v3api/js"),
        },
    },
    server: {
        proxy: {
            '/openbis/': {
                target: 'https://localhost:8445/',
                changeOrigin: false,
                secure: false
            }
        }
    }
});