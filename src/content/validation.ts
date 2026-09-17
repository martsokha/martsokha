/**
 * Validates that all tags are single words without spaces or hyphens.
 *
 * Returns false rather than throwing so Zod reports it as a normal validation
 * error, pointing at the offending field, instead of an uncaught exception.
 *
 * @param tags - Array of tag strings to validate
 * @returns true if valid
 */
export const validateSingleWordTags = (tags: string[] | undefined): boolean => {
	if (!tags) return true;

	return tags.every((tag) => !tag.includes(" ") && !tag.includes("-"));
};

/**
 * Validates that a date is not in the future.
 *
 * @param date - Date to validate
 * @returns true if valid
 */
export const validateNotFutureDate = (date: Date | undefined): boolean => {
	if (typeof date === "undefined") return true;

	return date <= new Date();
};
