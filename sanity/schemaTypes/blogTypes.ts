import { defineField, defineType } from "sanity";

export const blogTypes = defineType({
	name: "blog",
	title: "Article de blog",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Titre",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Identifiant (slug)",
			type: "slug",
			options: { source: "title", maxLength: 96 },
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "image",
			title: "Image principale",
			type: "image",
			options: { hotspot: true },
		}),
		defineField({
			name: "subtitle",
			title: "Sous-titre",
			type: "string",
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "array",
			of: [{ type: "block" }],
		}),

		defineField({
			name: "publishedAt",
			title: "Date de publication",
			type: "datetime",
			initialValue: () => new Date().toISOString(),
			validation: (rule) => rule.required(),
		}),
	],
});
