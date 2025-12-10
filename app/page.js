// app/page.js

import { getPosts } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 3600;

export default async function HomePage() {
  const posts = await getPosts("all", 7, 0);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("hi-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const getLanguageBadge = (lang) => {
    const badges = {
      hindi: { label: "हिन्दी", color: "bg-orange-100 text-orange-700" },
      english: { label: "English", color: "bg-blue-100 text-blue-700" },
      punjabi: { label: "ਪੰਜਾਬੀ", color: "bg-purple-100 text-purple-700" },
    };
    return badges[lang] || badges.hindi;
  };

  const featuredPost = posts[0];
  const recentPosts = posts.slice(1);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              "Denial of Justice, is Violence"
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-red-100">
              "न्याय से वंचित करना, हिंसा है"
            </p>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-red-50">
              Fighting for women's rights, justice, and equality since 1954
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="/campaigns"
                className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition shadow-lg"
              >
                Join Our Campaign / अभियान में शामिल हों
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition"
              >
                Know More / और जानें
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post */}
        {featuredPost && featuredPost.category && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">
              मुख्य समाचार / Featured News
            </h2>
            <Link href={`/${featuredPost.category.slug}/${featuredPost.slug}`}>
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2 relative h-80">
                    {featuredPost.mainImageUrl ? (
                      <Image
                        src={featuredPost.mainImageUrl}
                        alt={featuredPost.title}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="h-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                        <span className="text-white text-6xl font-bold opacity-20">
                          NFIW
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getLanguageBadge(featuredPost.language).color}`}
                      >
                        {getLanguageBadge(featuredPost.language).label}
                      </span>
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {featuredPost.category.title}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-red-600 transition">
                      {featuredPost.title}
                    </h3>
                    {featuredPost.excerpt && (
                      <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between mt-6">
                      <span className="text-sm text-gray-500">
                        {formatDate(featuredPost.publishedAt)}
                      </span>
                      <span className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition font-semibold inline-flex items-center gap-2">
                        पढ़ें / Read →
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </section>
        )}

        {/* Recent Posts Grid */}
        {recentPosts.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-red-600 pl-4">
                ताज़ा अपडेट / Recent Updates
              </h2>
              <Link
                href="/news"
                className="text-red-600 hover:text-red-700 font-semibold flex items-center gap-1"
              >
                सभी देखें / View All →
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map(
                (post) =>
                  post.category && (
                    <Link
                      key={post._id}
                      href={`/${post.category.slug}/${post.slug}`}
                    >
                      <article className="bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300 overflow-hidden group h-full">
                        <div className="h-48 relative overflow-hidden">
                          {post.mainImageUrl ? (
                            <Image
                              src={post.mainImageUrl}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          ) : (
                            <div className="h-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                              <span className="text-white text-4xl font-bold opacity-30">
                                NFIW
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="p-5">
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className={`px-2 py-1 rounded text-xs font-semibold ${getLanguageBadge(post.language).color}`}
                            >
                              {getLanguageBadge(post.language).label}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition">
                            {post.title}
                          </h3>
                          {post.excerpt && (
                            <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                              {post.excerpt}
                            </p>
                          )}
                          <span className="text-xs text-gray-500">
                            {formatDate(post.publishedAt)}
                          </span>
                        </div>
                      </article>
                    </Link>
                  )
              )}
            </div>
          </section>
        )}

        {/* If no posts */}
        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">
              अभी कोई पोस्ट नहीं है / No posts yet
            </p>
            <p className="text-gray-400">Sanity Studio में जाकर posts बनाएं</p>
          </div>
        )}
      </div>
    </div>
  );
}
