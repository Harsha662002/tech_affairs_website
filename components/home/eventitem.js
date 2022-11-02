import logo from "../../public/assests/images/techaffairslogo.png";
import style from "./events.module.css";
// import FontAwesomeIcon from 'react-fontawesome';
export default function eventitem() {
  return (
    <div className={style.container}>
      <div className={style.image}>
        <img src={logo} alt="not loaded" />
      </div>
      <div className={style.text}>
        <h5>Event-1 XYZ</h5>
        <p className={style.date_time}>
          <i className="fas fa-calendar-alt">&nbsp;Manjunath</i>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <i class="fas fa-map-marker-alt">&nbsp;26-12-2022</i>
        </p>
        <p className={style.details}>
          hjfdgjhdf gjhdfbjhbdfjg dfjhgbjhdfbg dsjfbgjhdfg
          <br />
          sdhfbdjh sdhfvsdf sdhfvshdf jhdf vshgdfsf
        </p>
      </div>
    </div>
  );
}
