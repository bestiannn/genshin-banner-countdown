import CustomCountdown from "./CustomCountdown";
import Server from "./Server";

const ServerCountdown = ({ server, time }) => {
  return (
    <div className="my-14">
      <Server server={server} />
      <CustomCountdown time={time} />
    </div>
  );
};

export default ServerCountdown;
