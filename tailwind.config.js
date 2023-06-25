/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        wallpaper: "url('/Eula.webp')",
      },
      backgroundPosition: {
        "center-wallpaper": "left 50% top 25%",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
