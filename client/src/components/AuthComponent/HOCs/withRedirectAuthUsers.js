import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checkAuth, authLoading } from "../../../store/actions/authAction";

const withRedirectAuthUsers = (
  WrappedComponent,
  redirectGuessesTo = "",
  redirectUsersTo = "/dashboard"
) => {
  return () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { isAuth, isLoading } = useSelector(store => store.auth);

    const [booted, setBooted] = useState(false);

    useEffect(() => {
      if (!isLoading && booted) {
        if (isAuth) history.push(redirectUsersTo);
        else if (redirectGuessesTo !== "") history.push(redirectGuessesTo);
      }
    }, [isLoading, booted, isAuth, history]);

    useEffect(() => {
      const boot = async () => {
        await dispatch(authLoading(true));
        await dispatch(checkAuth());
      };
      boot();
      setBooted(true);
    }, [dispatch]);

    return <WrappedComponent />;
  };
};

export default withRedirectAuthUsers;
