
const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */

module.exports = withMT({
  content: [
    "./index.html", "./src/**/*.{js,jsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  
  ],
  theme: {
    extend: { screens: {
      phone: { min: "425px", max: "767px" },
      tablet: { min: "768px", max: "1023px" },
      laptop: "1024px",
    },},
  },
  plugins: [],
})