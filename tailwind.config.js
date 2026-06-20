/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        fcb: {
          dark: '#020617',
          navy: '#0f172a',
          gold: '#e5c158',
          goldBright: '#f0d878',
          goldDark: '#b8941f',
          goldLight: '#f3e5ab',
          accent: '#0ea5e9',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', '"Noto Sans SC"', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
