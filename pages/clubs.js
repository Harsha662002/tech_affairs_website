import React from "react";
import Heading from "../components/heading/Heading";
import ClubInfo from "../components/clubs/ClubInfo";
import Head from "next/head";
const Clubs = () => {
  return (
    <div>
      <Head>
        <title>Our Clubs</title>
      </Head>
      <Heading name="OUR CLUBS" />
      <ClubInfo
        name="SAE"
        mail="saeclub@iiitdm.ac.in"
        r1="K Mithelesh"
        r2="Abaethan S"
        website="https://infinitechallenger.in/"
        type="row"
        background="linear-gradient(to right, #e3e9e7 60%, #6998ab)"
      />
      <ClubInfo
        name="AUV"
        mail="auv.society@iiitdm.ac.in"
        r1="Muthu Shravan"
        r2="Venkata Madhav"
        website="https://auviiitdm.github.io/"
        type="row-reverse"
        background="linear-gradient(to left, #e3e9e7 60%, #6998ab)"
      />
      <ClubInfo
        name="MARS"
        mail="mars@iiitdm.ac.in"
        r1="Radhika Mittal"
        r2="Vishnu Kumar"
        website="https://marsroversociety.netlify.app/"
        type="row"
        background="linear-gradient(to right, #e3e9e7 60%, #6998ab)"
      />
      <ClubInfo
        name="EDC"
        mail="edc@iiitdm.ac.in"
        r1="Abhishek"
        r2="Aswathy Manoj Kumar"
        website="/clubs"
        type="row-reverse"
        background="linear-gradient(to left, #e3e9e7 60%, #6998ab)"
      />
      <ClubInfo
        name="EPiC"
        mail="epic@iiitdm.ac.in"
        r1="Habel Saju"
        r2="Sriram Kanakam"
        website="/clubs"
        type="row"
        background="linear-gradient(to right, #e3e9e7 60%, #6998ab)"
      />
      <ClubInfo
        name="IDC"
        mail="idc@iiitdm.ac.in"
        r1="Ram Guguloth"
        website="/clubs"
        type="row-reverse"
        background="linear-gradient(to left, #e3e9e7 60%, #6998ab)"
      />
      <ClubInfo
        name="Robotics"
        mail="robotics@iiitdm.ac.in"
        r1="Utkarsh Verma"
        website="https://sites.google.com/view/roboticsclub-iiitdm/home"
        type="row"
        background="linear-gradient(to right, #e3e9e7 60%, #6998ab)"
      />
      <ClubInfo
        name="CS"
        mail="csclub@iiitdm.ac.in"
        r1="Kadlag Atharva Sanjay"
        website="https://csclub.netlify.app/"
        type="row-reverse"
        background="linear-gradient(to left, #e3e9e7 60%, #6998ab)"
      />
      <ClubInfo
        name="Optica"
        mail="optica@iiitdm.ac.in"
        r1="Prasena reddy M"
        r2="Venkatesh Pasumarthi"
        website="/clubs"
        type="row"
        background="linear-gradient(to right, #e3e9e7 60%, #6998ab)"
      />
      <ClubInfo
        name="GDSC"
        mail="gdsc@iiitdm.ac.in"
        r1="Aryaman Gadia"
        website="https://gdsc.community.dev/indian-institute-of-information-technology-design-manufacturing-kancheepuram/"
        type="row-reverse"
        background="linear-gradient(to left, #e3e9e7 60%, #6998ab)"
      />
    </div>
  );
};

export default Clubs;
