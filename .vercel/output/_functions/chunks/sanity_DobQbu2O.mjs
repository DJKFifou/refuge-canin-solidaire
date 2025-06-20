import imageUrlBuilder from '@sanity/image-url';
import { createClient } from '@sanity/client';
import groq from 'groq';

const sanityClient = createClient({
  projectId: "a7jn423a",
  dataset: "production",
  useCdn: false
});

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

async function getBlogs() {
  return await sanityClient.fetch(
    groq`*[_type == "blog" && defined(slug.current)] | order(_createdAt desc)`
  );
}
async function getBlog(slug) {
  return await sanityClient.fetch(
    groq`*[_type == "blog" && slug.current == $slug][0]`,
    {
      slug
    }
  );
}
async function getThreeDogs() {
  return await sanityClient.fetch(
    groq`*[_type == "dog" && defined(slug.current)] | order(_createdAt desc)[0...3]`
  );
}
async function getDog(slug) {
  return await sanityClient.fetch(
    groq`*[_type == "dog" && slug.current == $slug][0]`,
    {
      slug
    }
  );
}
async function getDogsWithFilters(filters = {}) {
  let conditions = ['_type == "dog"', "defined(slug.current)"];
  let params = {};
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
async function getAvailableBreeds() {
  const breeds = await sanityClient.fetch(
    groq`*[_type == "dog" && defined(breed)] | order(breed asc).breed`
  );
  return [...new Set(breeds)].filter(Boolean);
}
async function getAvailableGenders() {
  const genders = await sanityClient.fetch(
    groq`*[_type == "dog" && defined(gender)] | order(gender asc).gender`
  );
  return [...new Set(genders)].filter(Boolean);
}

export { getDogsWithFilters as a, getAvailableBreeds as b, getAvailableGenders as c, getBlogs as d, getThreeDogs as e, getDog as f, getBlog as g, urlFor as u };
