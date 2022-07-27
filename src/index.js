// Do You believe in spaghetti code?
import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import ServerCountdown from "./components/ServerCountdown";
import Header from "./components/Header";
import "./index.css";
import moment from "moment";

// Important Data
const title = "Genshin Impact 3.0 Banner Countdown";
const subTitle = "Tighnari and Collei Banner Countdown";

// Time is obtained from asia banner server
const timeAsia = moment.utc("2022-08-02T18:00:00+08:00");
const timeEurope = moment(timeAsia).add(7, "hours");
const timeAmerica = moment(timeAsia).add(13, "hours");

const artistData = {
  name: "Matt Bellamont",
  twitter: "https://twitter.com/MattBellamont/",
  pixiv: "https://www.pixiv.net/en/artworks/99334789",
};

// refactor this later

ReactDOM.render(
  <div className="min-h-screen bg-wallpaper bg-cover bg-fixed bg-center bg-no-repeat">
    <div className="flex min-h-screen w-full flex-col justify-between bg-black bg-opacity-50 py-5 text-center text-white">
      <Header title={title} subTitle={subTitle} artistData={artistData} />

      <div className="select-none text-lg font-bold">
        <ServerCountdown server={"🎆 America"} time={timeAmerica} />

        <ServerCountdown server={"🎉 Europe"} time={timeEurope} />

        <ServerCountdown server={"🎇 Asia"} time={timeAsia} />
      </div>

      <Footer />
    </div>
  </div>,
  document.getElementById("root")
);
