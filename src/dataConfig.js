import moment from "moment";

const config = {
  // Header Data
  title: "Genshin Impact 3.0 Countdown",
  subTitle: "Dori, Ganyu and Kokomi Banner Countdown",

  // Time Data
  // Time is obtained from asia banner server
  timeAsia: moment.utc("2022-09-09T18:00:00+08:00"),
  timeEurope: moment.utc("2022-09-09T18:00:00+08:00").add(7, "hours"),
  timeAmerica: moment.utc("2022-09-09T18:00:00+08:00").add(13, "hours"),

  // Artist Data
  artistData: {
    name: "raywallin",
    pixiv: "https://www.pixiv.net/en/users/19080275",
  },
};

export default config;
