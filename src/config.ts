/**
 * Site Configuration
 *
 * Central configuration file for site-wide constants and settings.
 * This file contains default values used across layouts, components, and pages.
 */

/** Default site title used in meta tags and page titles */
export const DEFAULT_TITLE = "Oleh Martsokha";

/** Default meta description for SEO and social media sharing */
export const DEFAULT_DESCRIPTION =
  "Software engineer passionate about building exceptional digital experiences. Thoughts on development, design, and technology.";

/** Default author name for articles and structured data */
export const DEFAULT_AUTHOR = "Oleh Martsokha";

/** Build version displayed in meta tags for cache busting and debugging */
export const BUILD_VERSION = "1.0.0";

/** Site URL (used for canonical URLs and structured data) */
export const SITE_URL = "https://martsokha.com";

/** Default Open Graph image path (relative to public directory) */
export const DEFAULT_OG_IMAGE = "/og-image.jpg";

/** Social media links configuration */
export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/martsokha",
  bluesky: "https://bsky.app/profile/martsokha.com",
  linkedin: "https://linkedin.com/in/martsokha",
  github: "https://github.com/martsokha",
  email: "hello@martsokha.com",
} as const;
