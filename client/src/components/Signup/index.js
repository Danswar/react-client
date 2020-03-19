import React from "react";
import SignupForm from "./SignupForm";

const Signup = () => {
  const onSubmit = (username, email, password) => {
    console.log(username, email, password);
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

export default Signup;
