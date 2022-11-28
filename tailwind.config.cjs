/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundPosition: {
      mobile: "center",
      desktop: "center top 20%",
    },
    extend: {
      backgroundImage: {
        wallpaper: "url('./public/Scaramouche-Matt-Bellamont.png')",
      },
    },
  },
  plugins: [],
};
