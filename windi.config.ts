import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  theme: {
    colors: {
      blue: 'hsl(246, 80%, 60%)',
      neutral: {
        pale: 'hsl(236, 100%, 87%)',
        desaturated: 'hsl(235, 45%, 61%)',
        dark: 'hsl(235, 46%, 20%)',
        'less-dark': 'hsl(235, 46%, 30%)',
        'very-dark': 'hsl(226, 43%, 10%)',
      },
      card: {
        'light-red': 'hsl(15, 100%, 70%)',
        'soft-blue': 'hsl(195, 74%, 62%)',
        red: 'hsl(348, 100%, 68%)',
        lime: 'hsl(145, 58%, 55%)',
        violet: 'hsl(264, 64%, 52%)',
        'soft-orange': 'hsl(43, 84%, 65%)',
      },
      white: 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
    },
  },
});
