import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { validateNotFutureDate, validateSingleWordTags } from "./content/validation";

const posts = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishedAt: z.coerce.date().refine(validateNotFutureDate, {
			message: "Published date cannot be in the future",
		}),
		updatedAt: z.coerce.date().optional().refine(validateNotFutureDate, {
			message: "Published date cannot be in the future",
		}),
		category: z.string().optional(),
		author: z.string().optional(),
		excerpt: z.string().optional(),
		tags: z.array(z.string()).optional().refine(validateSingleWordTags, {
			message: "All tags must be single words without spaces or hyphens",
		}),
		draft: z.boolean().default(false),
		isPublished: z.boolean().default(false),
	}),
});

export const collections = {
	posts,
};
