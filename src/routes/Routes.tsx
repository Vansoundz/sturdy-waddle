import React from "react";
import { Route, Switch } from "react-router";
import Home from "../pages/Home";
import Tasks from "../pages/Tasks";
import DashRoute from "./custom/DashRoute";
import { paths } from "./paths";

const Routes = () => {
  return (
    <Switch>
      <Route path={paths.index} component={Home} exact />
      <DashRoute path={paths.tasks} component={Tasks} exact />
    </Switch>
  );
};

export default Routes;
