import Style from './honeycomb.module.css'
import { useState } from 'react';
const Hexagon = (props) => {
  const [check, setcheck] = useState(0);
  // let logo = require(props.details.path);
  function changeBackground(e) {
    setcheck(1);
    e.target.style.filter = 'contrast(200%)';
  }
  function changeLeave(e) {
    setcheck(0);
    // console.log("came here");
    e.target.style.filter = 'contrast(100%)';
  }
  function onclickfunc() {
    console.log("came to click");
    console.log(props.details.path);
  }
  return (
    <>
      <li className={Style.honeycombcell}>
        <img className={Style.imageclip} onClick={onclickfunc} onMouseEnter={changeBackground} onMouseLeave={changeLeave} data-toggle="modal" data-target="#exampleModalCenter" src={require(`/public/assests/${props.details.path}.jpg`)} alt="logo" />
        {
          check === 1 && <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content ">
                <div className="modal-body bg-light" >
                  <div className={Style.details}>
                    <div className={Style.honeycellleft}>
                      <img src={require(`/public/assests/${props.details.path}.jpg`)} width="180px" height="180px" alt="logo" />
                    </div>
                    <div className={Style.honeycellright}>
                      <ul className={Style.honeycelldetails}>
                        <li>
                          <b>Name</b> : {props.details.name}
                        </li>
                        {props.details.rollnumber !== " " && <li>
                          <b>RollNumber</b> : {props.details.rollnumber}
                        </li>}
                        <li>
                          <b>Email</b> : {props.details.email}
                        </li>
                        {props.details.rollnumber !== " " && <li>
                          <b>Phone</b> : {props.details.rollnumber}
                        </li>}
                        <li>
                          <b>Position</b> : {props.details.position}
                        </li> 
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </li>
    </>
  );
}

export default Hexagon;