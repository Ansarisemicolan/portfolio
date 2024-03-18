import React, { useEffect, useRef } from "react";
import Profile from "./../../Assets/1710783371410.jpg";
import style from "./Layout.module.css";
import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  const activeState = ({ isActive }) => {
    return {
      color: isActive ? "#fff" : "",
      backgroundColor: isActive ? "#037fff" : "",
      visibility: isActive ? "visible" : "",
      width: isActive ? "100%" : "",
    };
  };

  const navHome = useRef();

  useEffect(() => {
    navHome.current.click();
    console.log("Layout");
  }, []);

  return (
    <div className={style.wrap}>
      <div className={style.lines}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={style.navbar}>
        <div className={style.leftNavBar}>
          <div className={style.profileImg}>
            <NavLink ref={navHome} to="/home">
              <img src={Profile}></img>
            </NavLink>
          </div>
          <ul className={`${style.navList}`}>
            <li>
              <NavLink to="/home" style={activeState}>
                <span>home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" style={activeState}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/resume" style={activeState}>
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" style={activeState}>
                Contact
              </NavLink>
            </li>
          </ul>
          <p className={style.navBarcopyright}>
            ©️2024 <b>Ansari PortFolio</b>
          </p>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
