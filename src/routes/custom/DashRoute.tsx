import React, { FC } from "react";
import { Route, RouteProps } from "react-router";
import DashLayout from "../../components/layout/DashLayout";

const DashRoute: FC<RouteProps> = (props) => {
  return (
    <DashLayout>
      <Route {...props} />
    </DashLayout>
  );
};

export default DashRoute;
