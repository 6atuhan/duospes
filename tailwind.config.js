/** @type {import('tailwindcss').Config} */
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
      }
    },
  },
  plugins: [],
}
