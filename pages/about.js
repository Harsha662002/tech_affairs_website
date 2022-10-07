import React from "react";
import AboutIntro from "../components/about/aboutintro";
import AboutTeam from "../components/about/aboutteam";
import Head from "next/head";
import Navbar from "../components/navbar";
import Hexagon from "../components/about/honeycomb";
const about = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <link rel="shortcut icon" href="/assests/images/techaffairslogo.ico" />
      </Head>
      <Navbar />
      <AboutIntro></AboutIntro>
      <AboutTeam></AboutTeam>
      <Hexagon />
    </div>
  );
};

export default about;
