import { formType } from "./objects/formType";
import { defineArrayMember, defineField, defineType } from "sanity";

export const pageTypes = defineType({
	name: "page",
	type: "document",
	title: "Page",
	fields: [
		defineField({ name: "titre", type: "string" }),
		defineField({ name: "MataDescription", type: "string" }),
		defineField({
			name: "pageBuilder",
			type: "array",
			title: "Constructeur de page",
			of: [
				defineArrayMember({
					name: "hero",
					type: "hero",
				}),
				defineArrayMember({
					name: "textIllustration",
					type: "textIllustration",
				}),
				defineArrayMember({
					name: "Gallerie d'image",
					type: "gallery",
				}),
				defineArrayMember({
					name: "video",
					type: "video",
				}),
			],
		}),
	],
});
