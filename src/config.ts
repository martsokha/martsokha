/**
 * Default site title used across pages
 */
export const DEFAULT_TITLE = "Oleh Martsokha";

/**
 * Default meta description for SEO
 */
export const DEFAULT_DESCRIPTION =
	"Software engineer focused on AI infrastructure and data tooling. Writing about web development, and system design.";

/**
 * Default author name for content attribution
 */
export const DEFAULT_AUTHOR = "Oleh Martsokha";

/**
 * Default Open Graph image for social media sharing
 */
export const DEFAULT_OG_IMAGE = "/og-image.jpg";

/**
 * Social media and contact links
 */
export const SOCIAL_LINKS = {
	bluesky: "https://bsky.app/profile/martsokha.com",
	linkedin: "https://linkedin.com/in/martsokha",
	github: "https://github.com/martsokha",
	email: "hello@martsokha.com",
} as const;

/**
 * Umami analytics configuration
 */
export const UMAMI_WEBSITE_ID =
	import.meta.env.PUBLIC_UMAMI_WEBSITE_ID || "af19adf2-bb53-4bd9-aaf9-369b9e16c88d";
