import moment from "moment";

const config = {
  // Header Data
  title: "Genshin Impact 3.2 Banner Countdown",
  subTitle: "Nahida and Layla Banner Countdown",

  // Time Data
  // sometimes the time finish first in the asian server
  timeAsia: moment.utc("2022-11-01T17:00:00-03:00"),
  timeEurope: moment.utc("2022-11-01T17:00:00-03:00"),
  timeAmerica: moment.utc("2022-11-01T17:00:00-03:00"),

  // Artist Data
  artistData: {
    name: "",
    pixiv: "",
  },
};

export default config;
