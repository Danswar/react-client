import { AUTH_SET_CREDENCIALS } from "../actions/authAction";

//TODO: implementar middleware para quitar esto de aqui y chequear si el usuario esta loggueado aun
const token = localStorage.getItem("JWT_TOKEN")
  ? localStorage.getItem("JWT_TOKEN")
  : null;

const initialState = {
  isAuth: token ? true : false,
  token,
  user: {},
  isLoading: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SET_CREDENCIALS:
      localStorage.setItem("JWT_TOKEN", action.payload.token);
      return {
        ...state,
        isAuth: true,
        token: action.payload.token,
        user: action.payload.user,
        isLoading: false
      };

    default:
      return state;
  }
};
