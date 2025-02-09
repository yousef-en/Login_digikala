const colors = require('tailwindcss/colors');

module.exports = {
  darkMode:'class',
  content: ["./src/*.html"],
  theme: {
    fontFamily: {
      "iran_l":"iran_Light",
    },
    colors: {
      red: '#ef4056',
      black: '#0c0c0c',
      input_bg: '#f0f0f1',
      blue: '#008eb2',
      gray: '#ccc',
      white: colors.white,
      
      
      
    },
    
    extend: {},
  },
  plugins: [],
}