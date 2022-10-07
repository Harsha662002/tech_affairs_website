// import { ReactDOM } from "react";
// import '../hexagon.css'
import HoneyCell from './HoneyCell'
import style from './honeycomb.module.css'
function hexa_pmc(props) {
  return (
    <>
      <ul className={style.honeycomb} lang="es">
      <HoneyCell  details={props.details[0]}/>
      <HoneyCell  details={props.details[1]}/>
        <li className={`${style.honeycombcell},${style.honeycomb_placeholder}`}></li>
      </ul>
      <ul className={style.honeycomb} lang="es">
      <HoneyCell  details={props.details[2]}/>
      <HoneyCell  details={props.details[3]}/>
      <HoneyCell  details={props.details[4]}/>
        <li className={`${style.honeycombcell},${style.honeycomb_placeholder}`}></li>
      </ul>
      <ul className={style.honeycomb} lang="es">
      <HoneyCell  details={props.details[5]}/>
      <HoneyCell  details={props.details[6]}/>
        <li className={`${style.honeycombcell},${style.honeycomb_placeholder}`}></li>
      </ul>
    </>
  );
}

export default hexa_pmc;