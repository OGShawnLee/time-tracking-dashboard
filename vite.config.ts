import windicss from 'vite-plugin-windicss';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), windicss()],
  resolve: {
    alias: {
      '@root': resolve('src'),
      '@root/*': resolve('src/*'),
      '@lib': resolve('src/lib'),
      '@lib/*': resolve('src/lib/*'),
      '@assets': resolve('src/assets'),
      '@assets/*': resolve('src/assets/*'),
      '@layout': resolve('src/layout'),
      '@layout/*': resolve('src/layout/*'),
    },
  },
});
