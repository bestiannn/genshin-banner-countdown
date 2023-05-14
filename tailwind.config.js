/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        wallpaper: "url('/kirara.png')",
      },
      backgroundPosition: {
        "center-wallpaper": "left 30% top 25%",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
