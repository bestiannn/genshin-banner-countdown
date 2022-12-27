import { useEffect, useState } from "react";

const useCountdown = (initialSeconds) => {
  const [secondsState, setSecondsState] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsState((secondsState) =>
        secondsState > 0 ? secondsState - 1 : secondsState
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => (seconds >= 10 ? seconds : `0${seconds}`);

  const days = formatTime(Math.trunc(secondsState / 86400));
  const hours = formatTime(Math.trunc((secondsState % 86400) / 3600));
  const minutes = formatTime(Math.trunc((secondsState % 3600) / 60));
  const seconds = formatTime(Math.trunc(secondsState % 60));

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

export default useCountdown;
