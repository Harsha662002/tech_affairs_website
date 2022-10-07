import React from "react";
import styles from "./Vashist.module.css";
import logo from "../../public/assests/images/vashist/logo.jpeg";
import Image from "next/image";

const Vashist = (props) => {
  let data2 = ["1", "2", "3", "4", "5", "6"];

  let elements = [0, 1, 2, 3, 4, 5].map((item) => {
    return (
      <div class={styles.box}>
        <div class={styles.bo}>
          <Image
            key={item}
            src={`/assests/images/${props.folder}/${item + 1}.jpg`}
            width="1500px"
            height="1500px"
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
            <Image src={logo} width="1000px" height="1000px" />
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
