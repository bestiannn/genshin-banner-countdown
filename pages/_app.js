import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="shortcut icon" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#bdb2ff" />

        {/* <!-- Primary Meta Tags --> */}
        <title>Genshin 3.3 Banner Countdown</title>
        <meta
          name="title"
          content="Genshin 3.3 Countdown - Raiden Shogun and Kamisato Ayato Countdown"
        />
        <meta
          name="description"
          content="Shogun Raiden and Kamisato Ayato Banner Countdown. Genshin Impact 3.3 Countdown in all servers. Countdown in America, Europe and Asia."
        />
        <meta
          name="keywords"
          content="Genshin, Impact, Banner, Rerun, Countdown, Raiden, Shogun, Kamisato, Ayato"
        />
        <meta name="author" content="Bestianbluns" />
        <link rel="apple-touch-icon" href="/icon.png" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://genshin-banner-countdown.netlify.app/"
        />
        <meta property="og:title" content="Genshin Impact 3.3 Countdown" />
        <meta
          property="og:description"
          content="Genshin Impact Banner Countdown, 3.3 Countdown."
        />
        <meta property="og:image" content="/banner.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://genshin-banner-countdown.netlify.app/"
        />
        <meta property="twitter:title" content="Genshin Impact 3.3 Countdown" />
        <meta
          property="twitter:description"
          content="Genshin Impact Banner Countdown, 3.3 Countdown."
        />
        <meta property="twitter:image" content="/banner.png" />

        {/* <!-- Google Search Console --> */}
        <meta
          name="google-site-verification"
          content="zE_yfZY4H-trYpIUae8Z5UDIx86SRJmCu5yEEENhCgQ"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
