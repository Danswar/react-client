import React from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

import { useDispatch } from "react-redux";
import {
  googleSigninRequest,
  facebookSigninRequest
} from "../../../store/actions/authAction";

import { GOOGLE_CLIENT_ID, FACEBOOK_CLIENT_ID } from "../../../keys";
import "./styles.css";

const SocialLogin = ({ isLoading }) => {
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
        disabled={isLoading}
      />
      <FacebookLogin
        appId={FACEBOOK_CLIENT_ID}
        fields="name,email,picture"
        onClick={() => console.log("button clicked")}
        callback={res => dispacth(facebookSigninRequest(res.accessToken))}
        disabled={isLoading}
      />
    </div>
  );
};

export default SocialLogin;
