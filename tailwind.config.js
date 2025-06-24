/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-army' : '#05511B',
        'main-yellow' : '#FAC500',
        'landing' : "#F2F0F1",
        'img-grey' : "#F0EEED"
      },
      fontFamily: {
        'main': ['Bebas Neue', 'Inter Tight']
      },
      screens: {
        // mobile small - large
        sm : "425px", //hp
        md : "768px", //tablet
        //pc or laptop small - large
        lg : "1024px", //laptop kecil
        xl : "1280px", //laptop gg 1496, kebanyakan laptop 1240
        '1xl' : '1496px'
      }
    },
  },
  plugins: [],
}