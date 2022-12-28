/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Avenir Next', 'sans-serif'],
        'secondary': ['Comfortaa', 'cursive']
      },
      colors: {
        "white": "#FFFFFF", // light & dark
        "zinc": {
          100: "#F6F8FC", // light
          200: "#DEDEDE", // dark
          300: "#CACACA", // dark
          DEFAULT: "#5E5E5F" // light
        },
        "purple": {
          "dark": "#332B60", // dark
          DEFAULT: "#8873EF", // light
          "light": "#C3B9F7", // dark
        },
        "blue-dark": "#3A506F", // light
        "indigo": "#1D1836", // dark
        "gunmetal": "#15292C" // light
      }
    }
  },
  plugins: [require('tailwind-scrollbar')],
}
