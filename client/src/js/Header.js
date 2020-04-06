import React from "react";
import Logout from "./Logout";
import MFicon from "./MFicon.png";

const Header = props => {
  return (
    <div className = "Headertitle">
      <div className = "Headerlogout">
        <Logout hist = {props.history} />
      </div>
      <img src = {MFicon} alt = "Microfocus"/>{" "}
      VENTO
    </div>
  );
};
export default Header;