import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearError } from "../../../store/actions/errorActions";
import { signupRequest } from "../../../store/actions/authAction";
import SocialLogin from "../SocialLogin";
import withRedirectAuthUsers from "../HOCs/withRedirectAuthUsers";
import SignupForm from "./SignupForm";

const Signup = () => {
  const dispatch = useDispatch();
  const error = useSelector(store => store.error);

  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    if (error.code === 400) {
      setErrorMsg(error.msg);
    }
  }, [error]);

  const cleanError = () => {
    dispatch(clearError());
  };

  const onSubmit = (username, email, password) => {
    dispatch(signupRequest(username, email, password));
  };

  return (
    <div>
      <SignupForm
        onSubmit={onSubmit}
        errorMsg={errorMsg}
        cleanError={cleanError}
        imgSrc="https://via.placeholder.com/330"
      >
        <SocialLogin />
      </SignupForm>
    </div>
  );
};

export default withRedirectAuthUsers(Signup);
