import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component, ...rest }) => {
  const { isAuth } = useSelector(store => store.auth);

  const display = isAuth ? (
    <Route {...rest} component={component} />
  ) : (
    <Route
      {...rest}
      render={({ location }) => (
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: location }
          }}
        />
      )}
    />
  );

  return display;
};

export default ProtectedRoute;
