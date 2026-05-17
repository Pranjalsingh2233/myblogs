import { User } from "lucide-react";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { POST_QUERY } from "@/sanity/lib/queries";
import { components, formatDate } from "@/lib/helper";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const post = await client.fetch(POST_QUERY, { slug });

  if (!post) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://example.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function SingleBlog({ params }) {
  const { slug } = await params;

  const post = await client.fetch(POST_QUERY, { slug });

  if (!post) {
    return notFound();
  }

  const featuredImage = post.image;

  //For image rendering in portable text
  const components = {
    types: {
      image: ({ value }) => (
        <Image
            width={800}
            height={500}
          src={urlFor(value).url()}
          alt={value.alt || "Blog image"}
          className="rounded-xl my-6"
        />
      ),
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-40 lg:flex gap-5">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="py-8">
          <h1 className="md:text-3xl xl:text-4xl text-2xl font-bold mb-4 font-bold mb-2">
            {post.title}
          </h1>
          <p className="text-gray-500 text-sm">
            Published on {formatDate(post.date)}
          </p>
        </div>
        {/* Featured Image */}
        {featuredImage && (
          <Image
            width={500}
            height={500}
            src={featuredImage}
            alt={post?.alt}
            className="w-full h-auto mb-8 rounded-lg"
          />
        )}
        {/* Content */}
        <div className="article">
          <PortableText value={post.body} components={components} />
        </div>
        <div className="my-12 p-6 border border-gray-200 rounded-2xl bg-white shadow-md hover:shadow-lg transition duration-300">
          <div className="flex items-center gap-4 mb-4">
            {/* Avatar */}
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 border border-gray-200">
              <User size={22} className="text-gray-600" />
            </div>

            {/* Author Info */}
            <div>
              <p className="text-sm text-gray-500">Written by</p>
              <p className="text-lg font-semibold text-gray-900">
                {post?.author.name}
              </p>
            </div>
          </div>

          {/* Author Bio */}
          <p className="text-gray-600 leading-relaxed text-sm">
            {post.author.bio}
          </p>
        </div>
      </div>
    </div>
  );
}
