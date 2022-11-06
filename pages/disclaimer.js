import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Disclaimer from "../components/disclaimer/disclaimer";
const disclaimer = () => {
  return (
    <div>
      <Navbar />
      <Disclaimer />
      <Footer />
    </div>
  );
};

export default disclaimer;
