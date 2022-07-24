import Countdown from "react-countdown";

const TimeComponent = ({ type, time }) => {
  const render = ({ days, hours, minutes, seconds }) => {
    const logicDay = days >= 10 ? days : "0" + days;
    const logicHours = hours >= 10 ? hours : "0" + hours;
    const logicMinutes = minutes >= 10 ? minutes : "0" + minutes;
    const logicSeconds = seconds >= 10 ? seconds : "0" + seconds;

    const finalLogic =
      type === "day"
        ? logicDay
        : type === "hour"
        ? logicHours
        : type === "minute"
        ? logicMinutes
        : logicSeconds;
    return (
      <div className="">
        {finalLogic}
      </div>
    );
  };

  const typeTime =
    type === "day"
      ? "Days"
      : type === "hour"
      ? "Hours"
      : type === "minute"
      ? "Minutes"
      : "Seconds";

  return (
    <div>
      <Countdown date={time} renderer={render} />
      <p className="">{typeTime}</p>
    </div>
  );
};

export default TimeComponent;
