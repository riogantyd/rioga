import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 900: '#0F2044', 700: '#16306B' },
        ink: { 900: '#101828', 600: '#475467' },
        line: '#E4E7EC',
        alt: '#F5F7FA',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        sans: ['var(--font-body)', 'sans-serif'],
      },
      maxWidth: { content: '1200px' },
      borderRadius: { card: '12px' },
    },
  },
  plugins: [],
};
export default config;
