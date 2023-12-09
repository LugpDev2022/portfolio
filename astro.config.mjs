import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
  },
  integrations: [tailwind(), react()],
  output: 'server',
  adapter: vercel({
    speedInsights: {
      enabled: true,
    },
  }),
});
