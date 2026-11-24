import { site } from '#lib/content.js';

export const prerender = true;

/** Public pages, in priority order. Add new routes here. */
const pages = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/support', changefreq: 'monthly', priority: '0.5' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.3' }
];

/** @type {import('./$types').RequestHandler} */
export function GET() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = pages
    .map(
      (p) =>
        `  <url>\n    <loc>${new URL(p.path, site.url).href}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`
    )
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'content-type': 'application/xml; charset=utf-8' } }
  );
}
