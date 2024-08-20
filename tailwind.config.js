/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
  extend: {
      colors:{
        'primary': '#9e7f54',
        'secondary': '#5c3c19',
        'border': '#c4b3a2',
        'text': '#f1ece6'
      }
    },
  },
  plugins: [
        require('flowbite/plugin')
    ]
}

