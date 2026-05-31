// Dynamic sitemap — replaces the static public/sitemap.xml.
// Next.js serves this at /sitemap.xml automatically.

const SITE_URL = "https://www.dazzledentalstudio.in";

export default function sitemap() {
  const lastModified = new Date();

  const servicePriorities = {
    "dental-implants": 0.9,
    "braces-aligners": 0.9,
    "smile-makeover": 0.9,
    "teeth-whitening": 0.8,
    "root-canal": 0.8,
    "wisdom-tooth-extraction": 0.8,
  };

  const services = Object.entries(servicePriorities).map(([slug, priority]) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...services,
  ];
}
