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

    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['33px', '44px'],
    }
  },
  plugins: [],
}
