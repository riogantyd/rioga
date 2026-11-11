import type { Config } from 'tailwindcss';

// Carbon-copy form palette: see DESIGN.md.
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FBFBF8', // white original
        sheet: '#FFFFFF',
        canary: '#F4E39A', // first copy
        pink: '#F2C7CF', // second copy
        ink: { DEFAULT: '#1F2A6B', 700: '#2E3B85' }, // carbon blue
        muted: '#4B5385',
        hair: '#B8BDD6', // ruled lines
        stamp: '#C42B23',
      },
      fontFamily: {
        sans: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
      },
      maxWidth: { sheet: '1280px', measure: '68ch' },
      transitionTimingFunction: { draw: 'cubic-bezier(0.16, 1, 0.3, 1)' },
    },
  },
  plugins: [],
};
export default config;
