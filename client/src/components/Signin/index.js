import React from "react";
import { useDispatch } from "react-redux";
import { signinRequest } from "../../store/actions/authAction";

import SigninForm from "./signinForm";

const Signin = () => {
  const dispatch = useDispatch();

  const onSubmit = (email, password) => {
    dispatch(signinRequest(email, password));
  };

  return (
    <div>
      <SigninForm
        onSubmit={onSubmit}
        imgSrc="https://via.placeholder.com/330"
      />
    </div>
  );
};

export default Signin;
