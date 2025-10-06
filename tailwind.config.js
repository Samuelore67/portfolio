/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        brand:{
          light:'#3ab7bf',
          default:'#od6efd',
          dark:'#084298',
        }
      }
    },
  },
  darkMode:'class',
  plugins: [],
}

