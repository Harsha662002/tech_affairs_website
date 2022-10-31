import React from "react";
import popupcss from "./popup.module.css";

const Popup = ({ details, change }) => {
  return (
    <div name="popup" className={popupcss.flexcontainer}>
      {/* <div class={popupcss.container}> */}
      <div class={popupcss.flex_item_left}>
        <img src={details.image}></img>
      </div>
      <div class={popupcss.flex_item_right}>
        <h2>Name : {details.name} </h2>
        <h4>Mail : {details.mail} </h4>
        <h4>Phone : {details.pno} </h4>
        <p className={popupcss.closebtn} onClick={change}>
          ❌
        </p>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Popup;
