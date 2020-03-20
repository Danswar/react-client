import { SET_ERROR, CLEAR_ERROR } from "../actions/errorActions";

const initialState = {
  code: null,
  msg: ""
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        code: action.payload.code,
        msg: action.payload.msg
      };

    case CLEAR_ERROR:
      return {
        ...state,
        code: null,
        msg: ""
      };

    default:
      return state;
  }
};
