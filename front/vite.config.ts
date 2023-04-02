import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  server: {
    port: 8081,
    proxy: {
      "^/api/": {
        target: "http://localhost:8082",
      },
    },
  },
  envPrefix: "V_",
});
