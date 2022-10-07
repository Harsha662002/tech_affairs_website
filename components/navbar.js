import * as React from "react";
import navbarcss from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

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
        <Link href="/clubs" className={!close && navbarcss.hide}>
          <a>Clubs</a>
        </Link>
        <Link href="/about" className={!close && navbarcss.hide}>
          <a>About</a>
        </Link>
        <Link href="/gallery" className={!close && navbarcss.hide}>
          <a>Gallery</a>
        </Link>
        <Link href="/" className={!close && navbarcss.hide}>
          <a>Events</a>
        </Link>
        <Link href="/vashist" className={!close && navbarcss.hide}>
          <a>Vashist</a>
        </Link>
        <Link
          href="http://iiitdm.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
          className={!close && navbarcss.hide}
        >
          <a>IIITDM Page</a>
        </Link>
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
        <Link href="/clubs">
          <a>Clubs</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/gallery">
          <a>Gallery</a>
        </Link>
        <Link href="/">
          <a>Events</a>
        </Link>
        <Link href="/vashist">
          <a>Vashist</a>
        </Link>
        <Link
          href="http://iiitdm.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          IIITDM Page
        </Link>
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