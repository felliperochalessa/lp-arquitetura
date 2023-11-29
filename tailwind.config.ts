import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#339AF0',
          dark: '#061A2D',
        },
        gray: {
          1: '#212529',
          2: '#495057',
          3: '#DEE2E6',
          4: '#E9ECEF',
          5: '#F8F9FA',
        },
      },
    },
  },
  plugins: [],
};
export default config;
