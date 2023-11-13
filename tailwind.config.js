/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        wallpaper: "url('/cyno.webp')",
      },
      backgroundPosition: {
        "center-wallpaper": "left 50% top 35%",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
