import Times from "./times.json";
import { DateTime } from "luxon";

export default function handler(req, res) {
  const now = DateTime.now().setZone("America/New_York");
  const actualCountdown = Times[Object.keys(Times)[0]];
  const getDifference = (date, now) => {
    return Math.trunc(date.diff(now).as("seconds")) > 0
      ? Math.trunc(date.diff(now).as("seconds"))
      : 0;
  };

  Object.keys(actualCountdown).forEach((key) => {
    const { time } = actualCountdown[key];
    
    const date = DateTime.fromISO(time)
    const secondsLeft = getDifference(date, now);

    actualCountdown[key]["secondsLeft"] = secondsLeft;
  });

  res.status(200).json(actualCountdown);
}
