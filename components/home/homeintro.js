import React from "react";
import styles from "./homeintro.module.css";
import Link from "next/link";
const HomeIntro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContent + " " + styles.flex_left}>
        <div className={styles.text1}> IIITDM KANCHEEPURAM</div>
        <div className={styles.text2}>Technical Affairs</div>
        <div className={styles.text3}>
          The Technical Affairs of IIITDM Kancheepuram actively promotes and
          manages all technical projects, events, and activities that take place
          in the Institute.The council is made up of coordinators, faculty, and
          student members, all of whom are enthusiastically working to advance
          the institute's technological capabilities.
        </div>
        <div className={styles.line}>
          <div className={styles.text4}>
            <div className={styles.text4_1}>
              The value of an idea lies in the using of it - Thomas Edison
            </div>
            <div className={styles.text4_2}>
              If at first the idea is not absurd, then there is no hope for it -
              Albert Einstein
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
              <Link href="/upcoming">
                <a>Joy of Giving</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.picture + " " + styles.flex_right}>
        <img src={`/assests/images/home_image.png`} />
      </div>
    </div>
  );
};

export default HomeIntro;
