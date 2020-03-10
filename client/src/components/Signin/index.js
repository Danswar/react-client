import React, { Component } from "react";
import SigninForm from "./signinForm";

class Signin extends Component {
  onSubmit = (email, password) => {
    console.log("credentials: ", email, password);
  };

  render() {
    return (
      <div>
        <SigninForm
          onSubmit={this.onSubmit}
          imgSrc="https://via.placeholder.com/330"
        />
      </div>
    );
  }
}

export default Signin;
