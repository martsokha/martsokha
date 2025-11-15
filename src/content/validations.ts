/**
 * Validates that all tags are single words without spaces or hyphens
 * @param tags - Array of tag strings to validate
 * @returns true if valid, throws error if invalid
 */
export const validateSingleWordTags = (tags: string[] | undefined): boolean => {
  if (!tags) return true;

  for (const tag of tags) {
    if (tag.includes(" ") || tag.includes("-")) {
      throw new Error(
        `Tag "${tag}" contains spaces or hyphens. Tags must be single words only.`,
      );
    }
  }
  return true;
};

/**
 * Validates that a string is not empty and within length limits
 * @param value - String to validate
 * @param fieldName - Name of the field being validated
 * @param minLength - Minimum length (default: 1)
 * @param maxLength - Maximum length (default: 200)
 * @returns true if valid, throws error if invalid
 */
export const validateStringLength = (
  value: string,
  fieldName: string,
  minLength: number = 1,
  maxLength: number = 200,
): boolean => {
  if (value.length < minLength) {
    throw new Error(`${fieldName} must be at least ${minLength} characters long.`);
  }
  if (value.length > maxLength) {
    throw new Error(`${fieldName} must be no more than ${maxLength} characters long.`);
  }
  return true;
};

/**
 * Validates that a date is not in the future
 * @param date - Date to validate
 * @param fieldName - Name of the field being validated
 * @returns true if valid, throws error if invalid
 */
export const validateNotFutureDate = (date: Date, fieldName: string): boolean => {
  const now = new Date();
  if (date > now) {
    throw new Error(`${fieldName} cannot be in the future.`);
  }
  return true;
};

