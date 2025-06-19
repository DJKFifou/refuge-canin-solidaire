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

export interface Dog {
	_type: "dog";
	_id: string;

	name: string;
	slug: Slug;

	dogprority: string;
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
