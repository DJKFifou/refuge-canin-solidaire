import { sanityClient } from "sanity:client";
import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug } from "@sanity/types";
import groq from "groq";

export async function getBlogs(): Promise<Blog[]> {
	return await sanityClient.fetch(
		groq`*[_type == "blog" && defined(slug.current)] | order(_createdAt desc)`,
	);
}

export async function getBlog(slug: string): Promise<Blog> {
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
	body: PortableTextBlock[];
}
