import axios from "axios";

import { API_REQUEST } from "../actions/apiAction";

const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === API_REQUEST) {
    const { method, url, onSuccess, onError } = action.payload.meta;
    const body = action.payload.body;

    axios({
      url,
      method,
      data: JSON.stringify(body)
    })
      .then(data => dispatchAll(dispatch, onSuccess, data))
      .catch(error => dispatchAll(dispatchAll, onError, error));
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
    }
  } catch (error) {
    console.log(error);
  }
};
