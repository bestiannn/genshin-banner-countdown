import moment from "moment";

const config = {
  // Header Data
  title: "Genshin Impact 3.0 Banner Countdown",
  subTitle: "Tighnari and Collei Banner Countdown",

  // Time Data
  // Time is obtained from asia banner server
  timeAsia: moment.utc("2022-08-23T22:00:00+08:00"),
  timeEurope: moment.utc("2022-08-23T22:00:00+08:00").add(7, "hours"),
  timeAmerica: moment.utc("2022-08-23T22:00:00+08:00").add(13, "hours"),

  // Artist Data
  artistData: {
    name: "るしお",
    twitter: "https://twitter.com/Luci0_52/",
    pixiv: "https://www.pixiv.net/en/users/24529568",
  },
};

export default config;
