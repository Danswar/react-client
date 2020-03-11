import React from "react";
import { Switch, Route } from "react-router-dom";

import Boot from "./Boot";
import Signin from "./Signin";
import Dashboard from "./Dashboard";
import NoMatch from "./NoMatch";

function Main() {
  return (
    <div>
      <Switch>
        <Route path="/" exact={true} component={Boot} />
        <Route path="/signin" exact={true} component={Signin} />
        <Route path="/dashboard" exact={true} component={Dashboard} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </div>
  );
}

export default Main;
