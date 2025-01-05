/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#3b82f6',
          600: '#2563eb',
        },
        neutral: {
          100: '#FFFFFF',
          200: '#F8FAFC',
          300: '#E2E8F0',
          400: '#94A3B8',
          900: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['Cabinet Grotesk', 'system-ui', 'sans-serif'],
        heading: ['Clash Display', 'system-ui'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};