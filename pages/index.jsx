import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import { useServersStore } from "../components/store/serversStore";
import Timers from "../components/Timers";
import getTimeFromServer from "./api/utils/getTimeFromServer";
import shallow from "zustand/shallow";

export default function Home({ servers }) {
  // set new data from server to store
  const setServers = useServersStore((state) => state.setServers, shallow);
  setServers(servers);

  return (
    <div className="bg-wallpaper bg-cover bg-fixed bg-center-wallpaper bg-no-repeat bg-purple-600">
      <div className="flex min-h-screen flex-col justify-between gap-20 bg-black bg-opacity-60 text-center text-white">
        <Header />
        <Timers />
        <Footer />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: { servers: getTimeFromServer() },
  };
}
