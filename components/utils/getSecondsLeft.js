const getSecondsLeft = (servers) => {
  const { America, Europe, Asia } = servers;
  const { totalSeconds: secondsLeftAmerica } = America;
  const { totalSeconds: secondsLeftEurope } = Europe;
  const { totalSeconds: secondsLeftAsia } = Asia;

  return {
    secondsLeftAmerica,
    secondsLeftEurope,
    secondsLeftAsia,
  };
};

export default getSecondsLeft;
