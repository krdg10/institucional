import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [icon()],
  adapter: cloudflare(),
});