import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4354F0',
        secondary: '#D3E2F6',
        gray: {
          1: '#F7F8F9',
          2: '#E9EBEE',
          3: '#C5C8CE',
          4: '#646F7C',
          5: '#374553',
        },
        black: '#14191F',
        cheer: {
          left: '#FF0000',
          right: '#003AFF',
        },
      },
      keyframes: {
        'dialog-overlay-show': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'dialog-overlay-hide': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'menu-content-show': {
          '0%': {
            opacity: '0',
            transform: 'translate(25%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(0%)',
          },
        },
        'menu-content-hide': {
          '0%': {
            opacity: '1',
            transform: 'translate(0%)',
          },
          '100%': {
            opacity: '0',
            transform: 'translate(25%)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
