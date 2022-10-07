import React from "react";
import AboutIntro from "../components/about/AboutIntro";
import AboutTeam from "../components/about/AboutTeam";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hexagon from "../components/about/HoneyComb";
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
