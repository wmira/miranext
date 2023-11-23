// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Miranext";
export const SITE_DESCRIPTION =
  "Will Code For Food";
export const TWITTER_HANDLE = "@miranext";
export const MY_NAME = "Warren Mira";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
