/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--white)',
        foreground: 'var(--black)',
      },
    },
  },
  plugins: [],
};
