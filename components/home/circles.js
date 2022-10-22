import React from "react";
import styles from "./circles.module.css";
const circles = () => {
  return (
    <div>
      <div className={styles.bground}>
        {/* <div className={styles.circ}> */}
        <img src="/assests/images/check.png"></img> {/* </div> */}
        <div className={styles.circ}> </div>
        <div className={styles.circ}> </div>
        <div className={styles.circ}> </div>
        <div className={styles.circ}> </div>
      </div>
    </div>
  );
};

export default circles;
