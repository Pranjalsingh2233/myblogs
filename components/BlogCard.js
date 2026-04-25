// components/BlogCard.js — Reusable Server Component
import Link from 'next/link'
import Image from 'next/image'

const categoryColors = {
  Travel: 'bg-amber-100 text-amber-800 border-amber-300',
  Design: 'bg-blue-100 text-blue-800 border-blue-300',
  Food: 'bg-orange-100 text-orange-800 border-orange-300',
  Culture: 'bg-purple-100 text-purple-800 border-purple-300',
  Writing: 'bg-teal-100 text-teal-800 border-teal-300',
}

const defaultColor = 'bg-forest-100 text-forest-700 border-forest-300'

export default function BlogCard({ blog, featured = false }) {
  const { title, image, date, excerpt, category, author, slug } = blog
  const colorClass = categoryColors[category] ?? defaultColor

  if (featured) {
    return (
      <article className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-cream-200 flex flex-col md:flex-row">
        {/* Image */}
        <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <span className={`tag-pill ${colorClass}`}>{category}</span>
            <span className="font-sans text-xs text-ink-300">Featured</span>
          </div>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-ink-700 leading-tight mb-4 group-hover:text-forest-600 transition-colors text-balance">
            {title}
          </h2>

          <p className="font-body text-ink-400 leading-relaxed mb-6 line-clamp-3">
            {excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-forest-600 flex items-center justify-center flex-shrink-0">
                <span className="font-sans text-xs font-bold text-cream-100">
                  {author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-sans text-xs font-medium text-ink-600">{author}</p>
                <p className="font-sans text-xs text-ink-300">{date}</p>
              </div>
            </div>

            <Link href={`/blog/${slug}`} className="btn-primary">
              Read Essay
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-cream-200 flex flex-col h-full">
      {/* Image */}
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Category overlay */}
        <div className="absolute top-4 left-4">
          <span className={`tag-pill ${colorClass} backdrop-blur-sm bg-opacity-90`}>
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Meta */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full bg-forest-600 flex items-center justify-center flex-shrink-0">
            <span className="font-sans text-xs font-bold text-cream-100 leading-none">
              {author.charAt(0)}
            </span>
          </div>
          <span className="font-sans text-xs text-ink-400">{author}</span>
          <span className="text-ink-300">·</span>
          <span className="font-sans text-xs text-ink-300">{date}</span>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-bold text-ink-700 leading-tight mb-3 group-hover:text-forest-600 transition-colors text-balance">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="font-body text-sm text-ink-400 leading-relaxed flex-1 line-clamp-3 mb-5">
          {excerpt}
        </p>

        {/* Footer */}
        <div className="pt-4 border-t border-cream-200">
          <Link
            href={`/blog/${slug}`}
            className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-forest-600 hover:text-forest-700 transition-colors group/link"
          >
            Read More
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transform group-hover/link:translate-x-1 transition-transform"
            >
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
      </div>
    </article>
  )
}
