/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        wallpaper: "url('/Lyney.jpg')",
      },
      backgroundPosition: {
        "center-wallpaper": "left 52% top 10%",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
