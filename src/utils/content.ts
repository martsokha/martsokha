/** Calculates the reading time of a text in minutes. */
export function calculateReadingTime(text: string): number {
	const wordsPerMinute = 238;
	const words = text.split(/\s+/).length;
	return Math.max(Math.ceil(words / wordsPerMinute), 1);
}

/** Returns true for posts that should be visible on the site. */
export function isVisible(entry: { data: { draft: boolean } }): boolean {
	return !entry.data.draft;
}
