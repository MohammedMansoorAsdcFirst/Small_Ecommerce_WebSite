/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'lightWhite' : 'rgba(255,255,255,0.75)',
        'lightBlack' : '#0e101c'
      }
    },
  },
  plugins: [],
}

