import React from "react";
import { Switch, Route } from "react-router-dom";

import Boot from "./Boot";
import Signin from "./Signin";
import Dashboard from "./Dashboard";
import NoMatch from "./NoMatch";
import ProtectedRoute from "./HOCs/protectedRoute";

function Main() {
  return (
    <div>
      <Switch>
        {/* Public routes */}
        <Route path="/" exact={true} component={Boot} />
        <Route path="/signin" exact={true} component={Signin} />

        {/* Private routes */}
        <ProtectedRoute path="/dashboard" exact={true} component={Dashboard} />

        {/* Default route*/}
        <Route path="*" component={NoMatch} />
      </Switch>
    </div>
  );
}

export default Main;
