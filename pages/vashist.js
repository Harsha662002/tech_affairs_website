import React from "react";
import Heading from "../components/heading/Heading";
import Navbar from "../components/navbar";
import Vashist from "../components/vashist/Vashist";

const vashist = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Heading name="VASHIST" />
      <Vashist />
    </div>
  );
};

export default vashist;
