import Head from "next/head";
import Image from "next/image";
import styles from "./About.module.css";

export default function Home() {
  function missionDisplay() {
    var display = document.getElementById("content");
    var missionText = missionContent();
    display.textContent = missionText.toString();
  }
  function visionDisplay() {
    var display = document.getElementById("content");
    var visionText = visionContent();
    display.textContent = visionText.toString();
  }
  function missionContent() {
    return "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt magni commodi unde saepe magnam delectus aliquam quis! Sunt, iusto odio. ";
  }
  function visionContent() {
    return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptate esse, exercitationem praesentium vitae magni necessitatibus nemo eos aliquid sequi.";
  }

  return (
    <div>
      <div className={styles.heading}>ABOUT US</div>
      <div className={styles.details}>
        <button className={styles.mission} onClick={missionDisplay}>
          MISSION
        </button>

        <button className={styles.vision} onClick={visionDisplay}>
          VISION
        </button>
      </div>
      <div className={styles.vl}> </div>
      <div id="content" className={styles.content}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
          magni commodi unde saepe magnam delectus aliquam quis! Sunt, iusto
          odio.
        </p>
      </div>
    </div>
  );
}
