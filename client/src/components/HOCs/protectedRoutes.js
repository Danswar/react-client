import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = ({ children }) => {
  const { isAuth } = useSelector(store => store.auth);

  return (
    <React.Fragment>
      {isAuth ? children : <Redirect to={{ pathname: "/signin" }} />}
    </React.Fragment>
  );
};

export default ProtectedRoutes;
