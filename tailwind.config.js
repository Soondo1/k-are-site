/** @type {import('tailwindcss').Config} */
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
        sans: ['var(--font-roboto)', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#8DA7E9',
              '&:hover': {
                color: '#132A50',
              },
            },
            h1: {
              color: '#132A50',
            },
            h2: {
              color: '#132A50',
            },
            h3: {
              color: '#132A50',
            },
          },
        },
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
};