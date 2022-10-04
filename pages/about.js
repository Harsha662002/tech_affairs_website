import React from "react";
import AboutIntro from "../components/about/AboutIntro";
import AboutTeam from "../components/about/AboutTeam";
import Head from "next/head";
const about = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <AboutIntro></AboutIntro>
      <AboutTeam></AboutTeam>
    </div>
  );
};

export default about;
