import { useServersStore } from "./store/serversStore";

const ServerStatus = ({ serverType }) => {
  const { servers } = useServersStore();
  const { totalSeconds, maintenance } = servers[serverType];

  return (
    <span className="text-lg text-gray-300 underline">
      {maintenance &&
        totalSeconds <= 18000 &&
        totalSeconds > 0 &&
        "[Maintenance]"}

      {totalSeconds === 0 && "[Ready]"}
    </span>
  );
};

export default ServerStatus;
