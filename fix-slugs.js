const { createClient } = require("@sanity/client");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

// Hindi + Punjabi to Roman transliteration map
const devanagariToRoman = {
  // Hindi vowels
  अ: "a",
  आ: "aa",
  इ: "i",
  ई: "ee",
  उ: "u",
  ऊ: "oo",
  ए: "e",
  ऐ: "ai",
  ओ: "o",
  औ: "au",
  // Hindi consonants
  क: "k",
  ख: "kh",
  ग: "g",
  घ: "gh",
  ङ: "ng",
  च: "ch",
  छ: "chh",
  ज: "j",
  झ: "jh",
  ञ: "ny",
  ट: "t",
  ठ: "th",
  ड: "d",
  ढ: "dh",
  ण: "n",
  त: "t",
  थ: "th",
  द: "d",
  ध: "dh",
  न: "n",
  प: "p",
  फ: "ph",
  ब: "b",
  भ: "bh",
  म: "m",
  य: "y",
  र: "r",
  ल: "l",
  व: "v",
  श: "sh",
  ष: "sh",
  स: "s",
  ह: "h",
  // Matras
  "ा": "a",
  "ि": "i",
  "ी": "ee",
  "ु": "u",
  "ू": "oo",
  "े": "e",
  "ै": "ai",
  "ो": "o",
  "ौ": "au",
  "ं": "m",
  "ः": "h",
  "्": "",
  "ँ": "n",
  // Punjabi specific
  ਅ: "a",
  ਆ: "aa",
  ਇ: "i",
  ਈ: "ee",
  ਉ: "u",
  ਊ: "oo",
  ਏ: "e",
  ਐ: "ai",
  ਓ: "o",
  ਔ: "au",
  ਕ: "k",
  ਖ: "kh",
  ਗ: "g",
  ਘ: "gh",
  ਙ: "ng",
  ਚ: "ch",
  ਛ: "chh",
  ਜ: "j",
  ਝ: "jh",
  ਞ: "ny",
  ਟ: "t",
  ਠ: "th",
  ਡ: "d",
  ਢ: "dh",
  ਣ: "n",
  ਤ: "t",
  ਥ: "th",
  ਦ: "d",
  ਧ: "dh",
  ਨ: "n",
  ਪ: "p",
  ਫ: "ph",
  ਬ: "b",
  ਭ: "bh",
  ਮ: "m",
  ਯ: "y",
  ਰ: "r",
  ਲ: "l",
  ਵ: "v",
  ਸ਼: "sh",
  ਸ: "s",
  ਹ: "h",
  // Punjabi matras
  "ਾ": "a",
  "ਿ": "i",
  "ੀ": "ee",
  "ੁ": "u",
  "ੂ": "oo",
  "ੇ": "e",
  "ੈ": "ai",
  "ੋ": "o",
  "ੌ": "au",
  "ੰ": "m",
  "੍": "",
  "ਂ": "n",
};

function transliterate(text) {
  let result = "";
  for (let char of text) {
    result += devanagariToRoman[char] || char;
  }
  return result
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
    .substring(0, 60);
}

async function fixSlugs() {
  const posts = await client.fetch('*[_type == "post"] { _id, title }');

  console.log(`🔧 Fixing ${posts.length} slugs...\n`);

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const slug = transliterate(post.title) || `post-${i + 1}`;

    await client
      .patch(post._id)
      .set({
        slug: { _type: "slug", current: slug },
      })
      .commit();

    console.log(
      `✅ ${post.title.substring(0, 30)}... → ${slug.substring(0, 40)}`
    );
  }

  console.log("\n✅ Done!");
}

fixSlugs();
