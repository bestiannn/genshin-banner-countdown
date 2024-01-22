/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        wallpaper: "url('/genshin4.4.jpg')",
      },
      backgroundPosition: {
        "center-wallpaper": "left 50% top 50%",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
