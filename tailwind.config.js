/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        primary: '#108A37',
        secondary: '#B58C1A',
        danger: '#E83B46',
        borderColor: '#A3A3A3'
      },
      fontFamily:{
        body:['Poppins']
      }
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs")],
}
