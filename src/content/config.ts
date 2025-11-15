import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
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
