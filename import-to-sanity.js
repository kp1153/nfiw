const { createClient } = require("@sanity/client");
const fs = require("fs");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function importData() {
  console.log("🚀 Starting Sanity import...\n");

  const data = JSON.parse(fs.readFileSync("sanity-import.json", "utf8"));

  console.log(`📊 Total posts to import: ${data.length}\n`);

  let imported = 0;
  let failed = 0;

  for (let i = 0; i < data.length; i++) {
    const post = data[i];

    try {
      await client.create({
        _type: "post",
        title: post.title,
        slug: {
          _type: "slug",
          current: post.slug,
        },
        language: post.language,
        publishedAt: post.publishedAt,
        content: post.content,
        link: post.link,
      });

      imported++;
      console.log(
        `✅ [${i + 1}/${data.length}] ${post.title.substring(0, 50)}...`
      );
    } catch (error) {
      failed++;
      console.error(`❌ [${i + 1}/${data.length}] Failed: ${error.message}`);
    }
  }

  console.log(`\n✅ Import complete!`);
  console.log(`   Imported: ${imported}`);
  console.log(`   Failed: ${failed}`);
}

importData();
