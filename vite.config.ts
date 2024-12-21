import { defineConfig } from "vite";
import { globSync } from "glob";

export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      input: globSync([
        "./src/scripts/main.ts",
        "./src/styles/main.css",
        "./src/pages/**/*.css",
        "./src/layouts/**/*.css",
        "./src/components/**/*.css",
      ]),
    },
  },
});
