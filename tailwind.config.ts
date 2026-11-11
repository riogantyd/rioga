import type { Config } from 'tailwindcss';

// Drawing-sheet palette: see DESIGN.md.
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F3F4F1',
        sheet: '#FAFAF8',
        ink: { DEFAULT: '#14213D', 700: '#22335A' },
        graphite: '#525B6B',
        hair: '#C9CDD3',
        redline: '#C23A2B',
      },
      fontFamily: {
        sans: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
      },
      maxWidth: { sheet: '1320px', measure: '68ch' },
      transitionTimingFunction: { draw: 'cubic-bezier(0.16, 1, 0.3, 1)' },
    },
  },
  plugins: [],
};
export default config;
