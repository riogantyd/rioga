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
      boxShadow: {
        card: '0 1px 2px rgba(16, 24, 40, 0.04)',
        'card-hover': '0 18px 40px -16px rgba(15, 32, 68, 0.35)',
      },
    },
  },
  plugins: [],
};
export default config;
