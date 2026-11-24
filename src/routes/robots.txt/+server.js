import { site } from '#lib/content.js';

export const prerender = true;

/** @type {import('./$types').RequestHandler} */
export function GET() {
  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site.url).href}\n`,
    { headers: { 'content-type': 'text/plain; charset=utf-8' } }
  );
}
