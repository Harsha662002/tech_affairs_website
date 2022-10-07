import HoneyCell from "./HoneyCell";
import { Facultydetails } from "./Details.js";
import { Pocdetails } from "./Details.js";
import { Rmcdetails } from "./Details.js";
import { Pmcdetails } from "./Details.js";
import { Picsdetails } from "./Details.js";
import { Teamsdetails } from "./Details.js";
import { Sponsorshipdetails } from "./Details.js";
import style from "./honeycomb.module.css";
import RMC from "./ResourceMangementCommitte";
import Faculty from "./Faculty";
import PMC from "./ProductManagementCommitte";
import Pics from "./Pics";
import POC from "./ProductOutreachCommitte";
import Teams from "./Teams";
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
