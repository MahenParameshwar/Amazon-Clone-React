import {
  UPDATE_CART,
  UPDATE_TOTAL_ITEMS,
  UPDATE_TOTAL_AMOUNT,
  UPDATE_CART_REQUEST,
  UPDATE_CART_SUCCESS,
  UPDATE_CART_FAILURE,
} from "./actionConstants";

const initState = {
  noOfItems: 0,
  cart: [],
  amount: 0,
  isLoading: false,
  error: false,
  message: "",
};

export const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case UPDATE_CART:
      return {
        ...state,
        cart: payload,
      };
    case UPDATE_TOTAL_ITEMS:
      return {
        ...state,
        noOfItems: payload,
      };
    case UPDATE_TOTAL_AMOUNT:
      return {
        ...state,
        amount: payload,
      };
    case UPDATE_CART_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: payload,
      };
    case UPDATE_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        message: "Could not update the cart",
      };
    default:
      return state;
  }
};
