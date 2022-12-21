import React from "react";
import styles from "./vashist.module.css";
import logo from "../../public/assests/images/vashist/logo.webp";
import Image from "next/image";
import ImageComponent from "../imagecomponent";

const Vashist = (props) => {
  let length = 6;
  let data = [];
  let info = [
    "Technical Clubs",
    "Hackathon",
    "Competitions",
    "EDM Night",
    "Lecture Talks",
    "Club Events",
  ];
  for (let i = 0; i < length; i++) {
    data.push(i);
  }
  let elements = data.map((item, index) => {
    return (
      <ImageComponent
        key={index}
        folder={props.folder}
        item={item + 1}
        dataA={info}
      />
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
            <Image src={logo} width="1000px" height="1000px" alt="Logo" />
          </div>
          <button className={styles.Button}>
            <a
              href="http://www.vashisht.iiitdm.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vashisht 2023
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
