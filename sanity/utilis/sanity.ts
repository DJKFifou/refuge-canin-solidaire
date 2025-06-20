import { sanityClient } from "./sanity-client";
import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug } from "@sanity/types";
import groq from "groq";

//Blog
export async function getBlogs(): Promise<Blog[]> {
	return await sanityClient.fetch(
		groq`*[_type == "blog" && defined(slug.current)] | order(_createdAt desc)`,
	);
}

export async function getBlog(slug: string | null): Promise<Blog> {
	return await sanityClient.fetch(
		groq`*[_type == "blog" && slug.current == $slug][0]`,
		{
			slug,
		},
	);
}

export interface Blog {
	_type: "blog";
	_createdAt: string;
	title: string;
	slug: Slug;
	image?: ImageAsset & { alt?: string };
	subtitle?: string;
	description?: PortableTextBlock[];
	publishedAt: string;
}

//Dogo
export async function getDogs(): Promise<Dog[]> {
	return await sanityClient.fetch(
		groq`*[_type == "dog" && defined(slug.current)] | order(_createdAt desc)`,
	);
}
export async function getThreeDogs(): Promise<Dog[]> {
	return await sanityClient.fetch(
		groq`*[_type == "dog" && defined(slug.current)] | order(_createdAt desc)[0...3]`,
	);
}

export async function getDog(slug: string | null): Promise<Dog> {
	return await sanityClient.fetch(
		groq`*[_type == "dog" && slug.current == $slug][0]`,
		{
			slug,
		},
	);
}
export interface DogFilters {
	name?: string;
	gender?: string;
	breed?: string;
}

export async function getDogsWithFilters(
	filters: DogFilters = {},
): Promise<Dog[]> {
	let conditions = ['_type == "dog"', "defined(slug.current)"];
	let params: any = {};

	if (filters.name && filters.name.trim()) {
		conditions.push("name match $name");
		params.name = `*${filters.name.trim()}*`;
	}

	if (filters.gender && filters.gender.trim()) {
		conditions.push("gender == $gender");
		params.gender = filters.gender.trim();
	}
	if (filters.breed && filters.breed.trim()) {
		conditions.push("breed match $breed");
		params.breed = `*${filters.breed.trim()}*`;
	}

	const query = groq`*[${conditions.join(" && ")}] | order(_createdAt desc)`;

	return await sanityClient.fetch(query, params);
}

export async function getAvailableBreeds(): Promise<string[]> {
	const breeds = (await sanityClient.fetch(
		groq`*[_type == "dog" && defined(breed)] | order(breed asc).breed`,
	)) as string[];
	return [...new Set(breeds)].filter(Boolean);
}

export async function getAvailableGenders(): Promise<string[]> {
	const genders = (await sanityClient.fetch(
		groq`*[_type == "dog" && defined(gender)] | order(gender asc).gender`,
	)) as string[];
	return [...new Set(genders)].filter(Boolean);
}
export interface Dog {
	_type: "dog";
	_id: string;

	name: string;
	slug: Slug;

	dogprority: string;
	size: string;
	arrivalDate: string;
	age: number;
	weight: number;
	gender: string;
	breed: string;
	shortDescription: string;
	historyDescription: PortableTextBlock[];

	mainImage?: ImageAsset;
	gallery?: ImageAsset[];

	healthStatus: string;
	healthDescription?: PortableTextBlock[];

	needs: string;
	needsDescription?: PortableTextBlock[];

	affinities: string;
	affinitiesDescription?: PortableTextBlock[];

	care: string;
	healthCare?: PortableTextBlock[];
}
