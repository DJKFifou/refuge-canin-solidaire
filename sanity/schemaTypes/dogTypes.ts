import { defineField, defineType } from "sanity";

export const dogTypes = defineType({
	name: "dog",
	title: "Nos chiens",
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
			title: "Image principale du chien",
			type: "image",
			options: { hotspot: true },
		}),
		defineField({
			name: "images",
			title: "Liste d'image",
			type: "array",
			of: [
				{
					type: "image",
					options: { hotspot: true },
				},
			],
		}),
		defineField({
			name: "breed",
			title: "Race du chien",
			type: "string",
			options: {
				list: [
					{ title: "Berger Allemand", value: "berger_allemand" },
					{ title: "Labrador Retriever", value: "labrador_retriever" },
					{ title: "Golden Retriever", value: "golden_retriever" },
					{ title: "Bouledogue Français", value: "bouledogue_francais" },
					{ title: "Beagle", value: "beagle" },
					{ title: "Caniche", value: "caniche" },
					{ title: "Rottweiler", value: "rottweiler" },
					{ title: "Yorkshire Terrier", value: "yorkshire_terrier" },
					{ title: "Boxer", value: "boxer" },
					{ title: "Siberian Husky", value: "siberian_husky" },
					{ title: "Dachshund", value: "dachshund" },
					{ title: "Doberman", value: "doberman" },
					{ title: "Shih Tzu", value: "shih_tzu" },
					{ title: "Chihuahua", value: "chihuahua" },
					{ title: "Cocker Spaniel", value: "cocker_spaniel" },
					{ title: "Bichon Frisé", value: "bichon_frise" },
					{ title: "Border Collie", value: "border_collie" },
					{ title: "Mastiff", value: "mastiff" },
					{ title: "Saint-Bernard", value: "saint_bernard" },
					{ title: "Akita Inu", value: "akita_inu" },
				],
			},
			validation: (rule) => rule.required(),
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
