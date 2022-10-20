module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundPosition: {
      'mobile': 'center',
      'desktop': 'center top 30%',
    },
    extend: {
      "backgroundImage":{
        "wallpaper": "url('/public/Nahida-wallpaper.jpg')"
      }
    },
  },
  plugins: [],
};
