/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'md' : '1000px'
    },
    extend: {
      fontFamily: {
        'manrope': 'Manrope',
      }
    },
  },
  plugins: [],
}
