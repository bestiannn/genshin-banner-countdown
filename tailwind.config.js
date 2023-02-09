/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        wallpaper: "url('/Dehya.jpg')",
      },
      backgroundPosition: {
        "center-wallpaper": "left 40% top 0%",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
