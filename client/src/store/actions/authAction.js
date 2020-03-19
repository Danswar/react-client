// To Middlewares
export const AUTH_CHECK = "[Auth] Check";
export const AUTH_SIGNIN_REQUEST = "[Auth] Singin request";
export const AUTH_SIGNUP_REQUEST = "[Auth] Singup request";
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
  payload: { email, password }
});

export const signupRequest = (username, email, password) => ({
  type: AUTH_SIGNIN_REQUEST,
  payload: { username, email, password }
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
