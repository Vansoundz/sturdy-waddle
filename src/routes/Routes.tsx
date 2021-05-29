import React from "react";
import { Route, Switch } from "react-router";
import Books from "../pages/Books";
import Home from "../pages/Home";
import Poems from "../pages/Poems";
import Tasks from "../pages/Tasks";
import Videos from "../pages/Videos";
import DashRoute from "./custom/DashRoute";
import { paths } from "./paths";

const Routes = () => {
  return (
    <Switch>
      <Route path={paths.index} component={Home} exact />
      <DashRoute path={paths.tasks} component={Tasks} exact />
      <DashRoute path={paths.books} component={Books} exact />
      <DashRoute path={paths.poems} component={Poems} exact />
      <DashRoute path={paths.videos} component={Videos} exact />
    </Switch>
  );
};

export default Routes;
