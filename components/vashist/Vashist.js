import React from "react";
import styles from "./Vashist.module.css";
import pic1 from "../../public/assests/images/recent/1.jpg";
import Image from "next/image";

const Vashist = (props) => {
  let data2 = ["lecture", "competition", "hi", "hello", "how", "nice"];

  let elements = [0, 1, 2, 3, 4, 5].map((item, index) => {
    return (
      <div class={styles.box}>
        <div class={styles.bo}>
          <Image
            src={`/assests/images/${props.folder}/${item + 1}.jpg`}
            width="1200px"
            height="1200px"
          />
        </div>
        <h3 className={styles.he}>{data2[item]}</h3>
      </div>
    );
  });

  return (
    <div className={styles.body}>
      <div class={styles.con}>
        {elements[0]} {elements[1]}
      </div>
      <div class={styles.con}>
        {elements[2]}
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
        {elements[3]}
      </div>
      <div class={styles.con}>
        {elements[4]} {elements[5]}
      </div>
    </div>
  );
};

export default Vashist;
