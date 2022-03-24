import moment from "moment";
import Days from "./times/Days";
import Hours from "./times/Hours";
import Minutes from "./times/Minutes";
import Seconds from "./times/Seconds";

const CustomCountdown = ({time}) => {

  return (
    <div className="flex justify-evenly text-center select-none">
      <Days time={time} />
      <Hours time={time} />
      <Minutes time={time} />
      <Seconds time={time} />
    </div>
  );
};

export default CustomCountdown;
