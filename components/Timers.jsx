import Countdown from "./Countdown";
import ServerStatus from "./ServerStatus";
import { useServersStore } from "./store/serversStore";
import getSecondsLeft from "./utils/getSecondsLeft";

const Timers = () => {
  const { servers } = useServersStore();

  const { secondsLeftAmerica, secondsLeftEurope, secondsLeftAsia } =
    getSecondsLeft(servers);

  return (
    <main className="flex h-96 flex-col justify-between gap-5 xl:gap-10">
      <div>
        <h3 className="mb-3 text-2xl font-bold xl:text-3xl">
          America <ServerStatus serverType={"America"} />
        </h3>
        <Countdown initialSeconds={secondsLeftAmerica} />
      </div>
      <div>
        <h3 className="mb-3 text-2xl font-bold xl:text-3xl">
          Europe <ServerStatus serverType={"Europe"} />
        </h3>
        <Countdown initialSeconds={secondsLeftEurope} />
      </div>
      <div>
        <h3 className="mb-3 text-2xl font-bold xl:text-3xl">
          Asia <ServerStatus serverType={"Asia"} />
        </h3>
        <Countdown initialSeconds={secondsLeftAsia} />
      </div>
    </main>
  );
};

export default Timers;
