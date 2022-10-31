import React, { useState } from "react";
import Popup from "./popup";
import clubcardcss from "./clubinfo.module.css";
import Image from "next/image";
const ClubInfo = (props) => {
  const [focus1, setFocus1] = useState(false);
  const [repdetails, setRepdetails] = useState({
    name: "",
    mail: "",
    pno: "",
  });
  const setFocusfnc1 = (e) => {
    // console.log(e);
    setRepdetails({
      name: props.r1,
      mail: props.ramail,
      pno: props.rapno,
      image: props.raimage,
    });
    setFocus1(true);
  };
  const setFocusfncpic = (e) => {
    // console.log(e);
    setRepdetails({
      name: props.picname,
      image: props.picimage,
      mail: props.picmail,
      pno: props.picpno,
    });
    setFocus1(true);
  };
  const setFocusfncpic2 = (e) => {
    // console.log(e);
    setRepdetails({
      name: props.pic2name,
      image: props.pic2image,
      mail: props.pic2mail,
      pno: props.pic2pno,
    });
    setFocus1(true);
  };
  const setFocusfnc2 = (e) => {
    // console.log(e);
    setRepdetails({
      name: props.r2,
      mail: props.rbmail,
      pno: props.rbpno,
      image: props.rbimage,
    });
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
              <img
                src={props.logo}
                height={120}
                width={120}
                style={{ marginTop: "5px", borderRadius: "10px" }}
              ></img>
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
            <p>{props.desc}</p>
          </div>
          <div className={clubcardcss.flexrow2}>
            <div className={clubcardcss.flexnew}>
              <p onClick={setFocusfnc1}>{props.r1}</p>
              <p onClick={setFocusfnc2}>{props.r2}</p>
            </div>
            <div className={clubcardcss.flexnew}>
              <p onClick={setFocusfncpic}>{props?.pic}</p>
              <p onClick={setFocusfncpic2}>{props?.pic2}</p>
            </div>
          </div>
          <div className={clubcardcss.flexrow3}>
            <a href={props.instagram}>
              <i class={`bi bi-instagram ${clubcardcss.linksinsta}`}></i>
            </a>
            <a href={props.linkedin}>
              <i class={`bi bi-linkedin ${clubcardcss.linksgithub}`}></i>
            </a>
            <a href={`mailto:${props.mail}`}>
              <i class={`bi bi-envelope ${clubcardcss.linksemail}`}></i>
            </a>
            <a href={props.discord}>
              <i class={`bi bi-discord ${clubcardcss.linkswebsite}`}></i>
            </a>
            <a href={props.website}>
              <i class={`bi bi-globe ${clubcardcss.linkswebsite} `}></i>
            </a>
          </div>
        </div>
        <div className={clubcardcss.image}>
          {/* Carousal */}
          <div id={props.no} className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target={`#${props.no}`}
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target={`#${props.no}`}
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target={`#${props.no}`}
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                {/* <img src={logo} className="d-block w-100" alt="..." /> */}
                <Image
                  className={`d-block w-100 ${clubcardcss.imgcomp} `}
                  // loader={myLoader}
                  src={props.cimage1}
                  alt="Picture of the author"
                  width={600}
                  height={500}
                />
              </div>
              <div className="carousel-item">
                <Image
                  className={`d-block w-100 ${clubcardcss.imgcomp} `}
                  // loader={myLoader}
                  src={props.cimage2}
                  alt="Picture of the author"
                  width={600}
                  height={500}
                />
              </div>
              <div className="carousel-item">
                {/* <img className="d-block w-100" src={logo} alt="" /> */}
                <Image
                  className={`d-block w-100 ${clubcardcss.imgcomp} `}
                  // loader={myLoader}
                  src={props.cimage3}
                  alt="Picture of the author"
                  width={600}
                  height={500}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#${props.no}`}
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#${props.no}`}
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* Carousal */}
        </div>
      </div>
      {focus1 && <Popup details={repdetails} change={offFocus} />}
    </div>
  );
};

export default ClubInfo;
