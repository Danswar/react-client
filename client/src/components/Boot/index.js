import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checkAuth, authLoading } from "../../store/actions/authAction";

const Boot = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isAuth, isLoading } = useSelector(store => store.auth);

  const [booted, setBooted] = useState(false);

  useEffect(() => {
    if (!isLoading && booted) {
      isAuth ? history.push("/dashboard") : history.push("/signin");
    }
  }, [isLoading, booted]);

  useEffect(() => {
    const boot = async () => {
      await dispatch(authLoading(true));
      await dispatch(checkAuth());
    };
    boot();
    setBooted(true);
  }, [dispatch]);

  return (
    <div
      style={{
        height: "100vh"
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <img
        src="https://via.placeholder.com/200"
        alt="logo"
        style={{
          borderRadius: "50%",
          boxShadow: "60px 60px 100px 0px rgba(241,241,241,1)"
        }}
      />
    </div>
  );
};

export default Boot;
