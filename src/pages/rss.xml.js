import { getCollection } from "astro:content";

/**
 * @param {import('astro').APIContext} context
 */
export async function GET(context) {
  const posts = await getCollection("posts");
  const sortedPosts = posts
    .filter((post) => !post.data.draft)
    .sort(
      (a, b) =>
        new Date(b.data.publishedAt).getTime() -
        new Date(a.data.publishedAt).getTime(),
    );

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Martsokha Blog</title>
    <description>Software engineer passionate about building exceptional digital experiences and exploring new technologies.</description>
    <link>${context.site}</link>
    <atom:link href="${context.site}rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <managingEditor>hello@martsokha.com (Martsokha)</managingEditor>
    <webMaster>hello@martsokha.com (Martsokha)</webMaster>
    <copyright>Copyright ${new Date().getFullYear()} Martsokha</copyright>
    <category>Technology</category>
    <category>Software Development</category>
    <category>Web Development</category>
    <ttl>60</ttl>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${sortedPosts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <description><![CDATA[${post.data.description}]]></description>
      <link>${context.site}blog/${post.id}/</link>
      <guid>${context.site}blog/${post.id}/</guid>
      <pubDate>${new Date(post.data.publishedAt).toUTCString()}</pubDate>
      <author>hello@martsokha.com (Martsokha)</author>
      ${(post.data.tags || []).map((tag) => `<category>${tag}</category>`).join("")}
    </item>`,
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
