import HoneyCell from './HoneyCell'
import style from './honeycomb.module.css'
import RMC from './ResourceMangementCommitte'
import Data from './Details.json'
import Faculty from './Faculty'
import PMC from './ProductManagementCommitte'
import Pics from './Pics'
import POC from './ProductOutreachCommitte'
import Teams from './Teams'
function hexagon() {
  const Facultydetails = Data.Faculty;
  const Pocdetails = Data.PublicOutreachTeam;
  const Rmcdetails = Data.ResourceManagementCommitte;
  const Pmcdetails = Data.ProductManagementCommitte;
  const Picsdetails = Data.Pics;
  const Teamsdetails = Data.Teams;
  const Sponsorshipdetails = Data.Sponsorship;
  return (
    <>
      <div className={style.container}>
        <div class={style.container1}>
          <h1>MISSION</h1>
          <div class={style.vr}></div>
          <h1>VISION</h1>
        </div>
        <div class={style.text}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br />
            Lorem Ipsum has been the industry's standard dummy text ever since the
            15
          </p>
        </div>
        <div className={style.pics}>
          <h1>Pic's</h1>
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
          <h1>Product Management Committe</h1>
          <PMC details={Pmcdetails} />
        </div>
        <div className={style.pics}>
          <h1>Resource Management Committe</h1>
          <RMC details={Rmcdetails} />
        </div>
        <div className={style.pics}>
          <h1>Public Outreach  Committe</h1>
          <POC details={Pocdetails} />
        </div>
        <div className={style.pics}>
          <h1>Sponsorship Committe</h1>
          <ul className={style.honeycomb} lang="es">
            <HoneyCell details={Sponsorshipdetails[0]} />
            <li className={`${style.honeycombcell},${style.honeycomb_placeholder}`}></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default hexagon;