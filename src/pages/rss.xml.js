import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { isVisible } from "@/utils/content";

/**
 * @param {import('astro').APIContext} context
 */
export async function GET(context) {
	const posts = await getCollection("posts");

	// Sort posts by date, newest first
	const sortedPosts = posts
		.filter(isVisible)
		.sort(
			(a, b) => new Date(b.data.publishedAt).getTime() - new Date(a.data.publishedAt).getTime(),
		);

	const lastBuildDate = sortedPosts[0]?.data.publishedAt ?? new Date();

	return rss({
		title: "Oleh Martsokha's Blog",
		description: "Thoughts on software engineering, design, and technology.",
		site: context.site || "https://martsokha.com",
		items: sortedPosts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.publishedAt,
			description: post.data.description,
			link: `/${post.id}`,
			categories: post.data.tags || [],
		})),
		customData: `<language>en-us</language><lastBuildDate>${lastBuildDate.toUTCString()}</lastBuildDate>`,
	});
}
