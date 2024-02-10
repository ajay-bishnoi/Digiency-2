/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        worksans: "'Work Sans', sans-serif",
      },
    },
  },
  plugins: [require("autoprefixer")],
};
