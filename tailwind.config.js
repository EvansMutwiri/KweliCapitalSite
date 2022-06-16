/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('/src/assets/header-img.png')",
        'national-influence': "url('/src/assets/national-infl.png')",
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif']
      },
      textUnderlineOffset: {
        16: '16px',
      }
    },

    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      faint: '#7e7e7f',
      card: '#f5f5f5', 
      gray: {
        400: '#A1A1AA',
        900: '#1a202c',
      },
    },
  },
  plugins: [],
}
