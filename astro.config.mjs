import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sanity from "@sanity/astro";

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
});
