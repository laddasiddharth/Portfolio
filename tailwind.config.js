/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        border: 'var(--border)',
        'border-strong': 'var(--border-strong)',
        fg: 'var(--text)',
        fg2: 'var(--text-2)',
        fg3: 'var(--text-3)',
        accent: 'var(--accent)',
      },
      borderColor: {
        DEFAULT: 'var(--border)',
      },
      fontSize: {
        display: ['clamp(2.5rem, 6.5vw, 5.25rem)', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        h2: ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
      },
      letterSpacing: {
        label: '0.08em',
      },
      spacing: {
        section: 'clamp(5rem, 12vh, 8rem)',
      },
      maxWidth: {
        page: '1200px',
      },
    },
  },
  plugins: [],
};
