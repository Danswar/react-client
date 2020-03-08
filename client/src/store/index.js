import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./reducers";
import middlewares from "./middlewares";

//initial state
const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares),
    /* uncomment next line for react devtools - */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
