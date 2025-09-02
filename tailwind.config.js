/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: "#FFA954",
          400: "#FF8F26",
          500: "#FF6A00",
          700: "#B34400",
        },
        gray: {
          800: "#171717",
        },
      },
      fontFamily: {
        coconat: [
          "Coconat",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0 0 20px rgba(255, 106, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
