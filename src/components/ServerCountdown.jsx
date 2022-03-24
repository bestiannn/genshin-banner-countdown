import CustomCountdown from "./CustomCountdown";
import Server from "./Server";

const ServerCountdown = ({ server, time, color }) => {
  switch (color) {
    case 0:
      return (
        <div className="bg-gradient-to-r from-violet-400/30 to-violet-400/80 text-white rounded-xl pt-5 pb-3 mt-5 2xl:w-3/4 2xl:mx-auto">
          <CustomCountdown time={time} />
          <Server server={server} />
        </div>
      );
    case 1:
      return (
        <div className="bg-gradient-to-r from-indigo-400/30 to-indigo-400/80 text-white rounded-xl pt-5 pb-3 mt-5 2xl:w-3/4 2xl:mx-auto">
          <CustomCountdown time={time} />
          <Server server={server} />
        </div>
      );
    case 2:
      return (
        <div className="bg-gradient-to-r from-blue-400/30 to-blue-400/80 text-white rounded-xl pt-5 pb-3 mt-5 2xl:w-3/4 2xl:mx-auto">
          <CustomCountdown time={time} />
          <Server server={server} />
        </div>
      );
    case 3:
      return (
        <div className="bg-gradient-to-r from-sky-400/30 to-sky-400/80 text-white rounded-xl pt-5 pb-3 mt-5 2xl:w-3/4 2xl:mx-auto">
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
