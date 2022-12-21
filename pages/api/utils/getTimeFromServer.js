import { DateTime } from "luxon";
import formatTime from "./formatTime";
import getDifferenceInSeconds from "./getDifferenceInSeconds";
import getFirstKey from "./getFirstKey";
import secondsToTime from "./secondsToTime";
import Times from "../times.json";

export default function getTimeFromServer() {
  const actualCountdown = getFirstKey(Times);

  Object.keys(actualCountdown).forEach((key) => {
    const { time } = actualCountdown[key];

    const date = DateTime.fromISO(time);
    const totalSeconds = getDifferenceInSeconds(date);

    const { days, hours, minutes, seconds } = secondsToTime(totalSeconds);

    actualCountdown[key]["days"] = days;
    actualCountdown[key]["hours"] = hours;
    actualCountdown[key]["minutes"] = minutes;
    actualCountdown[key]["seconds"] = seconds;
    actualCountdown[key]["timeFormatted"] = `${formatTime(
      days
    )} days ${formatTime(hours)} hours ${formatTime(
      minutes
    )} minutes ${formatTime(seconds)} seconds`;
    actualCountdown[key]["totalSeconds"] = totalSeconds;
  });

  return actualCountdown;
}
