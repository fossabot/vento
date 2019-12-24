import React from "react";

import { BrowserRouter, Switch} from "react-router-dom";

import Login from './Login';
import Home from './Home';

import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

const App = () => {
  return (
    <React.Fragment>  
      
      <BrowserRouter>
          <Switch>
            <PublicRoute restricted={ false } component={ Login } path="/login" exact />
            <PrivateRoute component={ Home } path="/" exact />
            <PrivateRoute component={ Home } path="/home" exact />
          </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};
export default App;

