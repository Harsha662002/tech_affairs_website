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
    return "The Technical Affairs of IIITDM Kancheepuram actively promotes and manages all technical projects, events, and activities that take place in the Institute.The council is made up of coordinators, faculty, and student members, all of whom are enthusiastically working to advance the institute's technological capabilities.";
  }
  function visionContent() {
    return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptate esse, exercitationem praesentium vitae magni necessitatibus nemo eos aliquid sequi.";
  }

  return (
    <div>
      <Heading name="ABOUT US" />
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
          The Technical Affairs of IIITDM Kancheepuram actively promotes and
          manages all technical projects, events, and activities that take place
          in the Institute. The council is made up of coordinators, faculty, and
          student members, all of whom are enthusiastically working to advance
          the institute`&#39;`s technological capabilities.
        </p>
      </div>
    </div>
  );
}
