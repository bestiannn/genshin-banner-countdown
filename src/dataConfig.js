import moment from "moment";

const config = {
  // Header Data
  title: "Genshin Impact 3.1 Banner Countdown",
  subTitle: "Nilou and Albedo Banner Countdown",

  // Time Data
  // sometimes the time finish first in the asian server
  timeAsia: moment.utc("2022-10-14T18:00:00+08:00"),
  timeEurope: moment.utc("2022-10-14T18:00:00+08:00").add(7, "hours"),
  timeAmerica: moment.utc("2022-10-14T18:00:00+08:00").add(13, "hours"),

  // Artist Data
  artistData: {
    name: "",
    pixiv: "",
  },
};

export default config;
