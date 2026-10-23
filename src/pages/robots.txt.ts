import type { APIRoute } from 'astro';
import { allowIndexing } from '../utils/site';

export const GET: APIRoute = ({ site }) => {
  const body = allowIndexing
    ? `User-agent: *\nAllow: /\nDisallow: /admin/\n\nSitemap: ${new URL('sitemap-index.xml', site)}\n`
    : `User-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
