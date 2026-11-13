import { resolve } from "path";

export default {
  root: resolve(__dirname, "src"),

  // Change the base path to your repository name
  base: process.env.GITHUB_ACTIONS ? "/git-practice-cli/" : "/",

  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    port: 8080,
  },
};
