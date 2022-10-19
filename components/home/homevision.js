import styles from "./homevision.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import "../../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
export default function vision() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.heading}>Our Sponsors</div>
        <div className={styles.circles}>
          <div className={styles.circle}> </div>
          <div className={styles.circle}> </div>
          <div className={styles.circle}> </div>
          <div className={styles.circle}> </div>
          <div className={styles.circle}> </div>
          <div className={styles.circle}> </div>
        </div>
        <div className={styles.content}>
          Lorem lasduf asodifj asdfohas ff asdifuh sdfiuh hjasdf o this sdfhsd
          saodfhsf sodfhs asofshfLorem lasduf asodifj asdfohas ff asdifuh sdfiuh
          hjasdf o this sdfhsd saodfhsf sodfhs asofshf Lorem lasduf asodifj
          asdfohas ff asdifuh sdfiuh hjasdf o this sdfhsd saodfhsf sodfhs
          asofshfLorem lasduf asodifj asdfohas ff asdifuh sdfiuh hjasdf o this
          sdfhsd saodfhsf sodfhs asofshf
        </div>
      </div>
      <div className={styles.bground}>
        <div className={styles.circ}> </div>
        <div className={styles.circ}> </div>
        <div className={styles.circ}> </div>
        <div className={styles.circ}> </div>
        <div className={styles.circ}> </div>
      </div>
      <div className={styles.links}>
        <div className={styles.Students}>
          <div className={styles.linkheads}>For Students</div>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
          <a href="#">Link 4</a>
          <a href="#">Link 5</a>
        </div>
        <div className={styles.Enterprise}>
          <div className={styles.linkheads}>Enterprise</div>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
          <a href="#">Link 4</a>
          <a href="#">Link 5</a>
        </div>
        <div className={styles.Press}>
          <div className={styles.linkheads}>Press</div>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
          <a href="#">Link 4</a>
          <a href="#">Link 5</a>
        </div>
        <div className={styles.Support}>
          <div className={styles.linkheads}>Support</div>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
          <a href="#">Link 4</a>
          <a href="#">Link 5</a>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.container2}>
          <div className={styles.head3}> Technical Affairs</div>
          <div className={styles.footcontent}>
            <Link href="/developers">
              <ul>
                <li>
                  <a> Developers Team</a>
                </li>
              </ul>
            </Link>
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
    </div>
  );
}
