import { Head } from "next/document";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300&family=Poppins&display=swap"
          rel="stylesheet"
        ></link>
      </Head> */}
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
