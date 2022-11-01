import React from "react";
import Heading from "../components/heading/heading";
import Navbar from "../components/navbar";
import Vashist from "../components/vashist/vashist";
import Head from "next/head";
import Footer from "../components/footer";
const vashist = () => {
  return (
    <div>
      <Head>
        <title>Vashisht</title>
        <link rel="shortcut icon" href="/assests/images/techaffairslogo.ico" />
      </Head>
      <Navbar></Navbar>
      <Heading name="VASHISHT" />
      <Vashist folder="vashist" />
      <Footer />
    </div>
  );
};

export default vashist;
