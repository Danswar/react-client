// To Middlewares
export const AUTH_SIGNIN_REQUEST = "[Auth] Singin request";
export const AUTH_DECODE_TOKEN = "[Auth] Decode token";
export const AUTH_CHECK = "[Auth] Check";
export const AUTH_LOGOUT_REQUEST = "[Auth] Logout request";

//To reducer
export const AUTH_SET_CREDENCIALS = "[Auth] Set credentials";
export const AUTH_DELETE_CREDENCIALS = "[Auth] Delete credentials";
export const AUTH_SET_ISLOADING = "[Auth] Set Loading";

//
//
// --Action creators
export const checkAuth = () => ({
  type: AUTH_CHECK
});

export const signinRequest = (email, password) => ({
  type: AUTH_SIGNIN_REQUEST,
  payload: { email, password }
});

export const decodeToken = response => ({
  type: AUTH_DECODE_TOKEN,
  payload: response.data.token
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
