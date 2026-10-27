import { blogs } from "./blogs.js";

export const siteUrl = "https://www.asoneltech.me";

const published = "2026-10-17";

const pages = [
  { path: "/", lastmod: published },
  { path: "/about", lastmod: published },
  { path: "/services", lastmod: published },
  { path: "/team", lastmod: published },
  { path: "/blogs", lastmod: published },
  ...[...blogs]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((post) => ({ path: `/blogs/${post.slug}`, lastmod: post.date })),
  { path: "/contact", lastmod: published },
];

function loc(path) {
  return `${siteUrl}${path}`;
}

export function sitemapXml() {
  const urls = pages
    .map(
      (page) => `  <url>
    <loc>${loc(page.path)}</loc>
    <lastmod>${page.lastmod}</lastmod>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export function robotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
}
