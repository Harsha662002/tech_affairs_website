import React from "react";
import styles from "./Vashist.module.css";
import pic1 from "../../public/assests/images/recent/1.jpg";
import Image from "next/image";
const Vashist = () => {
  return (
    <div className={styles.body}>
      <div class={styles.con}>
        <div class={styles.box}>
          <div class={styles.bo}>
            <Image src={pic1} width="1200px" height="1200px" />
          </div>
          <h3 class={styles.he}>Competition</h3>
        </div>
        <div class={styles.box}>
          <div class={styles.bo}>
            <Image src={pic1} width="1200px" height="1200px" />
          </div>
          <h3 class={styles.he}>Competition</h3>
        </div>
      </div>
      <div class={styles.con}>
        <div class={styles.box}>
          <div class={styles.bo}>
            <Image src={pic1} width="1200px" height="1200px" />
          </div>
          <h3 class={styles.he}>Competition</h3>
        </div>
        <div class={styles.box}>
          <div class={styles.bo}>
            <Image src={pic1} width="1200px" height="1200px" />
          </div>
          <button className={styles.Button}>
            <a
              href="http://www.vashisht.iiitdm.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vashist 2022
            </a>
          </button>
        </div>
        <div class={styles.box}>
          <div class={styles.bo}>
            <Image src={pic1} width="1200px" height="1200px" />
          </div>
          <h3 class={styles.he}>Competition</h3>
        </div>
      </div>
      <div class={styles.con}>
        <div class={styles.box}>
          <div class={styles.bo}>
            <Image src={pic1} width="1200px" height="1200px" />
          </div>
          <h3 class={styles.he}>Competition</h3>
        </div>
        <div class={styles.box}>
          <div class={styles.bo}>
            <Image src={pic1} width="1200px" height="1200px" />
          </div>
          <h3 class={styles.he}>Competition</h3>
        </div>
      </div>
    </div>
  );
};

export default Vashist;
