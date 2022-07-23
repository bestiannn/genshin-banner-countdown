import CustomCountdown from "./CustomCountdown";
import Server from "./Server";

const ServerCountdown = ({ server, time }) => {
  return (
    <div className="mx-auto mt-10 w-full sm:w-3/4 lg:w-1/2 bg-black bg-opacity-50 rounded-3xl py-5">
      <CustomCountdown time={time} />
      <Server server={server} />
    </div>
  );
};

export default ServerCountdown;
