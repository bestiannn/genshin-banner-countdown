import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";

const ServerStatus = ({ serverType }) => {
  const { totalSeconds, maintenance } = useContext(GlobalContext)[serverType];

  return <span className="text-lg text-gray-300 underline">
    {totalSeconds === 0 && "[Ready]"}
    {totalSeconds <= 18000 && totalSeconds > 0 && "[Maintenance]"}
  </span>;
};

export default ServerStatus;
