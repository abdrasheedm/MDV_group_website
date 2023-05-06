/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary : "#00044A",
        secondary : "#27CB8B",
        tertiary : "#fcbf49"
      }
    },
  },
  plugins: [],
}

