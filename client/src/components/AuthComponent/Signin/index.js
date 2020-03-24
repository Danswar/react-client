import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signinRequest } from "../../../store/actions/authAction";

import SocialLogin from "../SocialLogin";
import SigninForm from "./signinForm";
import withRedirectAuthUsers from "../HOCs/withRedirectAuthUsers";

const Signin = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(store => store.auth.isLoading);
  const error = useSelector(store => store.error);

  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    if (error.code >= 400 || error.code < 500) {
      setErrorMsg(error.msg);
    }
  }, [error]);

  const onSubmit = (email, password) => {
    email && password
      ? dispatch(signinRequest(email, password))
      : setErrorMsg("email and password are needed");
  };

  return (
    <div>
      <SigninForm
        onSubmit={onSubmit}
        errorMsg={errorMsg}
        isLoading={isLoading}
        imgSrc="https://via.placeholder.com/330"
      >
        <SocialLogin />
      </SigninForm>
      >
    </div>
  );
};

export default withRedirectAuthUsers(Signin);
