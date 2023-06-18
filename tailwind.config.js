/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge:['./index.html','./src/**/*.{vue,js,ts,jsx,tsx}'],
  mode : "jit",
  darkMode:"class",
  content: [],
  theme: {
    extend: {
      colors:{
        "blue-ds":"#00FFFF",
        "pink-ds" :"#b90082"
      },
      fontFamily:{
        'TT-Alientz-Serif':["TT-Alientz-Serif"],
        'TT-Alientz-Var':["TT-Alientz-Var"],
      },
      textShadow:{
        'thin':' 1px 1px 0px #000000, 1px 0px 0px #000000, 1px -1px 0px #000000, 0px -1px 0px #000000, -1px -1px 0px #000000, -1px 0px 0px #000000, -1px 1px 0px #000000, -1px 1px 0px #000000',
        'bold':' 2px 2px 0px #000000, 2px 0px 0px #000000, 2px -2px 0px #000000, 0px -2px 0px #000000, -2px -2px 0px #000000, -2px 0px 0px #000000, -2px 2px 0px #000000, -2px 2px 0px #000000'
      }

    },
  },
  plugins: [ plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'text-shadow': (value) => ({
          textShadow: value,
        }),
      },
      { values: theme('textShadow') }
    )
  }),],
}
