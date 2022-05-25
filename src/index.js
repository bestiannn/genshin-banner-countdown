import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import ServerCountdown from "./components/ServerCountdown";
import Title from "./components/Title";
import "./index.css";
import moment from "moment";

// Important Data
const title = "Yelan Banner Countdown"

// Data
// https://www.pockettactics.com/genshin-impact/update#:~:text=The%20Genshin%20Impact%202.7%20livestream,12%3A00%20UTC%2D4.
// https://game8.co/games/Genshin-Impact/archives/372798

// Time is obtained from asia banner
const timeAsia = moment('2022-05-31 11:00:00 UTC+8');
const timeEurope = moment(timeAsia).add(5, 'hours');
const timeAmerica = moment(timeAsia).add(12, 'hours');

const artist = "@Dogface59085274"
const linkArtist = "https://twitter.com/Dogface59085274"

ReactDOM.render(
  <div className="min-h-screen bg-no-repeat bg-cover bg-fixed bg-center md:bg-[center_top_-10rem] saturate-150 img">
    
    <Title title={title} />

    <ServerCountdown server={"💎 America"} time={timeAmerica} color={0} />

    <ServerCountdown server={"💙 Europe"} time={timeEurope} color={1} />

    <ServerCountdown server={"🌊 Asia"} time={timeAsia} color={2} />
    
    <Footer artist={artist} linkArtist={linkArtist} />

  </div>,
  document.getElementById("root")
);
