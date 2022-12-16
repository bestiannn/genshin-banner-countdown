import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import Countdown from "./Countdown";
import getSecondsLeft from "./utils/getSecondsLeft";

const Timers = () => {
  const { secondsLeftAmerica, secondsLeftEurope, secondsLeftAsia } =
    getSecondsLeft(useContext(GlobalContext));

  return (
    <main className="flex h-96 flex-col justify-between gap-5 xl:gap-10">
      <div>
        <h3 className="mb-3 text-2xl font-bold xl:text-3xl">America</h3>
        <Countdown initialSeconds={Number(secondsLeftAmerica)} />
      </div>
      <div>
        <h3 className="mb-3 text-2xl font-bold xl:text-3xl">Europe</h3>
        <Countdown initialSeconds={Number(secondsLeftEurope)} />
      </div>
      <div>
        <h3 className="mb-3 text-2xl font-bold xl:text-3xl">Asia</h3>
        <Countdown initialSeconds={Number(secondsLeftAsia)} />
      </div>
    </main>
  );
};

export default Timers;
