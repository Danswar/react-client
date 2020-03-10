import { combineReducers } from "redux";
import { testReducer } from "./testReducer";
import { authReducer } from "./authReducer";

export default combineReducers({
  //register your reducers here
  //example:
  // todo :  todoReducer
  auth: authReducer,

  //test reducer
  test: testReducer
});
