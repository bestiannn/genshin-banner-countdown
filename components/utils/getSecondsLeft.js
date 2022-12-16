const getSecondsLeft = (servers) => {
  const { America, Europe, Asia } = servers;
  const { secondsLeft: secondsLeftAmerica } = America;
  const { secondsLeft: secondsLeftEurope } = Europe;
  const { secondsLeft: secondsLeftAsia } = Asia;

  return {
    secondsLeftAmerica,
    secondsLeftEurope,
    secondsLeftAsia,
  };
};

export default getSecondsLeft;
