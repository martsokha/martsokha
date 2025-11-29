import { fileURLToPath } from "node:url";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

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
			defaultColor: "light",
			themes: {
				light: "catppuccin-latte",
				dark: "aurora-x",
			},
			wrap: true,
			transformers: [],
		},
	},

	vite: {
		plugins: [tailwindcss()],
		resolve: { alias: { "@": srcPath } },
	},
});
