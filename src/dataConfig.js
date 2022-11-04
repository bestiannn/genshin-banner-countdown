import moment from "moment";

const config = {
  // Header Data
  title: "Genshin Impact 3.2 Banner Countdown",
  subTitle: "Layla, Tartaglia and Yae Miko Banner Countdown",

  // Time Data
  // sometimes the time finish first in the asian server
  timeAsia: moment.utc("2022-11-18T18:00:00+08:00"),
  timeEurope: moment.utc("2022-11-18T18:00:00+08:00").add(7, "hours"),
  timeAmerica: moment.utc("2022-11-18T18:00:00+08:00").add(13, "hours"),

  // Artist Data
  artistData: {
    name: "",
    pixiv: "",
  },
};

export default config;
