// Dynamic robots.txt — served at /robots.txt.
// Allow all crawlers; point to the sitemap.

const SITE_URL = "https://www.dazzledentalstudio.in";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
