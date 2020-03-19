import React from "react";
import { useDispatch } from "react-redux";
import { signupRequest } from "../../../store/actions/authAction";
import withRedirectAuthUsers from "../HOCs/withRedirectAuthUsers";
import SignupForm from "./SignupForm";

const Signup = () => {
  const dispatch = useDispatch();
  const onSubmit = (username, email, password) => {
    dispatch(signupRequest(username, email, password));
  };

  return (
    <div>
      <SignupForm
        onSubmit={onSubmit}
        imgSrc="https://via.placeholder.com/330"
      />
    </div>
  );
};

export default withRedirectAuthUsers(Signup);
