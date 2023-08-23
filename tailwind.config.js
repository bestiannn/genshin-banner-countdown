/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        wallpaper: "url('/Freminet.webp')",
      },
      backgroundPosition: {
        "center-wallpaper": "left 70% top 25%",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
