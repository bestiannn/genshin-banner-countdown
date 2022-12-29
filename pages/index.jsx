import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import GlobalProvider from "../components/context/GlobalProvider";
import Timers from "../components/Timers";

export default function Home({ servers }) {
  return (
    <GlobalProvider servers={servers}>
      <div className="bg-wallpaper bg-cover bg-fixed bg-center-wallpaper bg-no-repeat">
        <div className="flex min-h-screen flex-col justify-between gap-20 bg-black bg-opacity-60 text-center text-white">
          <Header />
          <Timers />
          <Footer />
        </div>
      </div>
    </GlobalProvider>
  );
}

export async function getServerSideProps() {
  let servers = {};
  try {
    const hostUrl = process.env.HOST_URL || "http://localhost:3000";

    const res = await fetch(`${hostUrl}/api/actual`);
    servers = await res.json();
  } catch (error) {
    servers = {
      Asia: {
        secondsLeft: 0,
        maintenance: false
      },
      Europe: {
        secondsLeft: 0,
        maintenance: false
      },
      America: {
        secondsLeft: 0,
        maintenance: false
      },
    };
  }

  return {
    props: { servers },
  };
}
