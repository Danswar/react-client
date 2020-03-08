import { LOG } from "../actions/logAction";

const logMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === LOG) {
    console.log(action.payload);
  }
};

export default logMiddleware;
