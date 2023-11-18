import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          primary: '#4354F0',
          secondary: '#D3E2F6',
        },
        gray: {
          1: '#F7F8F9',
          2: '#E9EBEE',
          3: '#C5C8CE',
          4: '#646F7C',
          5: '#374553',
        },
        black: '#14191F',
      },
    },
  },
  plugins: [],
};
export default config;
