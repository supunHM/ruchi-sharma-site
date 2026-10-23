import site from '../data/site.json';

export { site };

/** Indexing is off everywhere except production on the real domain. */
export const allowIndexing = import.meta.env.PUBLIC_ALLOW_INDEXING === 'true';

export const socialUrls = site.contact.socials.map((s) => s.url);

export const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Work', href: '/#work' },
  { label: 'Career', href: '/#career' },
  { label: 'Recognition', href: '/#recognition' },
  { label: 'Creative', href: '/#creative' },
  { label: 'Press', href: '/#press' },
] as const;

/** Absolute URL on the canonical origin. */
export function absoluteUrl(path: string, origin: URL | string): string {
  return new URL(path, origin).toString();
}
