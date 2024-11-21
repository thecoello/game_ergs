/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        dellBlue: '#CCECFC',
        dellBlueIntense: '#007BC3'
      },
      colors:{
        dellBlueIntense: '#007BC3'
      }
    },
  },
  plugins: [],
}