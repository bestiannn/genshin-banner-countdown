import CustomCountdown from "./CustomCountdown";
import Server from "./Server";

const ServerCountdown = ({ server, time, color }) => {
  switch (color) {
    case 0:
      return (
        <div className="bg-gradient-to-r from-yellow-200/30 to-yellow-500/80 text-white rounded-xl pt-5 pb-3 mt-5 2xl:w-3/4 2xl:mx-auto">
          <CustomCountdown time={time} />
          <Server server={server} />
        </div>
      );
    case 1:
      return (
        <div className="bg-gradient-to-r from-amber-200/30 to-amber-500/80 text-white rounded-xl pt-5 pb-3 mt-5 2xl:w-3/4 2xl:mx-auto">
          <CustomCountdown time={time} />
          <Server server={server} />
        </div>
      );
    case 2:
      return (
        <div className="bg-gradient-to-r from-orange-200/30 to-orange-500/80 text-white rounded-xl pt-5 pb-3 mt-5 2xl:w-3/4 2xl:mx-auto">
          <CustomCountdown time={time} />
          <Server server={server} />
        </div>
      );
    default:
      return (
        <div className="bg-black text-white bg-opacity-50 rounded-xl pt-5 pb-3 mt-5">
          <CustomCountdown time={time} />
          <Server server={server} />
        </div>
      );
  }
};

export default ServerCountdown;
