import React from "react";
import Heading from "../components/heading/heading";
import ClubInfo from "../components/clubs/clubinfo";
import Head from "next/head";
import Navbar from "../components/navbar";
import { clubdata } from "../components/clubs/clubdata";
import Footer from "../components/footer";
const Clubs = () => {
  let length = 10;
  let data = [];
  for (let i = 0; i < length; i++) {
    data.push(i);
  }

  let elements = data.map((item, index) => {
    return (
      <ClubInfo
        key={index}
        no={clubdata[item].no}
        picname={clubdata[item].picname}
        picmail={clubdata[item].picmail}
        picpno={clubdata[item].picpno}
        name={clubdata[item].name}
        mail={clubdata[item].mail}
        r1={clubdata[item].r1}
        ramail={clubdata[item].ramail}
        rapno={clubdata[item].rapno}
        r2={clubdata[item].r2}
        rbmail={clubdata[item].rbmail}
        rbpno={clubdata[item].rbpno}
        pic={clubdata[item].pic}
        website={clubdata[item].website}
        type={clubdata[item].type}
        background={clubdata[item].background}
        raimage={clubdata[item].raimage}
        rbimage={clubdata[item].rbimage}
        picimage={clubdata[item].picimage}
        desc={clubdata[item].desc}
        cimage1={clubdata[item].cimage1}
        cimage2={clubdata[item].cimage2}
        cimage3={clubdata[item].cimage3}
        logo={clubdata[item].logo}
        pic2={clubdata[item].pic2}
        pic2name={clubdata[item].pic2name}
        pic2image={clubdata[item].pic2image}
        pic2mail={clubdata[item].pic2mail}
        pic2pno={clubdata[item].pic2pno}
        linkedin={clubdata[item].linkedin}
        instagram={clubdata[item].instagram}
        discord={clubdata[item].discord}
      />
    );
  });
  return (
    <div>
      <Head>
        <title>OUR CLUBS</title>
        <link rel="shortcut icon" href="/assests/images/techaffairslogo.ico" />
      </Head>
      <Navbar />
      <Heading name="OUR CLUBS" />
      {elements}
      <Footer />
    </div>
  );
};

export default Clubs;
