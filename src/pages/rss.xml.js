import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

/**
 * @param {import('astro').APIContext} context
 */
export async function GET(context) {
  const posts = await getCollection("posts");

  // Sort posts by date, newest first
  const sortedPosts = posts.sort(
    (a, b) =>
      new Date(b.data.publishedAt).getTime() -
      new Date(a.data.publishedAt).getTime(),
  );

  return rss({
    title: "Oleh Martsokha's Blog",
    description: "Thoughts on software engineering, design, and technology.",
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedAt,
      description: post.data.description,
      link: `/${post.slug}/`,
      categories: post.data.tags || [],
    })),
    customData: `<language>en-us</language>`,
  });
}
