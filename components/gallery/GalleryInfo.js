import React from "react";
import styles from "./gallery.module.css";
import Image from "next/image";

const GalleryInfo = (props) => {
  let length = 6;
  let data = [];
  for (let i = 0; i < length; i++) {
    data.push(i);
  }
  let elements = data.map((item) => {
    return (
      <Image
        src={`/assests/images/${props.folder}/${item + 1}.jpg`}
        width="1200px"
        height="1200px"
      />
    );
  });
  return (
    <div>
      <div className={styles.con}>
        <div className={styles.he}>
          <h4 className={styles.head}>{props.subheading}</h4>
        </div>
        <div className={styles.container}>
          <div className={styles.gallery}>{elements}</div>
        </div>
      </div>
    </div>
  );
};

export default GalleryInfo;
