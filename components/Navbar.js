import * as React from "react";
import navbarcss from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const useViewport = () => {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { width };
};

const MobileNavbar = () => {
  const [close, setClose] = React.useState(true);

  const collapseNavbar = () => {
    console.log("This is a Navbar");
    setClose(!close);
  };
  return (
    <div className={navbarcss.align}>
      <h2 className={navbarcss.head}>
        {/* <img src="../../public/images/logo.png" alt="" />  */}
        <img
          src="/assests/images/techaffairslogo.png"
          className={navbarcss.logo}
        />
        <p className={navbarcss.title}>Technical Affairs</p>
      </h2>
      <div className={navbarcss.alignitems}>
        <a href="/clubs" className={!close && navbarcss.hide}>
          Clubs
        </a>
        <a href="/about" className={!close && navbarcss.hide}>
          About
        </a>
        <a href="/gallery" className={!close && navbarcss.hide}>
          Gallery
        </a>
        <a href="/" className={!close && navbarcss.hide}>
          Events
        </a>
        <a href="/vashist" className={!close && navbarcss.hide}>
          Vashist
        </a>
        <a
          href="http://iiitdm.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
          className={!close && navbarcss.hide}
        >
          IIITDM Page
        </a>
      </div>
      <p onClick={collapseNavbar} className={navbarcss.collapse}>
        <FontAwesomeIcon icon={faBars} />
      </p>
    </div>
  );
};

const DesktopNavbar = () => {
  return (
    <div className={navbarcss.align}>
      <h2 className={navbarcss.head}>
        <img
          src="/assests/images/techaffairslogo.png"
          className={navbarcss.logo}
        />
        <p className={navbarcss.title}>Technical Affairs</p>
      </h2>
      <div className={navbarcss.alignitems}>
        <a href="/clubs">Clubs</a>
        <a href="/about">About</a>
        <a href="/gallery">Gallery</a>
        <a href="/">Events</a>
        <a href="/vashist">Vashist</a>
        <a
          href="http://iiitdm.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          IIITDM Page
        </a>
      </div>
    </div>
  );
};

const Navbar = () => {
  const { width } = useViewport();
  const breakpoint = 600;
  return width < breakpoint ? <MobileNavbar /> : <DesktopNavbar />;
};

export default Navbar;
