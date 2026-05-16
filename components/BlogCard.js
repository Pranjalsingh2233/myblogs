import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/helper";

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
  const colorClass = categoryColors[category] ?? defaultColor;

  if (featured) {
    return (
      <article class="py-8 px-4 mx-auto max-w-screen-xl h-screen lg:py-16 lg:px-6">
        <div class="bg-white w-96 p-4 border-2 border-gray-300  shadow-lg rounded-xl">
          <div>
            <a href={`/blog/${slug}`}>
              <Image
                class="rounded-lg"
                width={500}
                height={500}
                src={image}
                alt={alt}
              />
            </a>
          </div>
          <div class="capitalize text-purple-900 font-semibold my-4 bg-purple-200 w-fit px-3 rounded-lg">
            <p>{category}</p>
          </div>
          <div class="text-2xl font-bold my-2">
            <a href={`/blog/${slug}`}>
              <h2>{title}</h2>
            </a>
          </div>
          <div>
            <p>{excerpt}</p>
          </div>
          <div class="flex items-cente">
            <div class="mt-4">
              <Image
                width={100}
                height={100}
                class="w-12 h-12 object-cover rounded-full"
                src={author.image}
                alt="author"
              />
            </div>
            <div class="block mt-3.5">
              <div class="capitalize text-lg font-semibold pl-4 ">
                <h3>{author.name}</h3>
              </div>
              <div class="capitalize text-sm text-gray-600 pl-4">
                <p>{formatDate(date)}</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article class="py-8 px-4 mx-auto max-w-screen-xl h-screen lg:py-16 lg:px-6">
      <div class="bg-white w-96 p-4 border-2 border-gray-300  shadow-lg rounded-xl">
        <div>
          <a href={`/blog/${slug}`}>
            <Image
              class="rounded-lg"
              width={500}
              height={500}
              src={image}
              alt={alt}
            />
          </a>
        </div>
        <div class="capitalize text-purple-900 font-semibold my-4 bg-purple-200 w-fit px-3 rounded-lg">
          <p>{category}</p>
        </div>
        <div class="text-2xl font-bold my-2">
          <a href={`/blog/${slug}`}>
            <h2>{title}</h2>
          </a>
        </div>
        <div>
          <p>{excerpt}</p>
        </div>
        <div class="flex items-cente">
          <div class="mt-4">
            <Image
              width={100}
              height={100}
              class="w-12 h-12 object-cover rounded-full"
              src={author.image}
              alt="author"
            />
          </div>
          <div class="block mt-3.5">
            <div class="capitalize text-lg font-semibold pl-4 ">
              <h3>{author.name}</h3>
            </div>
            <div class="capitalize text-sm text-gray-600 pl-4">
              <p>{formatDate(date)}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
