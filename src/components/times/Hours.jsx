import Countdown from "react-countdown";
import { containerClass, serverClass, valueClass } from "./ClassesForTime";

const hours = ({ hours }) => {
  return (
    <div className={containerClass}>
      <p className={valueClass}>{ hours >= 10 ? hours : '0' + hours }</p> 
    {/* <p className={valueClass}>xd</p> */}
      <span className={serverClass}>hours</span>
    </div>
  );
};

const Hours = ({time}) => {
  return <Countdown date={time} renderer={hours} />;
};

export default Hours;
