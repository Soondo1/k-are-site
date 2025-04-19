/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

// 1. tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css}',
    './content/articles/**/*.md'
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: '#DCEBFF',
        blue: '#B5CEFF',
        mediumBlue: '#8DA7E9',
        darkBlue: '#132A50',
        lavender: '#E2D9FF',
        midLavender: '#C1B3FF'
      },
      fontFamily: {
        sans: ['Roboto','sans-serif'],
      }
    }
  },
  plugins: []
};