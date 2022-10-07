import React from "react";
import Image from "next/image";
import styles from "./vashist/Vashist.module.css";
const ImageComponent = (props) => {
  let dataB = props.dataA;
  return (
    <div>
      <div class={styles.box}>
        <div class={styles.bo}>
          <Image
            src={`/assests/images/${props.folder}/${props.item}.jpg`}
            width="1500px"
            height="1500px"
          />
        </div>
        <h3 className={styles.he}>{dataB[props.item - 1]}</h3>
      </div>
    </div>
  );
};

export default ImageComponent;
