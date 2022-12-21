export default function secondsToTime(totalSeconds) {
  const days = Math.trunc(totalSeconds / 86400);
  const hours = Math.trunc((totalSeconds % 86400) / 3600);
  const minutes = Math.trunc((totalSeconds % 3600) / 60);
  const seconds = Math.trunc(totalSeconds % 60);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}
