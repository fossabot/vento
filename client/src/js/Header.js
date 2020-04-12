import React from "react";
import Logout from "./Logout";

const Header = props => {
  return (
    <header className="fixed-top bg-white border-bottom box-shadow masthead d-flex">
      <div className="masthead-navbar__spacer"></div>
      <div className="masthead-body flex-grow-1">
        <div className='d-flex justify-content-between'>
          <h2>Assets</h2>
          <div className="d-flex justify-content-end">
            <button className="btn btn-default">
              Import Assets
            </button>
            <button className="btn btn-primary">
              <span className="btn__value">Add Assets</span>
            </button>
            <Logout hist = {props.history} />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;