import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checkAuth, authLoading } from "../../store/actions/authAction";

const withCheckAuth = WrappedComponent => {
  return () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { isAuth, isLoading } = useSelector(store => store.auth);

    const [booted, setBooted] = useState(false);

    useEffect(() => {
      if (!isLoading && booted) {
        isAuth ? history.push("/dashboard") : history.push("/signin");
      }
    }, [isLoading, booted, isAuth]);

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

export default withCheckAuth;
