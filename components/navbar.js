import * as React from "react";
import navbarcss from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const useViewport = () => {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  //console.log(width);
  return width;
};

const DesktopNavbar = () => {
  return (
    <div className={navbarcss.align}>
      <h2 className={navbarcss.head}>
        <img
          src="/assests/images/techaffairslogo2.webp"
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
        <Link href="\#Events">
          <a>Events</a>
        </Link>
        <Link href="/vashisht">
          <a>Vashisht</a>
        </Link>
        <Link href="/upcoming" target="_blank" rel="noopener noreferrer">
          Joy Of Giving
        </Link>
      </div>
    </div>
  );
};

const MobileNavbar = () => {
  const [close, setClose] = React.useState(true);
  const collapseNavbar = () => {
    console.log("This is a Navbar");
    setClose(!close);
  };
  var mobile = true;
  return (
    <div className={navbarcss.align}>
      <h2 className={navbarcss.head}>
        {/* <img src="../../public/images/logo.webp" alt="" />  */}
        <img
          src="/assests/images/techaffairslogo2.webp"
          className={navbarcss.logo}
        />
        <Link href="/">
          <a className={navbarcss.title}>Technical Affairs</a>
        </Link>
      </h2>
      <div className={navbarcss.alignitems}>
        <div className={!close && navbarcss.hide}>
          <Link href="/clubs">
            <a>Clubs</a>
          </Link>
        </div>
        <div className={!close && navbarcss.hide}>
          <Link href="/about" className={!close && navbarcss.hide}>
            <a>About</a>
          </Link>
        </div>
        <div className={!close && navbarcss.hide}>
          <Link href="/gallery" className={!close && navbarcss.hide}>
            <a>Gallery</a>
          </Link>
        </div>
        <div className={!close && navbarcss.hide}>
          <Link href="\#Events" className={!close && navbarcss.hide}>
            <a>Events</a>
          </Link>
        </div>
        <div className={!close && navbarcss.hide}>
          <Link href="/vashisht" className={!close && navbarcss.hide}>
            <a>Vashisht</a>
          </Link>
        </div>
        <div className={!close && navbarcss.hide}>
          <Link
            href="/upcoming"
            target="_blank"
            rel="noopener noreferrer"
            className={!close && navbarcss.hide}
          >
            <a>Joy of Giving</a>
          </Link>
        </div>
      </div>
      {/* <p onClick={collapseNavbar} className={mobile ? navbarcss['collapse'] : navbarcss['hide']}>
        <FontAwesomeIcon icon={faBars} />
      </p> */}
      <p onClick={collapseNavbar} className={navbarcss.collapse}>
        <FontAwesomeIcon icon={faBars} size="xs" />
      </p>
    </div>
  );
};

const Navbar = () => {
  const width = useViewport();
  const breakpoint = 600;
  return width > breakpoint ? <DesktopNavbar /> : <MobileNavbar />;
};

export default Navbar;
