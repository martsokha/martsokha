// Page utilities and exports for the personal blog

export interface PageMeta {
	title: string;
	description: string;
	publishedAt?: string;
	updatedAt?: string;
	tags?: string[];
}

export interface BlogPost extends PageMeta {
	slug: string;
	content: string;
	readingTime?: number;
}

// Common page metadata
export const defaultMeta: Partial<PageMeta> = {
	description: "Software engineer passionate about building exceptional digital experiences.",
};
