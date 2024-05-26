import React from "react";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
// import "../../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.container2}>
          <div className={styles.head3}> Technical Affairs</div>
          <div className={styles.footerButtons}>
            <button className={styles.button1}>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScv0bzrXxQ7QTX3Ra2tJlhe-S5nE6AxxhFJoLeOhdMrMwwR7g/viewform">
                Feedback
              </a>
            </button>
            <button className={styles.button2}>
              <Link href="/disclaimer">
                <a>Disclaimer</a>
              </Link>
            </button>
          </div>
          <div className={styles.footcontent}>
            <Link href="/forms">
              <ul>
                <li>
                  <a>Important Forms</a>
                </li>
              </ul>
            </Link>
            {/* <Link href="/developers">
              <ul>
                <li>
                  <a> Developers Team</a>
                </li>
              </ul>
            </Link> */}
          </div>
        </div>
        <div className={styles.socials}>
          <div className={styles.instagram}>
            <a href="https://www.instagram.com/iiitdm.technical/">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
          <div className={styles.linkedIn}>
            <a href="https://www.linkedin.com/company/technical-affairs-iiitdm/mycompany/">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
          <div className={styles.mail}>
            <a href="mailto:technical.affairs@iiitdm.ac.in">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>
          </div>
        </div>
      </div>

      <p className={styles.copyright}>
        © Copyright 2022 IIITDM Kancheepuram Technical Affairs
      </p>
    </div>
  );
};

export default Footer;
