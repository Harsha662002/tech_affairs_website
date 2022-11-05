import React from "react";
import Styles from "./upcoming.module.css";

const upcoming = () => {
  return (
    <section class={Styles.coming_soon}>
      <div class={Styles.coming_soon_inner}>
        <h1 class={Styles.heading}>Coming Soon</h1>
        <h2 class={Styles.small_heading}>Under Construction</h2>
      </div>
    </section>
  );
};

export default upcoming;
