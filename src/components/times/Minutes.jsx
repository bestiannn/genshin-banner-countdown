import Countdown from "react-countdown";
import { containerClass, serverClass, valueClass } from "./ClassesForTime";

const minutes = ({ minutes }) => {
  return (
    <div className={containerClass}>
      <p className={valueClass}>{ minutes >= 10 ? minutes : '0' + minutes }</p>
    {/* <p className={valueClass}>xd</p> */}
      <span className={serverClass}>minutes</span>
    </div>
  );
};

const Minutes = ({time}) => {
  return <Countdown date={time} renderer={minutes} />;
};

export default Minutes;
