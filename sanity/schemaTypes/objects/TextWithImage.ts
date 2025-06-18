import { defineField, defineType } from "sanity";

export const textWithIllustrationType = defineType({
	name: "textIllustration",
	type: "object",
	title: "Texte avec illustration",
	fields: [
		defineField({
			name: "heading",
			title: "Titre principal",
			type: "string",
		}),
		defineField({
			name: "tagline",
			title: "Slogan",
			type: "string",
		}),
		defineField({
			name: "excerpt",
			title: "Extrait",
			type: "text",
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
