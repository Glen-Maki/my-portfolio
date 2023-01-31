/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-color": "#F5EFE6",
        "sub-color": "#AEBDCA",
        "card-color": "#EAC7C7",
        "card-hovered": "#FF8DC7",
      },
    },
  },
  plugins: [],
};
