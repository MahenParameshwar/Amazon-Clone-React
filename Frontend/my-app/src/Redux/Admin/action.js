import axios from "axios";
import {
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE,
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  RESET_MESSAGE,
} from "./actionConstants";

function addProductRequest() {
  return {
    type: ADD_PRODUCT_REQUEST,
  };
}

function addProductSuccess(response) {
  return {
    type: ADD_PRODUCT_SUCCESS,
    payload: response,
  };
}

function addProductFailure(message) {
  return {
    type: ADD_PRODUCT_FAILURE,
    payload: message,
  };
}

export const makeAddProductsRequest = (product) => (dispatch) => {
  dispatch(addProductRequest());
  console.log(product);
  axios
    .post(`${process.env.REACT_APP_BASE_URL}/api/products`, product)
    .then((res) => {
      dispatch(addProductSuccess(res.data));
    })
    .catch((err) => dispatch(addProductFailure("Could not add product")));
};

function addCategoryRequest() {
  return {
    type: ADD_CATEGORY_REQUEST,
  };
}

function addCategorySuccess(response) {
  return {
    type: ADD_CATEGORY_SUCCESS,
    payload: response,
  };
}

function addCategoryFailure(message) {
  return {
    type: ADD_CATEGORY_FAILURE,
    payload: message,
  };
}

export const makeAddCategoryRequest = (category) => (dispatch) => {
  dispatch(addCategoryRequest());

  axios
    .post(`${process.env.REACT_APP_BASE_URL}/api/category`, category)
    .then((res) => {
      console.log(res);
      dispatch(addCategorySuccess(res.data));
    })
    .catch((err) => dispatch(addCategoryFailure("Could not add category")));
};

function getCategoriesRequest() {
  return {
    type: GET_CATEGORIES_REQUEST,
  };
}

function getCategoriesSuccess(payload) {
  return {
    type: GET_CATEGORIES_SUCCESS,
    payload: payload,
  };
}

function getCategoriesFailure() {
  return {
    type: GET_CATEGORIES_FAILURE,
  };
}
export const makeGetCategoriesRequest = () => (dispatch) => {
  dispatch(getCategoriesRequest());
  axios
    .get(`${process.env.REACT_APP_BASE_URL}/api/category`)
    .then((res) => {
      console.log(res);
      dispatch(getCategoriesSuccess(res.data));
    })
    .catch((err) => [
      dispatch(getCategoriesFailure("Could not fetch categories")),
    ]);
};

export const resetMessage = () => {
  return {
    type: RESET_MESSAGE,
  };
};
