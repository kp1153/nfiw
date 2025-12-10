const { createClient } = require("@sanity/client");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

function cleanTitle(title) {
  return title
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

async function fixTitles() {
  const posts = await client.fetch('*[_type == "post"]');

  console.log(`🔧 Fixing ${posts.length} posts...\n`);

  for (const post of posts) {
    const cleanedTitle = cleanTitle(post.title);

    if (cleanedTitle !== post.title) {
      await client.patch(post._id).set({ title: cleanedTitle }).commit();
      console.log(`✅ Fixed: ${cleanedTitle}`);
    }
  }

  console.log("\n✅ Done!");
}

fixTitles();
