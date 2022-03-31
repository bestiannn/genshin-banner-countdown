import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import ServerCountdown from "./components/ServerCountdown";
import Title from "./components/Title";
import "./index.css";
import moment from "moment";

// Important Data
const title = "Kamisato Ayaka Banner Countdown"

// Time is obtained from asia banner
const timeAsia = moment('2022-04-19 18:00:00 UTC+8');
const timeEurope = moment(timeAsia).add(7, 'hours');
const timeAmerica = moment(timeAsia).add(13, 'hours');

const artist = "@Vardan66523629"
const linkArtist = "https://twitter.com/Vardan66523629"

ReactDOM.render(
  <div className="min-h-screen bg-no-repeat bg-cover bg-fixed bg-center saturate-150 img">
    
    <Title title={title} />

    <ServerCountdown server={"🌸 America"} time={timeAmerica} color={0} />

    <ServerCountdown server={"🌷 Europe"} time={timeEurope} color={1} />

    <ServerCountdown server={"🌺 Asia"} time={timeAsia} color={2} />
    
    <Footer artist={artist} linkArtist={linkArtist} />

  </div>,
  document.getElementById("root")
);
