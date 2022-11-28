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
        wallpaper: "url('/Scaramouche-Matt-Bellamont.png')",
      },
    },
  },
  plugins: [],
};
