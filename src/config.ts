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
	import.meta.env.PUBLIC_UMAMI_WEBSITE_ID || "807fdb95-0a30-4563-8239-876c35e25a5a";
