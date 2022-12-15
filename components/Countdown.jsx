import React, { useState, useEffect } from "react";

const Countdown = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function secondsToTimeString(totalSeconds) {
    const formatTimeComponent = (value) => (value >= 10 ? value : `0${value}`);

    const { days,hours, minutes, seconds } = getTimeComponents(totalSeconds);

    return `${formatTimeComponent(days)}:${formatTimeComponent(hours)}:${formatTimeComponent(
      minutes
    )}:${formatTimeComponent(seconds)}`;
  }

  function getTimeComponents(totalSeconds) {
    const days = Math.trunc(totalSeconds / 86400);
    const hours = Math.trunc((totalSeconds % 86400) / 3600);
    const minutes = Math.trunc((totalSeconds % 3600) / 60);
    const seconds = Math.trunc(totalSeconds % 60);

    return {days, hours, minutes, seconds };
  }

  return <p className="text-lg font-semibold">{secondsToTimeString(seconds)}</p>;
};

export default Countdown;
