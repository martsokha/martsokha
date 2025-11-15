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

// Blog utilities
export function formatDate(date: string | Date): string {
	return new Date(date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

export function calculateReadingTime(content: string): number {
	const wordsPerMinute = 200;
	const wordCount = content.trim().split(/\s+/).length;
	return Math.ceil(wordCount / wordsPerMinute);
}

export function generateExcerpt(content: string, maxLength: number = 160): string {
	const plainText = content.replace(/[#*`]/g, "").trim();
	if (plainText.length <= maxLength) return plainText;
	return plainText.slice(0, maxLength).trim() + "...";
}
