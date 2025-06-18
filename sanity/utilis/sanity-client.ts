import { createClient } from "@sanity/client";

export const sanityClient = createClient({
	projectId: "a7jn423a",
	dataset: "production",
	useCdn: false,
});
