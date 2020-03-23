import { API_URL } from "../constants";

// To Middlewares
export const AUTH_CHECK = "[Auth] Check";
export const AUTH_SIGNIN_REQUEST = "[Auth] Singin request";
export const AUTH_SIGNUP_REQUEST = "[Auth] Singup request";
export const AUTH_GOOGLE_SIGNIN_REQUEST = "[Auth] Google singin request";
export const AUTH_FACEBOOK_SIGNIN_REQUEST = "[Auth] Facebook singin request";
export const AUTH_LOGOUT_REQUEST = "[Auth] Logout request";

//To reducer
export const AUTH_SET_CREDENCIALS = "[Auth] Set credentials";
export const AUTH_DELETE_CREDENCIALS = "[Auth] Delete credentials";
export const AUTH_SET_ISLOADING = "[Auth] Set Loading";

//
//
// --Action creators
export const checkAuth = optionalResponse => ({
  type: AUTH_CHECK,
  payload: optionalResponse
});

export const signinRequest = (email, password) => ({
  type: AUTH_SIGNIN_REQUEST,
  payload: { email, password },
  meta: {
    method: "POST",
    url: `${API_URL}/signin`
  }
});

export const signupRequest = (username, email, password) => ({
  type: AUTH_SIGNUP_REQUEST,
  payload: { username, email, password },
  meta: {
    method: "POST",
    url: `${API_URL}/signup`
  }
});

export const googleSigninRequest = id_token => ({
  type: AUTH_GOOGLE_SIGNIN_REQUEST,
  payload: { id_token },
  meta: {
    method: "POST",
    url: `${API_URL}/auth/google`
  }
});

export const facebookSigninRequest = access_token => ({
  type: AUTH_FACEBOOK_SIGNIN_REQUEST,
  payload: { access_token },
  meta: {
    method: "POST",
    url: `${API_URL}/auth/facebook`
  }
});

export const setCredentials = (token, user) => ({
  type: AUTH_SET_CREDENCIALS,
  payload: { token, user }
});

export const logoutRequest = () => ({
  type: AUTH_LOGOUT_REQUEST
});

export const authLoading = state => ({
  type: AUTH_SET_ISLOADING,
  payload: state
});
