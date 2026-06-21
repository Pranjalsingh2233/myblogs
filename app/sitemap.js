import { client } from "@/sanity/lib/client";
import { POSTS_SLUG_QUERY } from "@/sanity/lib/queries";

export default async function sitemap() {
  const allPosts = await client.fetch(POSTS_SLUG_QUERY);

  const blogPages = allPosts.map((post) => ({
    url: `https://searchnextera.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    {
      url: "https://searchnextera.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://searchnextera.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://searchnextera.com/blog",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://searchnextera.com/contact",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...blogPages,
  ];
}
