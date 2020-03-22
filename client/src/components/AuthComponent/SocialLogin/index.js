import React from "react";
import GoogleLogin from "react-google-login";

import { useDispatch } from "react-redux";
import { googleSigninRequest } from "../../../store/actions/authAction";

import { GOOGLE_CLIENT_ID } from "../../../keys";
import "./styles.css";

const SocialLogin = () => {
  const dispacth = useDispatch();

  return (
    <div>
      <GoogleLogin
        className="social-sign-button"
        clientId={GOOGLE_CLIENT_ID}
        buttonText="Sign with google"
        onSuccess={res => dispacth(googleSigninRequest(res.tokenId))}
        onFailure={res => console.log(res)}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default SocialLogin;
