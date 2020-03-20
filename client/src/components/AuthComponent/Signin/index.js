import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signinRequest } from "../../../store/actions/authAction";
import { clearError } from "../../../store/actions/errorActions";

import SigninForm from "./signinForm";
import withRedirectAuthUsers from "../HOCs/withRedirectAuthUsers";

const Signin = () => {
  const dispatch = useDispatch();
  const error = useSelector(store => store.error);

  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    if (error.code === 401) {
      setErrorMsg(error.msg);
    }
  }, [error]);

  const cleanError = () => {
    dispatch(clearError());
  };

  const onSubmit = (email, password) => {
    dispatch(signinRequest(email, password));
    dispatch(clearError());
  };

  return (
    <div>
      <SigninForm
        onSubmit={onSubmit}
        errorMsg={errorMsg}
        cleanError={cleanError}
        imgSrc="https://via.placeholder.com/330"
      />
    </div>
  );
};

export default withRedirectAuthUsers(Signin);
