import React from "react";
import Logout from "./Logout";

const Overview = () => {
  return (
      <div>
        <header className="fixed-top bg-white border-bottom box-shadow masthead d-flex">
          <div className="masthead-navbar__spacer"></div>
          <div className="masthead-body flex-grow-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <h2 className="masthead-body__title mr-2">Overview</h2>
              </div>
          </div>
        </header>
      </div>
  );
};

export default Overview;
