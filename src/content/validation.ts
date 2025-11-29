/**
 * Validates that all tags are single words without spaces or hyphens
 * @param tags - Array of tag strings to validate
 * @returns true if valid, throws error if invalid
 */
export const validateSingleWordTags = (tags: string[] | undefined): boolean => {
	if (!tags) return true;

	for (const tag of tags) {
		if (tag.includes(" ") || tag.includes("-")) {
			throw new Error(`Tag "${tag}" contains spaces or hyphens. Tags must be single words only.`);
		}
	}
	return true;
};

/**
 * Validates that a date is not in the future
 * @param date - Date to validate
 * @returns true if valid, throws error if invalid
 */
export const validateNotFutureDate = (date: Date | undefined): boolean => {
	const now = new Date();
	if (typeof date !== "undefined" && date > now) {
		throw new Error(`Date cannot be in the future.`);
	}
	return true;
};
