/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-light': '#706F6F',
        'gray-dark': '#403F3F',
        'red-pink': "#D72050",
        'dark7': "#F3F3F3",
        'dark6': '#E7E7E7',
        'dark4': "#9F9F9F",
        'red-light': "#e3406a",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        oldEng: ['oldEng', 'Brush Script MT'],
      },
    },
  },
  plugins: [require("daisyui")],
}

