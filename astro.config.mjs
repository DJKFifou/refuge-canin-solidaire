import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sanity from "@sanity/astro";

import vercel from "@astrojs/vercel";

export default defineConfig({
	integrations: [
		sanity({
			projectId: "a7jn423a",
			dataset: "studio-refuge-canin-solidaire",
			useCdn: false,
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
	output: "server",
	adapter: vercel(),
});
