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
          light: '#D3E2F6',
          DEFAULT: '#4354F0',
          heavy: '#303ECE',
        },
        gray: {
          extralight: '#F2F4F6',
          light: '#E9E9E9',
          DEFAULT: '#D9D9D9',
          heavy: '#757575',
          extraheavy: '#4E5968'
        },
      },
    },
  },
  plugins: [],
};
export default config;
