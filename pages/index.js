import Head from "next/head";
import Image from "next/image";
import Clubcard from "../components/clubcard/Clubcard";
import Heading from "../components/heading/Heading";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Heading />
      <Clubcard name="Club Name" mail="clubname@iiitdm.ac.in" type="row" />
      <Clubcard
        name="Club Name"
        mail="clubname@iiitdm.ac.in"
        type="row-reverse"
      />
      <Clubcard name="Club Name" mail="clubname@iiitdm.ac.in" type="row" />
      <Clubcard
        name="Club Name"
        mail="clubname@iiitdm.ac.in"
        type="row-reverse"
      />
      <Clubcard name="Club Name" mail="clubname@iiitdm.ac.in" type="row" />
      <Clubcard
        name="Club Name"
        mail="clubname@iiitdm.ac.in"
        type="row-reverse"
      />
    </div>
  );
}
