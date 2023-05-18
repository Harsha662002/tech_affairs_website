import Head from "next/head";
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Linkcomponent from "../components/links/linkcomponent";

const Links = () => {
  return (
    <div>
      <Head>
        <title>Important Links</title>
        <link rel="shortcut icon" href="/assests/images/techaffairslogo.ico" />
      </Head>
      <Navbar />
      <Linkcomponent />
      <Footer />
    </div>
  );
};

export default Links;
