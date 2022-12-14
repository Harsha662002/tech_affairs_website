import styles from "./homevision.module.css";
import Link from "next/link";
export default function vision() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.heading}>Our Sponsors</div>
        <div className={styles.bground_two}>
          <img src="/assests/images/sponsors/gavstech.webp" />
          <img src="/assests/images/sponsors/cad_macro.webp" />
          <img src="/assests/images/sponsors/ashok_leyland.webp" />
          <img src="/assests/images/sponsors/hdfc_bank.webp" height="120px" />
        </div>
        <div className={styles.bground_two}>
          <img src="/assests/images/sponsors/indian_bank.webp" />
          <img src="/assests/images/sponsors/tkw.webp" />
          <img src="/assests/images/sponsors/tlc.webp" />
          <img src="/assests/images/sponsors/gcpa.webp" />
        </div>
        <div className={styles.content}>
          Our sponsors have assisted technical clubs and societies in organising
          technical events (VASHISHT and others) as well as provided funding for
          several clubs and societies to take part in competitions across the
          globe.
        </div>
      </div>
      <div className={styles.bground}>
        <span className={styles.idc}>
          <img src="/assests/images/clubLogos/idc.webp"></img>
        </span>
        <img src="/assests/images/clubLogos/mars.webp"></img>
        <img src="/assests/images/clubLogos/optica.webp"></img>
        <img src="/assests/images/clubLogos/roboticsclub.webp"></img>
        <img src="/assests/images/clubLogos/sae.webp"></img>
      </div>
      <div className={styles.links}>
        <div className={styles.Students}>
          <div className={styles.linkheads}>For Students</div>
          <Link href="https://docs.google.com/document/d/e/2PACX-1vTBfE7eqSa_k6AmRPQY6UyZ8PA18S-9bdpURkBfcBwc2prwVDpx06P0vWPY9PlC_rFrMoWGZ9aPomu2/pub">
            <a>Annual Report 2021-2022</a>
          </Link>
          <Link href="/vashisht">
            <a>Vashisht</a>
          </Link>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScv0bzrXxQ7QTX3Ra2tJlhe-S5nE6AxxhFJoLeOhdMrMwwR7g/viewform">
            Feedback
          </a>
          <a href="https://sites.google.com/iiitdm.ac.in/technicalaffairs/disclaimer">
            Disclaimer
          </a>
          <a href="#" className={styles.invisible}>
            Link 5
          </a>
        </div>
        <div className={styles.Enterprise}>
          <div className={styles.linkheads}>Enterprise</div>
          <Link href="/upcoming">
            <a>Sponsor Technical Clubs</a>
          </Link>
          <Link href="/upcoming">
            <a>Sponsor Competitions</a>
          </Link>
          <Link href="/upcoming">
            <a>Sponsor Technical Event</a>
          </Link>
          <Link href="/upcoming">
            <a>Past Sponsorships</a>
          </Link>
          {/* <a href="#">Link 5</a> */}
        </div>
        <div className={styles.Press}>
          <div className={styles.linkheads}>Press</div>
          <a href="#">Technical Exhibition</a>
          <a href="#">Technical Competitions</a>
          <a href="#">Technical Events</a>
          <a href="#">Achievements</a>
        </div>
        {/* <div className={styles.Support}>
          <div className={styles.linkheads}>Support</div>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
          <a href="#">Link 4</a>
          <a href="#">Link 5</a>
        </div> */}
      </div>
    </div>
  );
}
