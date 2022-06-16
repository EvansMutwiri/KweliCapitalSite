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
        16: '20px',
      },
      height: {
        "screen-mid": "60vh",
        "screen/2": "82vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
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
