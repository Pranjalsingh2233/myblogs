import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { POSTS_QUERY,FEATURED_POSTS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export const metadata = {
  title: "The Margin — A Journal of Curious Minds",
  description:
    "Essays on travel, design, food, culture, and the art of paying attention.",
};

export default async function HomePage() {
  const featuredPosts = await client.fetch(FEATURED_POSTS_QUERY);
  console.log(featuredPosts);
  const posts = await client.fetch(POSTS_QUERY, {
    category: "",
    start: 0,
    end: 3,
  });

  return (
    <>
      <main>
        {/* ─── HERO SECTION ─── */}
        <section className="relative overflow-hidden bg-forest-800 text-cream-100">
          {/* Background texture */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />

          <div className="container mx-auto px-6 max-w-7xl py-20 md:py-20 relative">
            <div className="max-w-3xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-forest-400" />
                <span className="font-sans text-xs uppercase tracking-widest text-forest-300 font-medium">
                  Build Smarter. Learn Faster. Stay Ahead.
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] text-cream-100 mb-6 text-balance">
                Blogs at{" "}
                <span className="italic text-forest-300">the edge</span> of
                attention
              </h1>

              <p className="font-body text-lg md:text-xl text-cream-300 leading-relaxed mb-10 max-w-xl">
                Discover insights on web development, AI, and modern tech
                trends—crafted for developers who want to grow.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/blog"
                  className="btn-primary bg-cream-100 text-forest-800 hover:bg-cream-200 px-7 py-3 text-sm"
                >
                  Explore all blogs
                </Link>
                <Link
                  href={`/blog`}
                  className="inline-flex items-center gap-2 font-sans text-sm font-medium text-cream-300 hover:text-cream-100 transition-colors"
                >
                  Read the latest
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M8.5 4L13 8l-4.5 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Stats row */}
            <div className="mt-16 pt-8 border-t border-forest-700 flex flex-wrap gap-8">
              {[
                { value: "6", label: "Essays published" },
                { value: "5", label: "Topics covered" },
                { value: "3", label: "Contributing writers" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-bold text-cream-100">
                    {stat.value}
                  </p>
                  <p className="font-sans text-xs text-forest-300 mt-1 tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FEATURED ESSAY ─── */}
        <section className="container mx-auto px-6 max-w-7xl py-10 md:py-10">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-display text-3xl font-bold text-ink-700">
                Featured Blogs
              </h2>
              <p className="font-body text-sm text-ink-300 mt-1">
                Our editors' pick of the moment
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden md:inline-flex items-center gap-2 font-sans text-sm text-forest-600 hover:text-forest-700 font-medium transition-colors"
            >
              View all
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7h8M7.5 3.5L11 7l-3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {featuredPosts.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} featured={true} />
          ))}
        </section>

        {/* ─── LATEST POSTS GRID ─── */}
        <section className="bg-cream-50 py-16 md:py-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="font-display text-3xl font-bold text-ink-700">
                  Latest Blogs
                </h2>
                <p className="font-body text-sm text-ink-300 mt-1">
                  Fresh perspectives, thoughtfully written
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden md:inline-flex items-center gap-2 font-sans text-sm text-forest-600 hover:text-forest-700 font-medium transition-colors"
              >
                All blogs
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 7h8M7.5 3.5L11 7l-3.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((blog) => (
                <BlogCard key={blog.slug} blog={blog} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/blog" className="btn-outline">
                Read all blogs
              </Link>
            </div>
          </div>
        </section>

        {/* ─── NEWSLETTER STRIP ─── */}
        <section className="container mx-auto px-6 max-w-7xl py-16 md:py-20">
          <div className="bg-forest-700 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-lg">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-cream-100 mb-3">
                Stay in the margin.
              </h3>
              <p className="font-body text-cream-300 leading-relaxed">
                New blogs delivered to your inbox, not too often — just often
                enough. No noise, no filler, only things worth reading.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
