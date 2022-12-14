import HoneyCell from "./honeycell";
import { Facultydetails } from "./details.js";
import { Pocdetails } from "./details.js";
import { Rmcdetails } from "./details.js";
import { Pmcdetails } from "./details.js";
import { Picsdetails } from "./details.js";
import { Teamsdetails } from "./details.js";
import { Sponsorshipdetails } from "./details.js";
import style from "./honeycomb.module.css";
import RMC from "./resourcemangementcommitte";
import Faculty from "./faculty";
import PMC from "./productmanagementcommitte";
import Pics from "./pics";
import POC from "./productoutreachcommitte";
import Teams from "./teams";
function hexagon() {
  return (
    <>
      <div className={style.container}>
        <div className={style.pics}>
          {/* <h1>PicS</h1> */}
          <Pics details={Picsdetails} />
          <h2>Dean SA</h2>
          <h4>PIC</h4>
        </div>
        <div className={style.pics}>
          <Teams details={Teamsdetails} />
          <h5>Secretary</h5>
          <h3>Joint Secretary</h3>
        </div>
        <div className={style.pics + " " + style.pmc_margin}>
          <h1>Product Management Committee</h1>
          <PMC details={Pmcdetails} />
        </div>
        <div className={style.pics}>
          <h1>Resource Management Committee</h1>
          <RMC details={Rmcdetails} />
        </div>
        <div className={style.pics}>
          <h1>Public Outreach Committee</h1>
          <POC details={Pocdetails} />
        </div>
        <div className={style.pics + " " + style.margin_spons}>
          <h1>Sponsorship Committee</h1>
          <ul className={style.honeycomb} lang="es">
            <HoneyCell details={Sponsorshipdetails[0]} />
            <li
              className={`${style.honeycombcell},${style.honeycomb_placeholder}`}
            ></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default hexagon;
