/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        "desat-blue": 'hsl(236, 21%, 26%)', 
        "gray-blue": 'hsl(240, 21%, 22%)', 
        "black": "#000"
      }, 
      colors: {
        'soft-red': 'hsl(345, 95%, 68%)', 
        'white': '#fff', 
        'dark-blue': 'hsl(235, 16%, 14%)'
      },
      fontFamily: {
        "red-hat": ["red-hat", "sans-serif"]
      }
    },
  },
  plugins: [],
}