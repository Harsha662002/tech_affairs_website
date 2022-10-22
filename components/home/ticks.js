import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import styles from "./ticks.module.css";
config.autoAddCss = false;

const ticks = () => {
  return (
    <div>
      <h1 className={styles.heading}>Objectives of Technical Affairs</h1>
      <div className={styles.flex_container}>
        <div className={styles.flex_item_left}>
          <div className={styles.sub_flex_container}>
            <div className={styles.sub_flex_item_left}>
              <img src={`/assests/images/check.png`} />
            </div>
            <div className={styles.sub_flex_item_right}>
              <div className={styles.sub_flex_item_right_top}>EXHIBITIONS</div>
              <div className={styles.sub_flex_item_right_bottom}>
                To promote and encourage the interest of the students in
                developing working devices and physical models and to conduct
                the Annual Model Exhibition.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.flex_item_middle}>
          <div className={styles.sub_flex_container}>
            <div className={styles.sub_flex_item_left}>
              <img src={`/assests/images/check.png`} />
            </div>
            <div className={styles.sub_flex_item_right}>
              <div className={styles.sub_flex_item_right_top}>EXHIBITIONS</div>
              <div className={styles.sub_flex_item_right_bottom}>
                To promote and encourage the interest of the students in
                developing working devices and physical models and to conduct
                the Annual Model Exhibition.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.flex_item_right}>
          <div className={styles.sub_flex_container}>
            <div className={styles.sub_flex_item_left}>
              <img src={`/assests/images/check.png`} />
            </div>
            <div className={styles.sub_flex_item_right}>
              <div className={styles.sub_flex_item_right_top}>EXHIBITIONS</div>
              <div className={styles.sub_flex_item_right_bottom}>
                To promote and encourage the interest of the students in
                developing working devices and physical models and to conduct
                the Annual Model Exhibition.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.flex_container}>
        <div className={styles.flex_item_left}>
          <div className={styles.sub_flex_container}>
            <div className={styles.sub_flex_item_left}>
              <img src={`/assests/images/check.png`} />
            </div>
            <div className={styles.sub_flex_item_right}>
              <div className={styles.sub_flex_item_right_top}>EXHIBITIONS</div>
              <div className={styles.sub_flex_item_right_bottom}>
                To promote and encourage the interest of the students in
                developing working devices and physical models and to conduct
                the Annual Model Exhibition.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.flex_item_middle}>
          <div className={styles.sub_flex_container}>
            <div className={styles.sub_flex_item_left}>
              <img src={`/assests/images/check.png`} />
            </div>
            <div className={styles.sub_flex_item_right}>
              <div className={styles.sub_flex_item_right_top}>EXHIBITIONS</div>
              <div className={styles.sub_flex_item_right_bottom}>
                To promote and encourage the interest of the students in
                developing working devices and physical models and to conduct
                the Annual Model Exhibition.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.flex_item_right}>
          <div className={styles.sub_flex_container}>
            <div className={styles.sub_flex_item_left}>
              <img src={`/assests/images/check.png`} />
            </div>
            <div className={styles.sub_flex_item_right}>
              <div className={styles.sub_flex_item_right_top}>EXHIBITIONS</div>
              <div className={styles.sub_flex_item_right_bottom}>
                To promote and encourage the interest of the students in
                developing working devices and physical models and to conduct
                the Annual Model Exhibition.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ticks;
