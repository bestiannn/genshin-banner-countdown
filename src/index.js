import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import ServerCountdown from "./components/ServerCountdown";
import Title from "./components/Title";
import "./index.css";
import moment from "moment";

// Important Data
const title = "Yoimiya Banner Rerun Countdown";

// Time is obtained from asia banner server
// const timeAmerica = moment.utc("2022-08-02T18:00:00+08:00");
// const timeEurope = moment(timeAmerica).subtract(6, "hours");
// const timeAsia = moment(timeAmerica).subtract(12, "hours");
const timeAsia = moment.utc("2022-08-02T18:00:00+08:00");
const timeEurope = moment(timeAsia).add(7, "hours");
const timeAmerica = moment(timeAsia).add(13, "hours");
// const timeAsia = moment("2022-07-12 16:00:00 UTC+8");
// const timeEurope = moment(timeAsia).add(6, "hours");
// const timeAmerica = moment(timeAsia).add(12, "hours");

const artist = "@yolanda315732";
const linkArtist = "https://twitter.com/yolanda315732";

ReactDOM.render(
  <div className="img min-h-screen bg-no-repeat bg-cover bg-fixed bg-center">
    <div className="bg-black h-screen bg-opacity-10 w-screen fixed z-0"></div>

    <div className="text-white text-center min-h-screen w-screen fixed z-10 top-0 bottom-0 overflow-x-hidden overflow-y-visible pb-36">
      
      <Title title={title} />

      <ServerCountdown server={"🎆 America"} time={timeAmerica} />

      <ServerCountdown server={"🎉 Europe"} time={timeEurope} />

      <ServerCountdown server={"🎇 Asia"} time={timeAsia} />

      <Footer artist={artist} linkArtist={linkArtist} />

    </div>
  </div>,
  document.getElementById("root")
);
