import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import astroI18next from 'astro-i18next';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
  },
  integrations: [tailwind(), react(), astroI18next()],
});
