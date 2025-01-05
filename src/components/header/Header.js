import React, { useEffect, useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import img1 from "../images/logo.png";
import { FiSearch } from "react-icons/fi";
import AOS from "aos";

const Header = () => {
  const [nav1, setnav1] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const changebackground = () => {
    if (window.scrollY >= 30) {
      setnav1(true);
    } else {
      setnav1(false);
    }
  };

  window.addEventListener("scroll", changebackground);

  return (
    <div>
      <div className={nav1 ? "nav1 active" : "nav1"}>
        <div className="logo1">
          {" "}
          <img src={img1} id="set-logo1" />{" "}
        </div>
        <div className="list1">
          <ul>
            <li>
              <NavLink to="/"> Home </NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/causes">Causes</NavLink>
            </li>
            <li id="set-header-dropdown">
              <div className="dropdown">
                <button className="dropbtn">
                  Pages
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                  <NavLink to="/contact">Contact</NavLink>
                  <NavLink to="/faq">FAQ</NavLink>
                  <NavLink to="/error">404 Error</NavLink>
                  <NavLink to="/donate">donate</NavLink>
                  <a href="#"></a>
                </div>
              </div>
            </li>
            <li>
              <NavLink to="/blogs">Blog</NavLink>
            </li>
          </ul>
        </div>
        <div className="header-third">
          <div className="header-third-center">
            <div className="third-one">
              <div className="sel-nav">
                <select id="cars-nav">
                  <option>Eng</option>
                  <option>Eng</option>
                  <option>Eng</option>
                  <option>Eng</option>
                </select>
              </div>
            </div>
            <div className="third-two">
              <button>
                <NavLink to="/Contact">Contact us</NavLink>
              </button>
            </div>
            <div className="third-three">
              <button>
                <FiSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
