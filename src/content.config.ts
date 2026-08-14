import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/products' }),
  schema: z.object({
    name: z.string(),
    category: z.enum(['kue-kering', 'kue-basah', 'roti']),
    price: z.number(),
    image: z.string(),
    isAvailable: z.boolean().default(true),
    isFeatured: z.boolean().default(false), // untuk preview di homepage
    tags: z.array(z.string()).default([]), // misal: ["best-seller", "halal", "vegan"]
  }),
});

export const collections = { products };
