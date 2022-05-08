import Countdown from "react-countdown";
import { containerClass, serverClass, valueClass } from "./ClassesForTime";

const seconds = ({ seconds }) => {
  return (
    <div className={containerClass}>
      {/* <p className={valueClass}>{ seconds >= 10 ? seconds : '0' + seconds }</p> */}
    <p className={valueClass}>xd</p>
      <span className={serverClass}>seconds</span>
    </div>
  );
};

const Seconds = ({time}) => {
  return <Countdown date={time} renderer={seconds} />;
};

export default Seconds;
