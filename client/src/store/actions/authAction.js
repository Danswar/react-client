// To Middlewares
export const AUTH_SIGNIN_REQUEST = "[Auth] Singin request";
export const AUTH_DECODE_TOKEN = "[Auth] Decode token";

//To reducer
export const AUTH_SET_CREDENCIALS = "[Auth] Set credentials";

//
//
// --Action creators
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
