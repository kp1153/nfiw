const { createClient } = require("@sanity/client");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function deleteAll() {
  console.log("🗑️ Deleting all posts...\n");

  const result = await client.delete({
    query: '*[_type == "post"]',
  });

  console.log(`✅ Deleted ${result.results.length} posts`);
}

deleteAll();
