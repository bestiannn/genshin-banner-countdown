import Header from "./components/Header/Header";
import Countdowns from "./components/Countdown/Countdowns";
import Footer from "./components/Footer/Footer";
import "./index.css";

import config from "./dataConfig";
const { title, subTitle, timeAsia, timeEurope, timeAmerica, artistData } =
  config;

const App = () => {
  return (
    <div className="min-h-screen bg-wallpaper bg-cover bg-fixed bg-mobile md:bg-desktop bg-no-repeat">
      <div className="flex min-h-screen w-full flex-col justify-between bg-black bg-opacity-50 py-5 text-center text-white">
        <Header title={title} subTitle={subTitle} artistData={artistData} />

        <Countdowns
          timeAsia={timeAsia}
          timeEurope={timeEurope}
          timeAmerica={timeAmerica}
        />

        <Footer />
      </div>
    </div>
  );
};

export default App;
