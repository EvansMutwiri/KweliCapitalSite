/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('/src/assets/header-img.png')"
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
