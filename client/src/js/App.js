import React from "react";

import { BrowserRouter, Switch } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import Login from "./Login";
import Landing from "./Landing";

import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <React.Fragment>
      <ToastContainer />
      <BrowserRouter>
        <Switch>
          <PublicRoute
            restricted={false}
            component={Login}
            path="/login"
            exact
          />
          <PrivateRoute component={Landing} path="/" />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};
export default App;
