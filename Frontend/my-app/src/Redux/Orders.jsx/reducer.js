import {
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE,
  UPDATE_ORDERS_REQUEST,
  UPDATE_ORDERS_SUCCESS,
  UPDATE_ORDERS_FAILURE,
} from "./actionConstants";

const initState = {
  orders: [],
  isLoading: false,
  error: false,
  message: "",
};

export const ordersReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_ORDERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        orders: [...payload],
      };
    case GET_ORDERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        message: "Colud not load info",
      };
    case UPDATE_ORDERS_REQUEST:
      return {
        ...state,

        isLoading: true,
      };
    case UPDATE_ORDERS_SUCCESS:
      return {
        ...state,
      };
    case UPDATE_ORDERS_FAILURE: {
      return {
        ...state,
        message: "Colud not place order",
      };
    }
    default:
      return state;
  }
};
