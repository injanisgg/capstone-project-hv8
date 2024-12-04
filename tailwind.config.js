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
      }
    },
  },
  plugins: [],
}