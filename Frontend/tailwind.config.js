/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: 'class', 

  theme: {
    extend: {
      colors: {
        'primary': 'c5b915',
        'secondary': '#c5b915',
      }


    },
  },
  plugins: [],
}

