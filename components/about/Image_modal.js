import Style from "./honeycomb.module.css";
// import styled from "styled-components";
// import { useState } from 'react';
// import { useEffect } from 'react';
import React from "react";

// reactstrap components
function Image_modal(props) {
  return (
    <>
      <div className={Style.details}>
        <div className={Style.honeycellleft}>
          <img
            src={`/assests/images/team/${props.details.image}`}
            width="180px"
            height="180px"
            alt="logo"
          />
        </div>
        <div className={Style.honeycellright}>
          <ul className={Style.honeycelldetails}>
            <li>
              <b>Name</b> : {props.details.name}
            </li>
            {props.details.rollnumber !== " " && (
              <li>
                <b>RollNumber</b> : {props.details.rollnumber}
              </li>
            )}
            <li>
              <b>Email</b> : {props.details.email}
            </li>
            {props.details.rollnumber !== " " && (
              <li>
                <b>Phone</b> : {props.details.rollnumber}
              </li>
            )}
            <li>
              <b>Position</b> : {props.details.position}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Image_modal;
