import { defineCollection, z } from "astro:content";
import { validateSingleWordTags } from "./validations";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional().refine(validateSingleWordTags, {
      message: "All tags must be single words without spaces or hyphens",
    }),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    status: z
      .enum(["Active", "Completed", "In Progress", "Archived"])
      .default("Completed"),
    featured: z.boolean().default(false),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
  }),
});

export const collections = {
  posts,
  projects,
};
