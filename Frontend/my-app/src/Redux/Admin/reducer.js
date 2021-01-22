import {
  ADD_CATEGORY_FAILURE,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_SUCCESS,
} from "./actionConstants";

const initState = {
  isLoading: false,
  error: false,
  success: false,
  message: "",
  categories: [],
  products: [],
};

export const adminReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        message: payload.message,
      };
    case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        message: payload,
      };
    case ADD_CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_CATEGORY_SUCCESS:
      console.log(payload);
      return {
        ...state,
        isLoading: false,
        success: true,
        categories: payload.categories,
        message: payload.message,
      };
    case ADD_CATEGORY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        message: payload,
      };
    case GET_CATEGORIES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        categories: payload.categories,
      };
    case GET_CATEGORIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        message: "Colud not get caegories",
      };

    default:
      return state;
  }
};
