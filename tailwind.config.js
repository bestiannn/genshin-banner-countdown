/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        wallpaper: "url('/nahida.jpg')",
      },
      backgroundPosition: {
        "center-wallpaper": "left 30% top 20%",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
