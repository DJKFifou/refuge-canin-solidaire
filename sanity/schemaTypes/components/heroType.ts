import { defineField, defineType } from "sanity";

export const heroType = defineType({
	name: "hero",
	type: "object",
	title: "Section Héros",
	fields: [
		defineField({
			name: "title",
			title: "Titre",
			type: "string",
		}),
		defineField({
			name: "description",
			title: "description",
			type: "string",
		}),
		defineField({
			name: "image",
			title: "Image",
			type: "image",
			options: { hotspot: true },
			fields: [
				defineField({
					name: "alt",
					title: "Texte alternatif",
					type: "string",
				}),
			],
		}),
	],
});
