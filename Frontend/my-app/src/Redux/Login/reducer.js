import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_ERROR_RESET,
  LOGIN_SUCCESS,
  UPDATE_USER_CART,
} from "./actionConstants";

const initState = {
  isLoading: false,
  error: false,
  isAuth: false,
  success: false,
  loggedUser: {
    _id: "60018d00e7094010bc0759ae",
    name: "mahen",
    email: "m@gmail.com",
    password: "123",
    cart: [],
  },
  message: "",
};

export const loginReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        message: payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loggedUser: payload,
        isAuth: true,
      };
    case LOGIN_ERROR_RESET:
      return {
        ...state,
        error: false,
        message: "",
      };
    case UPDATE_USER_CART:
      return {
        ...state,
        loggedUser: { ...state.loggedUser, cart: payload },
      };
    default:
      return state;
  }
};
