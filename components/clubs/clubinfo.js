import React, { useState } from "react";
import Popup from "./popup";
import clubcardcss from "./clubinfo.module.css";

const ClubInfo = (props) => {
  const [focus1, setFocus1] = useState(false);
  const [repdetails, setRepdetails] = useState({
    name: "",
    mail: "",
    pno: "",
  });
  const setFocusfnc1 = (e) => {
    setRepdetails({ name: props.r1, mail: props.ramail, pno: props.rapno });
    setFocus1(true);
  };
  const setFocusfnc2 = (e) => {
    setRepdetails({ name: props.r2, mail: props.rbmail, pno: props.rbpno });
    setFocus1(true);
  };
  const offFocus = () => {
    setFocus1(false);
  };
  return (
    <div className={clubcardcss.container}>
      <div
        className={clubcardcss.card}
        style={{ flexDirection: props.type, backgroundImage: props.background }}
      >
        <div className={clubcardcss.info}>
          <div className={clubcardcss.flexcol1}>
            <div className={clubcardcss.flexrow1}>
              <div className={clubcardcss.block}></div>
              <div className={clubcardcss.flexcol2}>
                <a
                  className={clubcardcss.link}
                  href={props.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className={clubcardcss.name}> {props.name} </h1>
                </a>
                <h3 className={clubcardcss.mail}> {props.mail} </h3>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              incidunt sapiente ad inventore, nihil beatae explicabo
              consectetur, odit vel commodi aut in quo quis. Recusandae, fuga.
              Nam exercitationem commodi fugiat id necessitatibus dolore maxime
              neque amet aliquid quidem architecto cumque itaque autem
              dignissimos perferendis, nihil quae laudantium aperiam! Maiores
              dolor voluptas aperiam, eos repellendus rem ipsa iure at quis
              exercitationem deserunt nam numquam distinctio alias saepe
              delectus dignissimos. Nesciunt, eligendi?
            </p>
          </div>
          <div className={clubcardcss.flexrow2}>
            <p onClick={setFocusfnc1}>{props.r1}</p>
            <p onClick={setFocusfnc2}>{props.r2}</p>
          </div>
        </div>
        <div className={clubcardcss.image}></div>
      </div>
      {focus1 && <Popup details={repdetails} change={offFocus} />}
    </div>
  );
};

export default ClubInfo;
