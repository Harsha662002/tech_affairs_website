import React from "react";
import Heading from "../components/heading/Heading";
import ClubInfo from "../components/clubs/Clubinfo";
import Head from "next/head";
const Clubs = () => {
  return (
    <div>
      <Head>
        <title>OUR CLUBS</title>
      </Head>
      <Heading name="OUR CLUBS" />
      <ClubInfo
        name="SAE"
        mail="saeclub@iiitdm.ac.in"
        r1="K Mithelesh"
        ramail="mpd18i008@iiitdm.ac.in"
        rapno="9176677701"
        r2="Abaethan S"
        rbmail="mdm19b015@iiitdm.ac.in"
        rbpno="8778853602"
        website="https://infinitechallenger.in/"
        type="row"
        background="linear-gradient(to right, #e3e9e7 60%, #6998ab)"
      />
      <ClubInfo
        name="AUV"
        mail="auv.society@iiitdm.ac.in"
        r1="Muthu Shravan"
        ramail="me20b1009@iiitdm.ac.in"
        rapno="9176677701"
        r2="Venkata Madhav"
        rbmail="cs20b1047@iiitdm.ac.in"
        rbpno="99665 41718"
        website="https://auviiitdm.github.io/"
        type="row-reverse"
        background="linear-gradient(to left, #e3e9e7 60%, #6998ab)"
      />
      <ClubInfo
        name="MARS"
        mail="mars@iiitdm.ac.in"
        r1="Radhika Mittal"
        ramail="ced19i050@iiitdm.ac.in"
        rapno="9150993173"
        r2="Vishnu Kumar"
        rbmail="me20b2001@iiitdm.ac.in"
        rbpno="9672021848"
        website="https://marsroversociety.netlify.app/"
        type="row"
        background="linear-gradient(to right, #e3e9e7 60%, #6998ab)"
      />
      <ClubInfo
        name="EDC"
        mail="edc@iiitdm.ac.in"
        r1="Abhishek"
        ramail="evd19i004@iiitdm.ac.in"
        rapno="9566034502"
        r2="Aswathy Manoj Kumar"
        rbmail="evd19i028@iiitdm.ac.in"
        rbpno="7356393699"
        website="/clubs"
        type="row-reverse"
        background="linear-gradient(to left, #e3e9e7 60%, #6998ab)"
      />
      <ClubInfo
        name="EPiC"
        mail="epic@iiitdm.ac.in"
        r1="Habel Saju"
        ramail="cs20b1037@iiitdm.ac.in"
        rapno="7560942841"
        r2="Sriram Kanakam"
        rbmail="ec20b1060@iiitdm.ac.in"
        rbpno="8790139405"
        website="/clubs"
        type="row"
        background="linear-gradient(to right, #e3e9e7 60%, #6998ab)"
      />
      <ClubInfo
        name="IDC"
        mail="idc@iiitdm.ac.in"
        r1="Ram Guguloth"
        ramail="mdm19b029@iiitdm.ac.in"
        rapno="9666351636"
        website="/clubs"
        type="row-reverse"
        background="linear-gradient(to left, #e3e9e7 60%, #6998ab)"
      />
      <ClubInfo
        name="Robotics"
        mail="robotics@iiitdm.ac.in"
        r1="Utkarsh Verma"
        ramail="edm19b038@iiitdm.ac.in"
        rapno="6393832334"
        website="https://sites.google.com/view/roboticsclub-iiitdm/home"
        type="row"
        background="linear-gradient(to right, #e3e9e7 60%, #6998ab)"
      />
      <ClubInfo
        name="CS"
        mail="csclub@iiitdm.ac.in"
        r1="Kadlag Atharva Sanjay"
        ramail="ced19i015@iiitdm.ac.in"
        rapno="7620763769"
        website="https://csclub.netlify.app/"
        type="row-reverse"
        background="linear-gradient(to left, #e3e9e7 60%, #6998ab)"
      />
      <ClubInfo
        name="Optica"
        mail="optica@iiitdm.ac.in"
        r1="Prasena reddy M"
        ramail="edm19b051@iiitdm.ac.in"
        rapno="9390094481"
        r2="Venkatesh Pasumarthi"
        rbmail="edm19b039@iiitdm.ac.in"
        rbpno="8688923237"
        website="/clubs"
        type="row"
        background="linear-gradient(to right, #e3e9e7 60%, #6998ab)"
      />
      <ClubInfo
        name="GDSC"
        mail="gdsc@iiitdm.ac.in"
        r1="Aryaman Gadia"
        ramail="ced19i055@iitdm.ac.in"
        rapno="6205711441"
        website="https://gdsc.community.dev/indian-institute-of-information-technology-design-manufacturing-kancheepuram/"
        type="row-reverse"
        background="linear-gradient(to left, #e3e9e7 60%, #6998ab)"
      />
    </div>
  );
};

export default Clubs;
