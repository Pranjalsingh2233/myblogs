// import { getBlogBySlug } from "@/actions/serverActions";
// import CommentSidebar from "@/components/sections/comments";
// import { User } from "lucide-react";
// import { notFound } from "next/navigation";

// export async function generateMetadata({ params }) {
//   const { slug } = await params;

//   const res = await getBlogBySlug(slug);

//   if (!res?.success) {
//     return {
//       title: "Blog Not Found",
//     };
//   }

//   const post = res?.data;
//   const seo = post?.yoast_head_json;

//   if (!seo) {
//     return {
//       title: post.title?.rendered || "Blog",
//       description: post.excerpt?.rendered?.replace(/<[^>]+>/g, ""),
//     };
//   }

//   return {
//     title: seo.title,
//     description: seo.description,
//     alternates: {
//       canonical: `https://bizzbuzzcreations.com/blog/${slug}`,
//     },
//     openGraph: {
//       title: seo.og_title,
//       description: seo.og_description,
//       images: seo.og_image?.map((img) => ({
//         url: img.url,
//       })),
//     },
//   };
// }

// export default async function SingleBlog({ params }) {
//   const { slug } = await params;

//   const res = await getBlogBySlug(slug);

//   if (!res?.success) {
//     return notFound();
//   }
//   const post = res?.data;

//   const featuredImage = post?.yoast_head_json?.og_image?.[0]?.url;

//   const formattedDate = new Date(post?.date).toLocaleDateString("en-IN", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });

//   const filteredData = post?.content.rendered.replaceAll(
//     "https://blog.bizzbuzzcreations.com",
//     "https://bizzbuzzcreations.com",
//   );

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-40 lg:flex gap-5">
//       <div className="max-w-3xl mx-auto">
//         {/* Header */}
//         <div className="py-8">
//           <h1
//             className="md:text-3xl xl:text-4xl text-2xl font-bold mb-4 font-bold mb-2"
//             dangerouslySetInnerHTML={{ __html: post?.title?.rendered }}
//           />
//           <p className="text-gray-500 text-sm">
//             Published on <time dateTime={post?.date}>{formattedDate}</time>
//           </p>
//         </div>
//         {/* Featured Image */}
//         {featuredImage && (
//           <img
//             src={featuredImage}
//             alt={post?.title?.rendered}
//             className="w-full h-auto mb-8 rounded-lg"
//           />
//         )}
//         {/* Content */}
//         <div
//           className="article"
//           dangerouslySetInnerHTML={{ __html: filteredData }}
//         />
//         <div className="my-12 p-6 border border-gray-200 rounded-2xl bg-white shadow-md hover:shadow-lg transition duration-300">
//           <div className="flex items-center gap-4 mb-4">
//             {/* Avatar */}
//             <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 border border-gray-200">
//               <User size={22} className="text-gray-600" />
//             </div>

//             {/* Author Info */}
//             <div>
//               <p className="text-sm text-gray-500">Written by</p>
//               <p className="text-lg font-semibold text-gray-900">
//                 {post?.yoast_head_json?.author}
//               </p>
//             </div>
//           </div>

//           {/* Author Bio */}
//           <p className="text-gray-600 leading-relaxed text-sm">
//             {post?.yoast_head_json?.schema?.["@graph"]?.[6]?.description}
//           </p>
//         </div>
//       </div>
//       <CommentSidebar slug={slug} />
//     </div>
//   );
// }
