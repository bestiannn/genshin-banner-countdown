import useCountdown from "./hooks/useCountdown";

const Countdown = ({ initialSeconds }) => {
  const { days, hours, minutes, seconds } = useCountdown(initialSeconds);

  return (
    <ul className="flex justify-center gap-5 text-lg lg:text-xl xl:text-2xl">
      <li className="flex flex-col">
        <strong>{days}</strong>
        <span className="text-base lg:text-lg">days</span>
      </li>
      <li className="flex flex-col">
        <strong>{hours}</strong>
        <span className="text-base lg:text-lg">hours</span>
      </li>
      <li className="flex flex-col">
        <strong>{minutes}</strong>
        <span className="text-base lg:text-lg">minutes</span>
      </li>
      <li className="flex flex-col">
        <strong>{seconds}</strong>
        <span className="text-base lg:text-lg">seconds</span>
      </li>
    </ul>
  );
};

export default Countdown;
