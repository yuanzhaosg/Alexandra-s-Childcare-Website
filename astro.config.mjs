// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://alexandral.com.au',
  // Vercel adapter will be added when we wire up deployment.
  // For static-first development, no adapter is needed.
});
