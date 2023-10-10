/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    extend: {},
    backgroundColor: {
      "desat-blue": 'hsl(236, 21%, 26%)', 
      "gray-blue": 'hsl(240, 21%, 22%)'
    }, 
    colors: {
      'soft-red': 'hsl(345, 95%, 68%)', 
      'white': '#fff'
    }
  },
  plugins: [],
}