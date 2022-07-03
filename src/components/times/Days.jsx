import Countdown from "react-countdown";
import TimeComponent from "./TimeComponent";

const render = ({ days }) => {
    return (
      <TimeComponent>{ days >= 10 ? days : '0' + days }</TimeComponent>
    )
  };

const Days = ({ time }) => {
  return (
    <div>
      <TimeComponent date={time} type={"day"} />
      <p>days</p>
    </div>
  )
}

export default Days