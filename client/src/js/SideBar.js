import React from "react";
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";

const SideBar = () => {

  return (
    <nav className="navbar-primary">
      <header className="navbar-primary__header">
        <h1 className="navbar-primary-brand">
          <span className="sr-only">
            Vento
          </span>
        </h1>
        <button className="navbar-primary-toggle">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
      <ul className = "navbar-primary__nav">
        <li className="menu-item">
          <NavLink
            to = "/overview"
            className = "menu-item__link"
          >
            {" "}
            Overview{" "}
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink
            to = "/assetlist"
            className = "menu-item__link"
          >
            {" "}
            Asset List{" "}
          </NavLink>
        </li>
        <li className="menu-item">
          <a className='menu-item__link' href="">Lab Owners</a>
        </li>
        <li className="menu-item">
          <a className='menu-item__link' href="">Lab Owners</a>
        </li>
      </ul>
      <footer className="navbar-primary__footer">

      </footer>
    </nav>
  );
};

export default SideBar;
