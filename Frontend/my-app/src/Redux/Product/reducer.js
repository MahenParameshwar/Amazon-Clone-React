import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_VIEW_PRODUCT_REQUEST,
  FETCH_VIEW_PRODUCT_SUCCESS,
  FETCH_VIEW_PRODUCT_FAILURE,
  SET_PAGE,
} from "./actionConstants";

const initState = {
  isLoading: true,
  error: false,
  success: false,
  products: [],
  viewProduct: null,
  message: "",
  page: 1,
  limit: 6,
  total: 0,
};

export const productsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        message: payload,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        products: payload.products,
        total: payload.total,
        page: payload.page,
      };
    case FETCH_VIEW_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_VIEW_PRODUCT_SUCCESS:
      return {
        ...state,
        success: true,
        error: false,
        isLoading: false,
        viewProduct: payload,
      };
    case FETCH_VIEW_PRODUCT_FAILURE:
      return {
        ...state,
        error: true,
        success: false,
        isLoading: false,
        message: payload,
      };
    case SET_PAGE:
      return {
        ...state,
        page: payload,
      };
    default:
      return state;
  }
};
