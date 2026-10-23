# Ruchi Sharma | Writer and Creative Director

Astro 7 static site. Content lives in `src/content`, edited by file or from `/admin` (Decap CMS).

## Commands
- `npm install`
- `npm run dev` : local server
- `npm run build` : static output in `dist/`
- `npx astro check` : types and template checks

## Content
- `work`, `press`, `notes`, `logos` : home page sections (one Markdown file each)
- `writing`, `screenplays` : get their own pages. Set `draft: false` to publish.
- `src/data/*.json` : career, awards, impact, site text

## Deploy (Netlify)
Build command `npm run build`, publish `dist`. Set `PUBLIC_ALLOW_INDEXING=true` only when the site goes live on the real domain. Until then it stays `noindex`.

## Admin panel
`/admin` uses the GitHub backend. It needs an OAuth app (Netlify: Site settings, Access control, OAuth) before login works.
