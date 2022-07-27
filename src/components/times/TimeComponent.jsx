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
      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white">
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
    <div className="mx-5 ">
      <div className="flex justify-center">
        <Countdown date={time} renderer={render} />
      </div>
      <p className="mt-5">{typeTime}</p>
    </div>
  );
};

export default TimeComponent;
