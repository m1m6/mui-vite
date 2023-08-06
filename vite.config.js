import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginRequire from "vite-plugin-require";
import { VitePWA } from "vite-plugin-pwa";
import loadVersion from "vite-plugin-package-version";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        loadVersion(),
        vitePluginRequire({
            // @fileRegex RegExp
            // optional：default file processing rules are as follows
            // fileRegex:/(.jsx?|.tsx?|.vue)$/
        }),
        VitePWA({
            registerType: "autoUpdate",
            injectRegister: "auto",
            devOptions: {
                enabled: true,
            },
        }),
    ],
    server: {
        port: "3000",
    },
    resolve: {
        alias: {
            "@mui/styled-engine": "@mui/styled-engine-sc",
        },
    },
    build: {
        outDir: "build",
    },
});
