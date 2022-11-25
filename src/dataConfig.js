import moment from "moment";

const config = {
  // Header Data
  title: "Genshin Impact 3.3 Banner Countdown",
  subTitle: "Wanderer/Scaramouche, Arataki Itto and Faruzan Banner Countdown",

  // Time Data
  // sometimes the time finish first in the asian server
  timeAsia: moment.utc("2022-12-07T00:00:00-03:00"),
  timeEurope: moment.utc("2022-12-07T00:00:00-03:00"),
  timeAmerica: moment.utc("2022-12-07T00:00:00-03:00"),

  // Artist Data
  artistData: {
    name: "Matt Bellamont",
    twitter: "https://twitter.com/MattBellamont",
  },
};

export default config;
