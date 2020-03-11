import React from "react";
import { Switch, Route } from "react-router-dom";

import Boot from "./Boot";
import Signin from "./Signin";
import Dashboard from "./Dashboard";
import NoMatch from "./NoMatch";
import ProtectedRoutes from "./HOCs/protectedRoutes";

function Main() {
  return (
    <div>
      <Switch>
        {/* Public routes */}
        <Route path="/" exact={true} component={Boot} />
        <Route path="/signin" exact={true} component={Signin} />

        {/* Private routes */}
        <ProtectedRoutes>
          <Route path="/dashboard" exact={true} component={Dashboard} />
        </ProtectedRoutes>

        {/* Default route*/}
        <Route path="*" component={NoMatch} />
      </Switch>
    </div>
  );
}

export default Main;
