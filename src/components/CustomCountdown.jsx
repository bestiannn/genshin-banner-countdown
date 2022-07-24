import TimeComponent from "./times/TimeComponent";

const CustomCountdown = ({time}) => {

  return (
    <div className="flex justify-center">
      <TimeComponent type={"day"} time={time} />
      <TimeComponent type={"hour"} time={time} />
      <TimeComponent type={"minute"} time={time} />
      <TimeComponent type={"second"} time={time} />
    </div>
  );
};

export default CustomCountdown;
