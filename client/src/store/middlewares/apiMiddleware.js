import axios from "axios";
import { API_REQUEST } from "../actions/apiAction";
import { setError } from "../actions/errorActions";

const apiMiddleware = ({ dispatch, getState }) => next => action => {
  next(action);

  if (action.type === API_REQUEST) {
    const { method, url, onSuccess, onError } = action.payload.meta;
    const body = action.payload.body;
    const token = getState().auth.token;

    axios({
      url,
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `JWT ${token}` : ""
      },
      data: JSON.stringify(body)
    })
      .then(data => dispatchAll(dispatch, onSuccess, data))
      .catch(error => {
        let { response } = error;
        dispatch(setError(response.status, response.data.msg));
        dispatchAll(dispatch, onError, response);
      });
  }
};

export default apiMiddleware;

//
// helpers
const dispatchAll = (dispatcher, actions, data) => {
  const type = Array.isArray(actions) ? "Array" : typeof actions;

  try {
    switch (type) {
      case "Array":
        actions.map(action => dispatchAll(dispatcher, action, data));
        break;

      case "function":
        dispatcher(actions(data));
        break;

      case "object":
        dispatcher(actions);
        break;

      default:
        break;
    }
  } catch (error) {
    console.log(error);
  }
};
