/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        wallpaper: "url('/Furina.webp')",
      },
      backgroundPosition: {
        "center-wallpaper": "left 48% top 50%",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
