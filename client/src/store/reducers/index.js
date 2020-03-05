import { combineReducers } from "redux";
import { testReducer } from "./testReducer";

export default combineReducers({
  //register your reducers here
  //example:
  // todo :  todoReducer
  test: testReducer,
});