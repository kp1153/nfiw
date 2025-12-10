const https = require("https");
const fs = require("fs");

// URLs to scrape (manually add more if needed)
const urls = [
  "https://nfiw.wordpress.com/",
  "https://nfiw.wordpress.com/page/2/",
  "https://nfiw.wordpress.com/page/3/",
  "https://nfiw.wordpress.com/page/4/",
  "https://nfiw.wordpress.com/page/5/",
  "https://nfiw.wordpress.com/page/6/",
  "https://nfiw.wordpress.com/page/7/",
  "https://nfiw.wordpress.com/page/8/",
  "https://nfiw.wordpress.com/page/9/",
  "https://nfiw.wordpress.com/page/10/",
  "https://nfiw.wordpress.com/page/11/",
];

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

function extractPosts(html) {
  const posts = [];

  // Extract post titles and links
  const titleRegex =
    /<h2[^>]*class="entry-title"[^>]*>.*?<a[^>]*href="([^"]+)"[^>]*>([^<]+)<\/a>/gs;
  const matches = [...html.matchAll(titleRegex)];

  matches.forEach((match) => {
    posts.push({
      url: match[1],
      title: match[2].trim(),
    });
  });

  return posts;
}

function detectLanguage(text) {
  const hindiRegex = /[\u0900-\u097F]/;
  const punjabiRegex = /[\u0A00-\u0A7F]/;

  if (punjabiRegex.test(text)) return "punjabi";
  if (hindiRegex.test(text)) return "hindi";
  return "english";
}

function cleanHTML(html) {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, "-")
    .replace(/&#8212;/g, "—")
    .replace(/\s+/g, " ")
    .trim();
}

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

async function fetchPostContent(url) {
  try {
    const html = await fetchPage(url);

    // Extract content
    const contentMatch = html.match(
      /<div[^>]*class="entry-content"[^>]*>(.*?)<\/div>/s
    );
    const dateMatch = html.match(/<time[^>]*datetime="([^"]+)"/);

    const content = contentMatch ? cleanHTML(contentMatch[1]) : "";
    const date = dateMatch ? dateMatch[1] : new Date().toISOString();

    return { content, date };
  } catch (error) {
    console.error(`Error fetching ${url}:`, error.message);
    return { content: "", date: new Date().toISOString() };
  }
}

async function main() {
  console.log("🚀 Starting HTML scraping...\n");

  const allPosts = [];

  // Step 1: Get all post URLs
  for (const url of urls) {
    console.log(`Fetching: ${url}`);
    try {
      const html = await fetchPage(url);
      const posts = extractPosts(html);
      allPosts.push(...posts);
      console.log(`✅ Found ${posts.length} posts`);
    } catch (error) {
      console.error(`❌ Error: ${error.message}`);
    }
  }

  console.log(`\n📊 Total post URLs found: ${allPosts.length}\n`);

  // Step 2: Fetch content for each post
  const sanityData = [];

  for (let i = 0; i < allPosts.length; i++) {
    const post = allPosts[i];
    console.log(`[${i + 1}/${allPosts.length}] Fetching: ${post.title}`);

    const { content, date } = await fetchPostContent(post.url);
    const language = detectLanguage(post.title + content);

    // Create slug from URL
    const slug = post.url.split("/").filter(Boolean).pop();

    sanityData.push({
      _type: "post",
      title: post.title,
      slug: slug,
      language: language,
      publishedAt: date,
      excerpt: content.substring(0, 200),
      content: content,
      link: post.url,
    });

    // Small delay to avoid overwhelming server
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  // Save to JSON
  fs.writeFileSync("sanity-import.json", JSON.stringify(sanityData, null, 2));

  console.log("\n✅ Data saved to sanity-import.json");
  console.log("\n📈 Language breakdown:");

  const langCount = {
    hindi: sanityData.filter((p) => p.language === "hindi").length,
    english: sanityData.filter((p) => p.language === "english").length,
    punjabi: sanityData.filter((p) => p.language === "punjabi").length,
  };

  console.log(`   Hindi: ${langCount.hindi}`);
  console.log(`   English: ${langCount.english}`);
  console.log(`   Punjabi: ${langCount.punjabi}`);
}

main();
