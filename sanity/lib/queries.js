export const POSTS_QUERY = `*[
  _type == "post" &&
  defined(slug.current) &&
   (
    $category == "" ||
    $category in categories[]->slug.current
  )
]
| order(publishedAt desc)
[$start...$end]{
  _id,
  title,
  "slug": slug.current,
  "date": publishedAt,
  "image": image.asset->url,
  "alt": image.alt,
  excerpt,
  "categories": categories[]->title,
  "author": author->name,
  featured
}`;

export const FEATURED_POSTS_QUERY = `
*[
  _type == "post" &&
  defined(slug.current) &&
  featured == true
]
| order(publishedAt desc)[0...3]{
  _id,
  title,
  "slug": slug.current,
  "date": publishedAt,
  "image": image.asset->url,
  "alt": image.alt,
  excerpt,
  "categories": categories[]->title,
  "author": author->name,
  featured
}
`;

export const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  "date": publishedAt,
  "image": image.asset->url,
  "alt": image.alt,
  body,
  "categories": categories[]->title,
  "author": { "name": author->name,
              "image": author->image.asset->url  ,
              "bio": author->bio
            },
  featured
}`;

export const CATEGORIES_QUERY = `*[_type == "category"]{
  title,
  "slug": slug.current
}`;

export const POSTS_COUNT_QUERY = `
count(
  *[
    _type == "post" &&
    defined(slug.current) &&
    (
      $category == "" ||
      $category in categories[]->slug.current
    )
  ]
)
`;
