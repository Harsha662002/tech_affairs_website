import React from "react";
import popupcss from "./popup.module.css";

const Popup = ({ details, change }) => {
  return (
    <div name="popup" className={popupcss.container}>
      <h2>Name : {details.name} </h2>
      <h4>Mail : {details.mail} </h4>
      <h4>Phone : {details.pno} </h4>
      <p className={popupcss.closebtn} onClick={change}>
        ❌
      </p>
    </div>
  );
};

export default Popup;
