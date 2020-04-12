import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import AssetList from "./AssetList";
import Overview from "./Overview";
import ViewAsset from "./ViewAsset";

const Landing = props => {
  const routes = [
    {
      path: "/",
      exact: true,
      sidebar: () => <SideBar />,
      component: () => <Overview />,
    },
    {
      path: "/assetlist",
      exact: true,
      sidebar: () => <SideBar />,
      component: () => <AssetList props={props} />,
    },
    {
      path: "/overview",
      exact: true,
      sidebar: () => <SideBar />,
      component: () => <Overview />,
    },

    {
      path: "/createasset",
      exact: true,
      sidebar: () => <Sidebar />,
      component: () => <CreateAsset />,
    },
    {
      path: "/viewasset",
      exact: true,
      sidebar: () => <SideBar />,
      component: () => <ViewAsset props={props} />,
    },
  ];

  return (
    <div>
      <Header hist = {props.history} />
      <Router>
        <div className='d-flex flex-row'>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key = {index}
                path = {route.path}
                exact = {route.exact}
                children = {<route.sidebar />}
              />
            ))}
          </Switch>
          <main className="flex-grow-1">
          <Switch>
            {routes.map((route, index) => (
              <Route
                key = {index}
                path = {route.path}
                exact = {route.exact}
                children = {<route.component />}
              />
            ))}
          </Switch>
        </main>
        </div>
        
      </Router>
    </div>
  );
};

export default Landing;
