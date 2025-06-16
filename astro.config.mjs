// @ts-check
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	integrations: [
		sanity({
			projectId: "a7jn423a",
			dataset: "studio-refuge-canin-solidaire",
			// Set useCdn to false if you're building statically.
			useCdn: false,
		}),
	],
});
