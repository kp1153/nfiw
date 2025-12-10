// app/[category]/page.js

import { getPosts, getPostsCount } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 3600;

export default async function CategoryPage({ params, searchParams }) {
  const { category } = await params;
  const resolvedSearchParams = await searchParams;

  const page = parseInt(resolvedSearchParams?.page || "1");
  const language = resolvedSearchParams?.language || "all";
  const limit = 12;
  const offset = (page - 1) * limit;

  const posts = await getPosts(language, limit, offset);
  const totalPosts = await getPostsCount(language);
  const totalPages = Math.ceil(totalPosts / limit);

  const categoryTitles = {
    news: { hi: "समाचार", en: "News" },
    campaigns: { hi: "अभियान", en: "Campaigns" },
    "state-reports": { hi: "राज्य रिपोर्ट", en: "State Reports" },
    resources: { hi: "संसाधन", en: "Resources" },
  };

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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {categoryTitles[category]?.hi} / {categoryTitles[category]?.en}
          </h1>
          <div className="h-1 w-20 bg-red-600 rounded"></div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className="text-sm font-medium text-gray-700 mr-2">
              भाषा चुनें / Select Language:
            </span>
            {[
              { value: "all", label: "सभी / All" },
              { value: "hindi", label: "हिन्दी" },
              { value: "english", label: "English" },
              { value: "punjabi", label: "ਪੰਜਾਬੀ" },
            ].map((lang) => (
              <Link
                key={lang.value}
                href={`/${category}?language=${lang.value}`}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  language === lang.value
                    ? "bg-red-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {lang.label}
              </Link>
            ))}
          </div>
        </div>

        {posts.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {posts.map((post) => (
                <Link key={post._id} href={`/${category}/${post.slug}`}>
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
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2">
                {page > 1 && (
                  <Link
                    href={`/${category}?page=${page - 1}&language=${language}`}
                    className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow hover:shadow-md transition font-medium"
                  >
                    ← पिछला
                  </Link>
                )}
                <div className="flex gap-2">
                  {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (page <= 3) {
                      pageNum = i + 1;
                    } else if (page >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = page - 2 + i;
                    }
                    return (
                      <Link
                        key={pageNum}
                        href={`/${category}?page=${pageNum}&language=${language}`}
                        className={`px-4 py-2 rounded-lg font-medium transition ${
                          page === pageNum
                            ? "bg-red-600 text-white shadow-md"
                            : "bg-white text-gray-700 hover:bg-gray-100 shadow"
                        }`}
                      >
                        {pageNum}
                      </Link>
                    );
                  })}
                </div>
                {page < totalPages && (
                  <Link
                    href={`/${category}?page=${page + 1}&language=${language}`}
                    className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow hover:shadow-md transition font-medium"
                  >
                    अगला →
                  </Link>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              कोई पोस्ट नहीं मिली / No posts found
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
