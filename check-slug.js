const { createClient } = require("@sanity/client");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function checkSlug() {
  const posts = await client.fetch(
    '*[_type == "post" && language == "hindi"][0..5] { title, "slug": slug.current }'
  );
  console.log(posts);
}

checkSlug();
