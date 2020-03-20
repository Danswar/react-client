import { combineReducers } from "redux";
import { testReducer } from "./testReducer";
import { authReducer } from "./authReducer";
import { errorReducer } from "./errorReducer";

export default combineReducers({
  //register your reducers here
  //example:
  // todo :  todoReducer

  auth: authReducer,
  error: errorReducer,

  //test reducer
  test: testReducer
});
