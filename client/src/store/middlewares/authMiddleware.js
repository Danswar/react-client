import JWT from "jsonwebtoken";
import { apiRequest } from "../actions/apiAction";

import { setCredentials, authLoading, checkAuth } from "../actions/authAction";
import {
  AUTH_CHECK,
  AUTH_SIGNIN_REQUEST,
  AUTH_SIGNUP_REQUEST,
  AUTH_GOOGLE_SIGNIN_REQUEST,
  AUTH_FACEBOOK_SIGNIN_REQUEST,
  AUTH_SET_CREDENCIALS,
  AUTH_LOGOUT_REQUEST,
  AUTH_DELETE_CREDENCIALS
} from "../actions/authAction";
import { clearError } from "../actions/errorActions";

const authMiddleware = ({ dispatch }) => next => async action => {
  next(action);

  switch (action.type) {
    case AUTH_SET_CREDENCIALS:
      localStorage.setItem("JWT_TOKEN", action.payload.token);
      break;

    case AUTH_DELETE_CREDENCIALS:
      localStorage.removeItem("JWT_TOKEN");
      break;

    case AUTH_SIGNUP_REQUEST:
    case AUTH_SIGNIN_REQUEST:
    case AUTH_GOOGLE_SIGNIN_REQUEST:
    case AUTH_FACEBOOK_SIGNIN_REQUEST:
      dispatch(authLoading(true));
      dispatch(clearError());
      dispatch(
        apiRequest({
          body: action.payload,
          method: action.meta.method,
          url: action.meta.url,
          onSuccess: checkAuth,
          onError: { type: AUTH_DELETE_CREDENCIALS }
        })
      );
      break;

    case AUTH_LOGOUT_REQUEST:
      //TODO: Make a logout request to server
      dispatch({ type: AUTH_DELETE_CREDENCIALS });
      break;

    case AUTH_CHECK:
      const token = action.payload
        ? action.payload.data.token
        : localStorage.getItem("JWT_TOKEN");

      const user = await checkToken(token);
      user
        ? dispatch(setCredentials(token, user))
        : dispatch({ type: AUTH_DELETE_CREDENCIALS });

      dispatch(authLoading(false));
      break;

    default:
      break;
  }
};

export default authMiddleware;

//--
//--
// Helpers
const checkToken = async token => {
  try {
    if (!token || !token.length) return false;

    let user = await JWT.decode(token);

    let { exp } = user;
    let now = Date.now() / 1000;
    if (exp < now) return false;

    return user;
  } catch (error) {
    console.log(error);
    return false;
  }
};
