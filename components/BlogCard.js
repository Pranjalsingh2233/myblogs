import Link from "next/link";
import Image from "next/image";
import { formatDate, excerptLength } from "@/lib/helper";

const categoryColors = {
  Travel: "bg-amber-100 text-amber-800 border-amber-300",
  Design: "bg-blue-100 text-blue-800 border-blue-300",
  Food: "bg-orange-100 text-orange-800 border-orange-300",
  Culture: "bg-purple-100 text-purple-800 border-purple-300",
  Writing: "bg-teal-100 text-teal-800 border-teal-300",
};

const defaultColor = "bg-forest-100 text-forest-700 border-forest-300";

export default function BlogCard({ blog, featured = false }) {
  const { title, image, date, excerpt, category, author, slug, alt } = blog;
  const colorClassName = categoryColors[category] ?? defaultColor;

  if (featured) {
    return (
      <article>
        <Link
          href={`/blog/${slug}`}
          className="block overflow-hidden group rounded-xl shadow-lg shadow-gray-300"
        >
          <Image
            src={image}
            className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
            alt={alt}
            width={600}
            height={400}
          />
        </Link>
        <div className="relative mt-5">
          <p className="uppercase font-semibold text-xs mb-2.5 text-slate-700">
            {formatDate(date)}
            &nbsp;&nbsp; by {author.name}
          </p>
          <Link href={`/blog/${slug}`} className="block mb-3 hover:underline">
            <h2 className="text-xl lg:text-2xl leading-tight font-semibold leading-5 text-black  transition-colors duration-200 hover:text-slate-700">
              {title}
            </h2>
          </Link>
          <p className="text-gray-700">{excerptLength(excerpt, 150)}</p>

          <Link
            href={`/blog/${slug}`}
            className="font-medium underline text-slate-700 hover:text-slate-900"
            aria-label={`Read more about ${title}`}
          >
            Read More
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article>
      <Link
        href={`/blog/${slug}`}
        className="block overflow-hidden group rounded-xl shadow-lg shadow-gray-300"
      >
        <Image
          src={image}
          className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
          alt={alt}
          width={600}
          height={400}
        />
      </Link>
      <div className="relative mt-5">
        <p className="uppercase font-semibold text-xs mb-2.5 text-slate-700">
          {formatDate(date)}
          &nbsp;&nbsp; by {author.name}
        </p>
        <Link href={`/blog/${slug}`} className="block mb-3 hover:underline">
          <h2 className="text-xl lg:text-2xl leading-tight font-semibold leading-5 text-black  transition-colors duration-200 hover:text-slate-700">
            {title}
          </h2>
        </Link>
        <p className="text-gray-700">{excerptLength(excerpt, 150)}</p>

        <Link
          href={`/blog/${slug}`}
          className="font-medium underline text-slate-700 hover:text-slate-900"
          aria-label={`Read more about ${title}`}
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
