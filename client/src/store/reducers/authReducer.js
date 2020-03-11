import {
  AUTH_SET_CREDENCIALS,
  AUTH_SET_ISLOADING
} from "../actions/authAction";

const initialState = {
  isAuth: false,
  token: "",
  user: {},
  isLoading: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SET_CREDENCIALS:
      return {
        ...state,
        isAuth: true,
        token: action.payload.token,
        user: action.payload.user,
        isLoading: false
      };

    case AUTH_SET_ISLOADING:
      return {
        ...state,
        isLoading: action.payload
      };

    default:
      return state;
  }
};
