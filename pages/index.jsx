import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import GlobalProvider from "../components/context/GlobalProvider";
import Timers from "../components/Timers";

export default function Home({ servers }) {
  return (
    <GlobalProvider servers={servers}>
      <div className="bg-wallpaper bg-cover bg-fixed bg-center bg-no-repeat">
        <div className="flex min-h-screen flex-col justify-between bg-black bg-opacity-60 text-white text-center">
          <Header />
          <Timers />
          <Footer />
        </div>
      </div>
    </GlobalProvider>
  );
}

export async function getServerSideProps() {
  const hostUrl = process.env.HOST_URL || "http://localhost:5173";

  const res = await fetch(`${hostUrl}/api/actual`);
  const servers = await res.json();

  return {
    props: { servers },
  };
}
