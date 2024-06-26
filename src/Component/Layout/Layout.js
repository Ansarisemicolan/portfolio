import React, { useEffect, useRef, useState } from "react";
import Profile from "./../../Assets/WhatsApp Image 2024-05-01 at 12.36.30 PM.jpeg";
import style from "./Layout.module.css";
import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  let classNav = style.navbar;

  const activeState = ({ isActive }) => {
    return {
      color: isActive ? "#fff" : "",
      backgroundColor: isActive ? "#037fff" : "",
      visibility: isActive ? "visible" : "",
      width: isActive ? "100%" : "",
    };
  };

  const [navigateToggler, setNavigateToggler] = useState(false);

  const navHome = useRef();

  useEffect(() => {
    navHome.current.click();
    console.log("Layout");
  }, []);

  function toggleNavBar() {
    setNavigateToggler(!navigateToggler);
  }

  if (navigateToggler) {
    classNav += ` ${style.isVisible}`;
  }

  return (
    <div className={style.wrap}>
      <div className={style.lines}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={classNav}>
        <button onClick={toggleNavBar} className={style.headerToggler}>
          {!navigateToggler ? (
            <i className="lni lni-menu size-md "></i>
          ) : (
            <i className="lni lni-close size-md "></i>
          )}
        </button>
        <div className={style.leftNavBar}>
          <div className={style.profileImg}>
            <NavLink ref={navHome} to="/portfolio/home">
              <img src={Profile}></img>
            </NavLink>
          </div>
          <ul className={`${style.navList}`}>
            <li>
              <NavLink to="/portfolio/home" style={activeState}>
                <span>home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio/about" style={activeState}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio/resume" style={activeState}>
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio/contact" style={activeState}>
                Contact
              </NavLink>
            </li>
          </ul>
          <p className={style.navBarcopyright}>
            ©️{new Date().getFullYear()} <b>Ansari PortFolio</b>
          </p>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
