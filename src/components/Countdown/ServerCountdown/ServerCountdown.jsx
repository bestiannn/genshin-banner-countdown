import CustomCountdown from "./components/CustomCountdown";
import Server from "./components/Server";

const ServerCountdown = ({ server, time }) => {
  return (
    <div className="my-16">
      <Server server={server} />
      <CustomCountdown time={time} />
    </div>
  );
};

export default ServerCountdown;
