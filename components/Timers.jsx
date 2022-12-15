import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import Countdown from "./Countdown";

const Timers = () => {
  const servers = useContext(GlobalContext);
  const { America, Europe, Asia } = servers;
  const { secondsLeft: secondsLeftAmerica } = America;
  const { secondsLeft: secondsLeftEurope } = Europe;
  const { secondsLeft: secondsLeftAsia } = Asia;

  return (
    <main className="flex h-96 flex-col justify-evenly">
      <div>
        <h3 className="text-2xl font-bold">America</h3>
        <Countdown initialSeconds={Number(secondsLeftAmerica)} />
      </div>

      <div>
        <h3 className="text-2xl font-bold">Europe</h3>
        <Countdown initialSeconds={Number(secondsLeftEurope)} />
      </div>
      <div>
        <h3 className="text-2xl font-bold">Asia</h3>
        <Countdown initialSeconds={Number(secondsLeftAsia)} />
      </div>
    </main>
  );
};

export default Timers;
