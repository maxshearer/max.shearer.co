import { defineConfig } from "vite";
import { globSync } from "glob";
import path from "path";

export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      input: globSync([
        path.resolve(__dirname, "./frontend/scripts/main.ts"),
        path.resolve(__dirname, "./frontend/styles/main.css"),
        path.resolve(__dirname, "./frontend/layouts/**/*.css"),
        path.resolve(__dirname, "./frontend/pages/**/*.css"),
      ]),
      output: {
        assetFileNames(chunkInfo) {
          const ext = chunkInfo.names[0]?.split(".").pop();

          switch (ext) {
            case "woff2":
              return "fonts/[name].[hash].[ext]";
            case "png":
            case "jpg":
            case "jpeg":
            case "avif":
            case "webp":
              return "images/[name].[hash].[ext]";
            case "css":
              const fileName = chunkInfo.originalFileNames[0];
              const isLayout = fileName?.includes("/layouts/");
              const isPage = fileName?.includes("/pages/");

              if (isLayout) {
                return "styles/layout.[name].[hash].[ext]";
              }

              if (isPage) {
                return "styles/page.[name].[hash].[ext]";
              }

              return "styles/[name].[hash].[ext]";
            default:
              return "[name].[hash].[ext]";
          }
        },
        entryFileNames: "scripts/[name].[hash].js",
      },
    },
  },
});
