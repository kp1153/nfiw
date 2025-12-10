// lib/sanity.js

import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

// Fetch posts with pagination
export async function getPosts(language = "all", limit = 12, offset = 0) {
  const filter =
    language === "all"
      ? '*[_type == "post"]'
      : '*[_type == "post" && language == $language]';

  const posts = await client.fetch(
    `${filter} | order(publishedAt desc) [${offset}...${offset + limit}] {
      _id,
      title,
      "slug": slug.current,
      language,
      publishedAt,
      excerpt,
      content,
      mainImage,
      "mainImageUrl": mainImage.asset->url,
      category->{
        title,
        "slug": slug.current
      }
    }`,
    { language }
  );

  return posts;
}

// Get total count for pagination
export async function getPostsCount(language = "all") {
  const filter =
    language === "all"
      ? 'count(*[_type == "post"])'
      : 'count(*[_type == "post" && language == $language])';

  return await client.fetch(filter, { language });
}

// Fetch single post by slug
export async function getPost(slug) {
  const decodedSlug = decodeURIComponent(slug);

  return await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      language,
      publishedAt,
      content,
      excerpt,
      mainImage,
      "mainImageUrl": mainImage.asset->url,
      link,
      category->{
        title,
        "slug": slug.current
      }
    }`,
    { slug: decodedSlug }
  );
}

// Fetch all categories
export async function getCategories() {
  return await client.fetch(
    `*[_type == "category"] | order(title asc) {
      _id,
      title,
      "slug": slug.current,
      description
    }`
  );
}
