import JWT from "jsonwebtoken";
import { API_URL } from "../constants";
import { apiRequest } from "../actions/apiAction";

import {
  decodeToken,
  setCredentials,
  authLoading
} from "../actions/authAction";
import {
  AUTH_SIGNIN_REQUEST,
  AUTH_DECODE_TOKEN,
  AUTH_CHECK,
  AUTH_SET_CREDENCIALS,
  AUTH_LOGOUT_REQUEST,
  AUTH_DELETE_CREDENCIALS
} from "../actions/authAction";

import { log } from "../actions/logAction";

const authMiddleware = ({ dispatch }) => next => async action => {
  next(action);

  switch (action.type) {
    case AUTH_SET_CREDENCIALS:
      if (action.payload.token.length !== 0) {
        localStorage.setItem("JWT_TOKEN", action.payload.token);
      }
      break;

    case AUTH_SIGNIN_REQUEST:
      dispatch(
        apiRequest(
          action.payload,
          "POST",
          `${API_URL}/signin`,
          decodeToken,
          log
        )
      );
      break;

    case AUTH_LOGOUT_REQUEST:
      localStorage.removeItem("JWT_TOKEN");
      dispatch({ type: AUTH_DELETE_CREDENCIALS });
      break;

    case AUTH_DECODE_TOKEN:
      const user = await JWT.decode(action.payload);
      dispatch(setCredentials(action.payload, user));
      break;

    case AUTH_CHECK:
      const token = localStorage.getItem("JWT_TOKEN")
        ? localStorage.getItem("JWT_TOKEN")
        : null;

      if (token) {
        const user = await JWT.decode(token);
        dispatch(setCredentials(token, user));
      }
      dispatch(authLoading(false));
      break;

    default:
      break;
  }
};

export default authMiddleware;
