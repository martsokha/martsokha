import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

const srcImport = new URL("./src/", import.meta.url);
const srcPath = fileURLToPath(srcImport);

// TODO: Replace Eslint & Prettier with Biome.
// BLOCKER: https://github.com/biomejs/biome/discussions/136
// BLOCKER: https://github.com/biomejs/biome/discussions/1254

// https://astro.build/config
export default defineConfig({
  site: "https://martsokha.com",
  integrations: [vue({ devtools: true }), sitemap(), mdx()],

  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light-default",
        dark: "github-dark-default",
      },
      transformers: [],
    },
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: { alias: { "@": srcPath } },
  },
});
