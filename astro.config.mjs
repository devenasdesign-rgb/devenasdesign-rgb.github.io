// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://devenasdesign.com',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'ru', locales: { ru: 'ru-RU', en: 'en-US' } },
      // корень «/» — только редирект на /ru/, в карту сайта он не нужен
      // скрытый бриф для клиентов не должен попадать в карту сайта
      filter: (page) => new URL(page).pathname !== '/' && !page.includes('/project-brief/'),
    }),
  ],
  prefetch: true,
});
