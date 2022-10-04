import React from "react";
import Heading from "../components/heading/Heading";
import Navbar from "../components/navbar";
import Vashist from "../components/vashist/Vashist";

const vashist = () => {
  return (
    <div>
      <Head>
        <title>Vashist</title>
      </Head>
      <Navbar></Navbar>
      <Heading name="VASHIST" />
      <Vashist folder="vashist" />
    </div>
  );
};

export default vashist;
