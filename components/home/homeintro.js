import React from "react";
import styles from "./homeintro.module.css";
import Image from "next/image";
import Link from "next/link";
const HomeIntro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContent}>
        <div className={styles.text1}> IIITDM KANCHEEPURAM</div>
        <div className={styles.text2}>Technical Affairs</div>
        <div className={styles.text3}>
          {" "}
          Lorem lasduf asodifj asdfohas ff asdifuh sdfiuh hjasdf o this sdfhsd
          saodfhsf sodfhs asofshf saofsd fosgush fodf aosfh sfh
        </div>
        <div className={styles.line}>
          <div className={styles.text4}>
            <div className={styles.text4_1}>
              Line 1 : Lorem lasduf asodifj asdfohas ff asdifuh sdfiuh hjasdf{" "}
            </div>
            <div className={styles.text4_2}>
              Line 2 : Lorem lasduf asodifj asdfohas ff asdifuh sdfiuh hjasdf{" "}
            </div>
          </div>
        </div>
        <div>
          <div className={styles.buttons}>
            <button className={styles.button1}>
              <Link href="/clubs">
                <a>Know More</a>
              </Link>
            </button>
            <button className={styles.button2}>
              <Link href="/about">
                <a>Contact Us</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.picture}>
        <Image
          src={`/assests/images/recent/1.jpg`}
          width="1200px"
          height="1200px"
        />
      </div>
    </div>
  );
};

export default HomeIntro;
