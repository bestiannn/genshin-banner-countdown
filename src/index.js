import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import ServerCountdown from "./components/ServerCountdown";
import Title from "./components/Title";
import "./index.css";
import moment from "moment";

const timeAsia = moment('2022-03-29 15:00:00 UTC+8');
const timeAmerica = moment('2022-03-30 04:00:00 UTC+8');
const timeEurope = moment('2022-03-29 22:00:00 UTC+8');


ReactDOM.render(
  <div className="min-h-screen bg-no-repeat bg-cover bg-fixed bg-center saturate-150 img">
    
    <Title />

    <ServerCountdown server={"🌸 America"} time={timeAmerica} color={0} />

    <ServerCountdown server={"🌷 Europe"} time={timeEurope} color={1} />

    <ServerCountdown server={"🌺 Asia"} time={timeAsia} color={2} />

    {/* <ServerCountdown server={"💐 SAR"} color={3} /> */}

    <Footer />

  </div>,
  document.getElementById("root")
);
