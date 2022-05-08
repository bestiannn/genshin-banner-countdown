import Countdown from "react-countdown";
import { containerClass, serverClass, valueClass } from "./ClassesForTime";

const days = ({ days }) => {
  return (
    <div className={containerClass}>
      //<p className={valueClass}>{ days >= 10 ? days : '0' + days }</p>
       <p className={valueClass}>xd</p>
      <span className={serverClass}>days</span>
    </div>
  );
};

const Days = ({time}) => {
  return <Countdown date={time} renderer={days} />;
};

export default Days;
