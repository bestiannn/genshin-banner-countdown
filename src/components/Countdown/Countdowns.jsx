import ServerCountdown from "./ServerCountdown/ServerCountdown";

const Countdowns = ({ timeAmerica, timeEurope, timeAsia }) => {
  return (
    <div className="select-none text-lg font-bold">
      <ServerCountdown server={"🌲 America"} time={timeAmerica} />

      <ServerCountdown server={"🌱 Europe"} time={timeEurope} />

      <ServerCountdown server={"🌴 Asia"} time={timeAsia} />
    </div>
  );
};

export default Countdowns;
