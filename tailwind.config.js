/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'company-gold': '#C7A247',
        'dark-charcoal': '#1F1F1F',
        'light-gray': '#F9F9F9',
      },
      fontFamily: {
        brand: ['"Poppins"', 'sans-serif'],
        caps: ['"56th Street Caps"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
