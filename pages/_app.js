import Head from "next/head";
import "../styles/globals.css";
import Config from "../public/config.json";

function MyApp({ Component, pageProps }) {
  const { title, description, characters, colorPage } = Config;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={colorPage} />

        {/* <!-- Primary Meta Tags --> */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content={`Genshin, Impact, Banner, Countdown, Rerun, ${characters.join(
            ", "
          )}`}
        />
        <meta name="author" content="Bestianbluns" />
        <link rel="apple-touch-icon" href="/icon.png" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://genshin-banner-countdown.netlify.app/"
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={title} />
        <meta property="og:image" content="/banner.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://genshin-banner-countdown.netlify.app/"
        />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={title} />
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
