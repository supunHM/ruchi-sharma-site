import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Selected work gallery: jury cards, stage moments, press clippings. */
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum(['jury', 'stage']),
      image: image(),
      alt: z.string().min(10, 'Describe the image for people who cannot see it'),
      order: z.number().default(100),
    }),
});

/** Articles and interviews about Ruchi, elsewhere on the web. */
const press = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/press' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      kind: z.enum(['Video', 'Article', 'Interview']),
      source: z.string(),
      url: z.url(),
      image: image(),
      video: z.boolean().default(false),
      order: z.number().default(100),
    }),
});

/** Scans of thank-you notes from clients. */
const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      url: z.url(),
      image: image(),
      order: z.number().default(100),
    }),
});

/** Client logo wall. */
const logos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/logos' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      order: z.number().default(100),
    }),
});

/** Blog articles written by Ruchi. Each one gets its own page at /writing/<slug>/. */
const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(180),
      date: z.coerce.date(),
      cover: image().optional(),
      coverAlt: z.string().default(''),
      draft: z.boolean().default(false),
    }),
});

/** Screenplays. Each one gets its own page at /screenplays/<slug>/. */
const screenplays = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/screenplays' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      logline: z.string().max(240),
      genre: z.string().optional(),
      year: z.number().int().optional(),
      cover: image().optional(),
      coverAlt: z.string().default(''),
      pdf: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { work, press, notes, logos, writing, screenplays };
