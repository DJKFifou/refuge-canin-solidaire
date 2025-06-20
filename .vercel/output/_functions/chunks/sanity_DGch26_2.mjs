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
async function getDogs() {
  return await sanityClient.fetch(
    groq`*[_type == "dog" && defined(slug.current)] | order(_createdAt desc)`
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

export { getDogs as a, getBlogs as b, getThreeDogs as c, getDog as d, getBlog as g, urlFor as u };
