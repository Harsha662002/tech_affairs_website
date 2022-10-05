import React from "react";
import Heading from "../components/heading/Heading";
import Navbar from "../components/navbar";
import Vashist from "../components/vashist/Vashist";
import Head from "next/head";
const vashist = () => {
  return (
    <div>
      <Head>
        <title>Vashist</title>
        <link rel="shortcut icon" href="/assests/images/techaffairslogo.ico" />
      </Head>
      <Navbar></Navbar>
      <Heading name="VASHIST" />
      <Vashist folder="vashist" />
    </div>
  );
};

export default vashist;
