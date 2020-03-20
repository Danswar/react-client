import React from "react";
import GoogleLogin from "react-google-login";
import { googleClientID } from "../../../keys";
import "./styles.css";

const SocialLogin = () => {
  return (
    <div>
      <GoogleLogin
        className="social-sign-button"
        clientId={googleClientID}
        buttonText="Sign with google"
        onSuccess={res => console.log(res)}
        onFailure={res => console.log(res)}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default SocialLogin;
