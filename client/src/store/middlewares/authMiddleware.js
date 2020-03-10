import JWT from "jsonwebtoken";
import { API_URL } from "../constants";
import { apiRequest } from "../actions/apiAction";

import { decodeToken, setCredentials } from "../actions/authAction";
import { AUTH_SIGNIN_REQUEST, AUTH_DECODE_TOKEN } from "../actions/authAction";

import { log } from "../actions/logAction";

const authMiddleware = ({ dispatch }) => next => async action => {
  next(action);

  switch (action.type) {
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

    case AUTH_DECODE_TOKEN:
      const user = await JWT.decode(action.payload);
      dispatch(setCredentials(action.payload, user));
      break;

    default:
      break;
  }
};

export default authMiddleware;
