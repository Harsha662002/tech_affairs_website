// import { ReactDOM } from "react";
// import '../hexagon.css'
import HoneyCell from "./honeycell";
import style from "./honeycomb.module.css";

function hexa_rmc(props) {
  return (
    <>
      <ul className={style.honeycomb} lang="es">
        <HoneyCell details={props.details[0]} />
        <HoneyCell details={props.details[1]} />
        <li
          className={`${style.honeycombcell},${style.honeycomb_placeholder}`}
        ></li>
      </ul>
      <ul className={style.honeycomb} lang="es">
        <HoneyCell details={props.details[2]} />
        <HoneyCell details={props.details[3]} />
        <HoneyCell details={props.details[4]} />
        <li
          className={`${style.honeycombcell},${style.honeycomb_placeholder}`}
        ></li>
      </ul>
    </>
  );
}

export default hexa_rmc;
