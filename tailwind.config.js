/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add 'Red Hat Display' to the fontFamily object
        display: ['"Red Hat Display"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

