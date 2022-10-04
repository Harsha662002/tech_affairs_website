import React from "react";
import Navbar from "../components/navbar";
import Heading from "../components/heading/Heading";
import GalleryHeading from "../components/gallery/GalleryHeading";
import styles from "../components/gallery/gallery.module.css";
import GalleryInfo from "../components/gallery/GalleryInfo";

const gallery = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Heading name="GALLERY" />
      <div className={styles.body}>
        <GalleryHeading />
        <GalleryInfo subheading="Tech Expo" folder="recent" />
        <GalleryInfo subheading="Other Activities" folder="others" />
        <GalleryInfo subheading="Club Events" folder="ClubEvents" />
      </div>
    </div>
  );
};

export default gallery;
