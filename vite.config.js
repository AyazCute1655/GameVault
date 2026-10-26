import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        wiki: 'wiki.html',
        guides: 'guides.html',
        updates: 'updates.html',
        faq: 'faq.html',
        redstone: 'redstone.html',
        enderdragon: 'enderdragon.html',
        netherite: 'netherite.html',
        warden: 'warden.html',
      },
    },
  },
});
