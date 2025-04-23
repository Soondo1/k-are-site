// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // from your Figma design system
        lightBlue:  "#DCEBFF",  // pale background on cards
        blue:       "#B5CEFF",  // primary button/illustration accent
        mediumBlue: "#8DA7E9",  // headings & interactive hover
        darkBlue:   "#132A50",  // main nav & card bg

        // extra pastel for Top Questions panel
        lavender:   "#E2D7FF"
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}
