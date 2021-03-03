import {
  GET_CUSTOMER_DATA_REQUEST,
  GET_CUSTOMER_DATA_SUCCESS,
  GET_CUSTOMER_DATA_FAILURE,
  UPDATE_LOGGED_USER_CART,
} from "./actionConstants";

const initState = {
  customer: null,
  isLoading: false,
  error: false,
  message: "",
};

export const customerReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_CUSTOMER_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CUSTOMER_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        customer: payload,
      };
    case GET_CUSTOMER_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        message: "Colud not load info",
      };
    case UPDATE_LOGGED_USER_CART:
      return {
        ...state,
        customer: { ...state.customer, cart: payload },
      };
    default:
      return state;
  }
};
