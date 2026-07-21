/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          300: '#fef08a',
          400: '#f7d070',
          500: '#d4af37',
          600: '#c59b27',
          700: '#996515',
        }
      }
    },
  },
  plugins: [],
}
