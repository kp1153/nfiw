// app/[category]/[slug]/page.js

import { getPost } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 3600;

export default async function PostPage({ params }) {
  const { category, slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            पोस्ट नहीं मिली / Post not found
          </h1>
          <Link
            href={`/${category}`}
            className="text-red-600 hover:text-red-700 font-medium"
          >
            ← वापस जाएं / Go back
          </Link>
        </div>
      </div>
    );
  }

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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href={`/${category}`}
          className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 font-medium"
        >
          <span className="mr-2">←</span> वापस जाएं / Go back
        </Link>

        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          {post.mainImageUrl && (
            <div className="relative h-96 w-full">
              <Image
                src={post.mainImageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          )}

          <div className="p-8 md:p-12">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getLanguageBadge(post.language).color}`}
                >
                  {getLanguageBadge(post.language).label}
                </span>
                {post.category && (
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category.title}
                  </span>
                )}
                <span className="text-sm text-gray-500">
                  {formatDate(post.publishedAt)}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {post.title}
              </h1>
            </div>

            {post.excerpt && (
              <p className="text-xl text-gray-600 mb-8 leading-relaxed border-l-4 border-red-600 pl-4 italic">
                {post.excerpt}
              </p>
            )}

            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {post.content}
              </div>
            </div>

            {post.link && (
              <div className="mt-8 pt-6 border-t">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
                >
                  {`मूल पोस्ट देखें / View original post →`}
                </a>
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
