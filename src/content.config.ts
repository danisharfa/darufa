import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/products' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      category: z.enum(['kue-kering', 'kue-basah', 'roti', 'cake-bolu']),
      price: z.number(),
      unit: z.string(), // satuan jual, mis. "pcs", "loyang", "toples", "box"
      image: image(),
      isAvailable: z.boolean().default(true), // false = pre-order (bukan habis)
      isFeatured: z.boolean().default(false), // untuk preview di homepage
      isBestSeller: z.boolean().default(false),
    }),
});

export const collections = { products };
