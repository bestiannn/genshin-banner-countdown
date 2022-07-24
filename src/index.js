// Do You believe in spaghetti code?
import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import ServerCountdown from "./components/ServerCountdown";
import Title from "./components/Title";
import "./index.css";
import moment from "moment";

// Important Data
const title = "Genshin Impact 3.0 Banner Countdown";
const subTitle = "Tighnari and Collei Banner Countdown";

// Time is obtained from asia banner server
const timeAsia = moment.utc("2022-08-02T18:00:00+08:00");
const timeEurope = moment(timeAsia).add(7, "hours");
const timeAmerica = moment(timeAsia).add(13, "hours");

const artist = "@MattBellamont";
const linkArtist = "https://twitter.com/MattBellamont/";

ReactDOM.render(
  <div className="bg-wallpaper h-screen bg-no-repeat bg-cover bg-fixed bg-center text-white text-center">
    <Title title={title} subTitle={subTitle} />

    <ServerCountdown server={"🎆 America"} time={timeAmerica} />

    <ServerCountdown server={"🎉 Europe"} time={timeEurope} />

    <ServerCountdown server={"🎇 Asia"} time={timeAsia} />

    <Footer artist={artist} linkArtist={linkArtist} />
  </div>,
  document.getElementById("root")
);
