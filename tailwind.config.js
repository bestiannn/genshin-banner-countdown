/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        wallpaper: "url('/wanderer.jpg')",
      },
      backgroundPosition: {
        "center-wallpaper": "left 28% top 25%",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
