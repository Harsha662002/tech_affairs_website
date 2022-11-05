import React from "react";
import Navbar from "../components/navbar";
import Heading from "../components/heading/heading";
import GalleryHeading from "../components/gallery/galleryheading";
import styles from "../components/gallery/gallery.module.css";
import GalleryInfo from "../components/gallery/galleryinfo";
import Head from "next/head";
import Footer from "../components/footer";

const gallery = () => {
  return (
    <div>
      <Head>
        <title>Gallery</title>
        <link rel="shortcut icon" href="/assests/images/techaffairslogo.ico" />
      </Head>
      <Navbar></Navbar>
      <Heading name="GALLERY" />
      <div className={styles.body}>
        <GalleryHeading />
        <GalleryInfo subheading="Tech Expo" folder="recent" />
        {/* <GalleryInfo subheading="Other Activities" folder="others" /> */}
        {/* <GalleryInfo subheading="Club Events" folder="ClubEvents" /> */}
      </div>
      <Footer />
    </div>
  );
};

export default gallery;
