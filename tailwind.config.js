/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary : "#003049",
        secondary : "#eae2b7",
        tertiary : "#fcbf49"
      }
    },
  },
  plugins: [],
}

