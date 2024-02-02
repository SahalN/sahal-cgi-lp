/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./app/**/*.{jsx,tsx}", "./components/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["var(--font-raleway)", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
