import React from "react";
import GoogleLogin from "react-google-login";
import { GOOGLE_CLIENT_ID } from "../../../keys";
import "./styles.css";

const SocialLogin = () => {
  return (
    <div>
      <GoogleLogin
        className="social-sign-button"
        clientId={GOOGLE_CLIENT_ID}
        buttonText="Sign with google"
        onSuccess={res => console.log(res)}
        onFailure={res => console.log(res)}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default SocialLogin;
