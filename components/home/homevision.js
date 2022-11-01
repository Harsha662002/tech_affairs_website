import styles from "./homevision.module.css";

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
        <img src="/assests/images/clubLogos/idc.png"></img>
        <img src="/assests/images/clubLogos/mars.png"></img>
        <img src="/assests/images/clubLogos/optica.jpg"></img>
        <img src="/assests/images/clubLogos/roboticsclub.png"></img>
        <img src="/assests/images/clubLogos/sae.jpg"></img>
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
    </div>
  );
}
