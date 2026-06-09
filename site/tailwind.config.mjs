/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,ts,tsx,js,jsx,md}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ivory paper palette (light)
        paper: {
          50: '#ffffff',
          100: '#faf9f5',   // ivory — main background
          200: '#f2f0e8',
          300: '#e6e3d8',
          400: '#d1cdbf',
        },
        ink: {
          50: '#f5f3ee',
          100: '#e9e6df',
          200: '#cfcbc1',
          300: '#9a978d',
          400: '#6e6c64',
          500: '#4a473f',
          600: '#2f2d28',
          700: '#1f1d1a',
          800: '#181712',
          900: '#0f0e0a',
        },
        // dark theme background — kept for the toggle, slightly cooler
        nightbg: {
          DEFAULT: '#10131a',
          soft: '#171b23',
        },
        // accent: desaturated teal, drawn from the CHATS lab logo
        accent: {
          DEFAULT: '#2e6b68',
          dark: '#76bdb6',  // legible teal on dark bg
        },
        // brass secondary — used sparingly for emphasis chips, indices, etc.
        brass: {
          DEFAULT: '#a0826d',
          soft: '#cdb89f',
        },
        chip: {
          light: '#ece9dd',
          'light-hover': '#dfdbcb',
          dark: '#1f242e',
          'dark-hover': '#2a3140',
        },
      },
      fontFamily: {
        sans: [
          '"IBM Plex Sans"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Helvetica',
          'sans-serif',
        ],
        display: [
          '"Fraunces Variable"',
          'ui-serif',
          'Iowan Old Style',
          'Charter',
          'Georgia',
          'serif',
        ],
        serif: [
          '"Fraunces Variable"',
          'ui-serif',
          'Iowan Old Style',
          'Charter',
          'Georgia',
          'serif',
        ],
        mono: [
          '"IBM Plex Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'monospace',
        ],
      },
      fontFeatureSettings: {
        'tabular-nums': '"tnum"',
      },
      maxWidth: {
        'reading': '72ch',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.ink.700'),
            a: { color: theme('colors.accent.DEFAULT') },
          },
        },
      }),
    },
  },
  plugins: [],
};
