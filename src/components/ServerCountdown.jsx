import CustomCountdown from "./CustomCountdown";
import Server from "./Server";

const ServerCountdown = ({ server, time }) => {
  return (
    <div className="">
      <CustomCountdown time={time} />
      <Server server={server} />
    </div>
  );
};

export default ServerCountdown;
