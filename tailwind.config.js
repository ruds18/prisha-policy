/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
          blue_light: '#EDF5FF',
          blue_dark : '#27378C',
          red_custom: '#FFEDED',
          grey_custom:'#E9E9E9'
      },
    },
  plugins: [],
}
}
