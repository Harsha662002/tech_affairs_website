import React from "react";
import headingcss from "./Heading.module.css";

const Heading = (props) => {
  return (
    <div className={headingcss.head}>
      <p className={headingcss.clubname}>{props.name}</p>
    </div>
  );
};

export default Heading;
