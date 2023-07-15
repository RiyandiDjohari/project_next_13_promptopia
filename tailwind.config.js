/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        montserratAlternate: ["Montserrat Alternates", "sans-serif"],
      },
      colors: {
        'primary-orange': '#FF5722',
      }
    },
  },
  plugins: [],
}