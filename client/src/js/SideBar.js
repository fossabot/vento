import React from "react";
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";

const SideBar = () => {

  return (
    <ul className = "sidebar">
      <li>
        <NavLink
          to = "/overview"
          activeStyle = {{
            fontWeight: "bold",
            color: "blue"
          }}
          className = "over"
        >
          {" "}
          OVERVIEW{" "}
        </NavLink>
      </li>
      <li>
        <NavLink
          to = "/assetlist"
          activeStyle = {{
            fontWeight: "bold",
            color: "blue"
          }}
          className = "list"
        >
          {" "}
          ASSETLIST{" "}
        </NavLink>
      </li>
    </ul>
  );
};

export default SideBar;
