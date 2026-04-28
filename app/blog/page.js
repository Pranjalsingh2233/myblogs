import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getAllBlogs, getAllCategories, getBlogsByCategory } from "@/lib/blog";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY, POST_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";

export const metadata = {
  title: "All Essays — The Margin",
  description: "Browse every essay published in The Margin journal.",
};

const categoryColors = {
  All: "border-ink-600 bg-ink-700 text-cream-100",
  Travel: "border-amber-600 bg-amber-600 text-white",
  Design: "border-blue-600 bg-blue-600 text-white",
  Food: "border-orange-600 bg-orange-600 text-white",
  Culture: "border-purple-600 bg-purple-600 text-white",
  Writing: "border-teal-600 bg-teal-600 text-white",
};

const categoryOutlineColors = {
  All: "border-ink-300 text-ink-500 hover:border-ink-600 hover:bg-ink-700 hover:text-cream-100",
  Travel:
    "border-amber-300 text-amber-700 hover:border-amber-600 hover:bg-amber-600 hover:text-white",
  Design:
    "border-blue-300 text-blue-700 hover:border-blue-600 hover:bg-blue-600 hover:text-white",
  Food: "border-orange-300 text-orange-700 hover:border-orange-600 hover:bg-orange-600 hover:text-white",
  Culture:
    "border-purple-300 text-purple-700 hover:border-purple-600 hover:bg-purple-600 hover:text-white",
  Writing:
    "border-teal-300 text-teal-700 hover:border-teal-600 hover:bg-teal-600 hover:text-white",
};

export default async function BlogPage({ searchParams }) {
  const selectedCategory = (await searchParams?.category) ?? "All";
  const [categories, blogs] = await Promise.all([
    getAllCategories(),
    getBlogsByCategory(selectedCategory),
  ]);

  const posts = await client.fetch(POSTS_QUERY);
  const post = await client.fetch(POST_QUERY, { slug: "my-first-blog" });

  return (
    <>
      <main>
        {/* ─── PAGE HEADER ─── */}
        <section className="bg-cream-50 border-b border-cream-200">
          <div className="container mx-auto px-6 max-w-7xl py-14 md:py-18">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-forest-500" />
                <span className="font-sans text-xs uppercase tracking-widest text-forest-600 font-medium">
                  The Archive
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-ink-700 leading-tight mb-4">
                All{" "}
                {selectedCategory !== "All" ? (
                  <span className="italic text-forest-600">
                    {selectedCategory}
                  </span>
                ) : (
                  <span className="italic">Essays</span>
                )}
              </h1>
              <p className="font-body text-ink-400 leading-relaxed">
                {posts.length} essay{posts.length !== 1 ? "s" : ""}{" "}
                {selectedCategory !== "All"
                  ? `on ${selectedCategory.toLowerCase()}`
                  : "in the archive"}
                . Take your time.
              </p>
            </div>
          </div>
        </section>

        {/* ─── CATEGORY FILTER ─── */}
        <section className="sticky top-16 z-40 bg-cream-100/95 backdrop-blur-sm border-b border-cream-200">
          <div className="container mx-auto px-6 max-w-7xl py-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
              <span className="font-sans text-xs text-ink-300 uppercase tracking-widest flex-shrink-0 mr-2">
                Filter:
              </span>
              {categories.map((cat) => {
                const isActive = cat === selectedCategory;
                const activeClass =
                  categoryColors[cat] ??
                  "border-gray-600 bg-gray-600 text-white";
                const outlineClass =
                  categoryOutlineColors[cat] ??
                  "border-gray-300 text-gray-700 hover:bg-gray-600 hover:text-white";

                return (
                  <Link
                    key={cat}
                    href={cat === "All" ? "/blog" : `/blog?category=${cat}`}
                    className={`flex-shrink-0 font-sans text-xs font-medium px-4 py-1.5 rounded-full border transition-all duration-200 ${
                      isActive ? activeClass : outlineClass
                    }`}
                  >
                    {cat}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── BLOG GRID ─── */}
        <section className="container mx-auto px-6 max-w-7xl py-12 md:py-16">
          {posts.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-display text-2xl text-ink-400 italic mb-4">
                No blogs in this category yet.
              </p>
              <Link href="/blog" className="btn-outline">
                View all blogs
              </Link>
            </div>
          ) : (
            <>
              {/* Featured first card (larger) */}
              {selectedCategory === "All" && posts.length > 0 && (
                <div className="mb-8">
                  <BlogCard blog={posts[0]} featured={true} />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {(selectedCategory === "All" ? posts.slice(1) : posts).map(
                  (blog) => (
                    <BlogCard key={blog.slug} blog={blog} />
                  ),
                )}
              </div>
            </>
          )}
        </section>

        {/* ─── BOTTOM CTA ─── */}
        <section className="bg-cream-50 py-14 border-t border-cream-200">
          <div className="container mx-auto px-6 max-w-7xl text-center">
            <h3 className="font-display text-2xl font-bold text-ink-700 mb-3">
              Never miss an essay
            </h3>
            <p className="font-body text-ink-400 mb-6 max-w-md mx-auto">
              Subscribe and get new pieces delivered directly to your inbox. No
              spam, ever.
            </p>
            <Link href="/" className="btn-primary">
              Subscribe to The Margin
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
