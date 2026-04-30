import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export const metadata = {
  title: "All Essays — The Margin",
  description: "Browse every essay published in The Margin journal.",
};

export default async function BlogPage({ searchParams }) {
  // const selectedCategory = (await searchParams?.category);

  const posts = await client.fetch(POSTS_QUERY);

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
                All Blogs
              </h1>
              <p className="font-body text-ink-400 leading-relaxed">
                {posts.length} blog{posts.length !== 1 ? "s" : ""} . Take your
                time.
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
              {posts.length > 0 && (
                <div className="mb-8">
                  <BlogCard blog={posts[0]} featured={true} />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.slice(1).map((blog) => (
                  <BlogCard key={blog.slug} blog={blog} />
                ))}
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
