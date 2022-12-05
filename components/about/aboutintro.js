import Heading from "../heading/heading";
import styles from "./about.module.css";

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
    return "Our mission is to create a healthy community where people interact, explore, and increase their knowledge with added fun.";
  }
  function visionContent() {
    return "He who has a why can endure any how";
  }

  return (
    <div>
      <Heading name="ABOUT US" />
      <div className={styles.details}>
        <button className={styles.mission} onClick={missionDisplay}>
          MISSION
        </button>

        <button className={styles.vision} onClick={visionDisplay}>
          MOTTO
        </button>
      </div>
      {/* <div className={styles.vl}> </div> */}
      <div id="content" className={styles.content}>
        <p>He who has a why can endure any How.</p>
      </div>
    </div>
  );
}
