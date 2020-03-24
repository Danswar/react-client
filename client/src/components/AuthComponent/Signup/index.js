import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signupRequest } from "../../../store/actions/authAction";
import SocialLogin from "../SocialLogin";
import withRedirectAuthUsers from "../HOCs/withRedirectAuthUsers";
import SignupForm from "./SignupForm";

const Signup = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(store => store.auth.isLoading);
  const error = useSelector(store => store.error);

  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    if (error.code >= 400 || error.code < 500) {
      setErrorMsg(error.msg);
    }
  }, [error]);

  const onSubmit = (username, email, password) => {
    username && email && password
      ? dispatch(signupRequest(username, email, password))
      : setErrorMsg("username, email and password are needed");
  };

  return (
    <div>
      <SignupForm
        onSubmit={onSubmit}
        errorMsg={errorMsg}
        isLoading={isLoading}
        imgSrc="https://via.placeholder.com/330"
      >
        <SocialLogin />
      </SignupForm>
    </div>
  );
};

export default withRedirectAuthUsers(Signup);
