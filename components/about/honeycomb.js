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
          <h1>PicS</h1>
          <Pics details={Picsdetails} />
        </div>
        <div className={style.pics}>
          <h1>Faculty Advisor</h1>
          <Faculty details={Facultydetails} />
        </div>
        <div className={style.pics}>
          <h1>Teams</h1>
          <Teams details={Teamsdetails} />
        </div>
        <div className={style.pics}>
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
        <div className={style.pics}>
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
