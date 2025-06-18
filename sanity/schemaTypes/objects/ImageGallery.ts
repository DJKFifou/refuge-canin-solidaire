import { defineField, defineType } from "sanity";

export const imageGalleryType = defineType({
	name: "gallery",
	type: "object",
	title: "Gallerie d'image",
	fields: [
		{
			name: "images",
			type: "array",
			of: [
				defineField({
					name: "image",
					type: "image",
					options: { hotspot: true },
					fields: [
						{
							name: "alt",
							type: "string",
							title: "Texte Alternative",
						},
					],
				}),
			],
		},
	],
});
