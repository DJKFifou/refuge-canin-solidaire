import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sanity from "@sanity/astro";
import vercel from "@astrojs/vercel";
import react from "@astrojs/react";

export default defineConfig({
	integrations: [
		react(),
		sanity({
			projectId: "a7jn423a",
			dataset: "production",
			useCdn: false,
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
	output: "server",
	adapter: vercel(),
});
