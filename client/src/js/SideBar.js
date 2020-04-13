import React from "react";
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";

const SideBar = () => {

  function myClick() {
    console.log("test click");
    if (document.body.classList.contains('navbar-primary--minimize')) {
      document.body.classList.remove('navbar-primary--minimize');
      document.getElementById("btnNavPrimaryToggle").classList.remove('navbar-primary-toggle--minimize');
    } else {
      document.body.classList.add('navbar-primary--minimize');
      document.getElementById("btnNavPrimaryToggle").classList.add('navbar-primary-toggle--minimize');
    }
    
  }

  return (
    <nav className="navbar-primary">
      <header className="navbar-primary__header">
        <h1 className="navbar-primary-brand">
          <span className="sr-only">
            Vento
          </span>
        </h1>
        <button className="navbar-primary-toggle" id="btnNavPrimaryToggle" onClick={myClick}>
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
