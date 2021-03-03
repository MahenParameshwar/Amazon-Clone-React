import axios from "axios";
import * as actionConstants from "./actionConstants";

function fetchProductsRequest() {
  return {
    type: actionConstants.FETCH_PRODUCTS_REQUEST,
  };
}

function fetchProductsSuccess(response) {
  return {
    type: actionConstants.FETCH_PRODUCTS_SUCCESS,
    payload: response,
  };
}

function fetchProductsFailure(response) {
  return {
    type: actionConstants.FETCH_PRODUCTS_FAILURE,
    payload: response,
  };
}

export const makefetchProductsRequest = ({ page, limit }) => (dispatch) => {
  dispatch(fetchProductsRequest());
  axios
    .get(
      `${process.env.REACT_APP_BASE_URL}/api/products?page=${page}&limit=${limit}`
    )
    .then((res) => {
      dispatch(fetchProductsSuccess(res.data.current));
    })
    .catch((err) => {
      dispatch(fetchProductsFailure("Could not fetch products"));
    });
};

function fetchViewProductRequest() {
  return {
    type: actionConstants.FETCH_VIEW_PRODUCT_REQUEST,
  };
}

function fetchViewProductSuccess(response) {
  return {
    type: actionConstants.FETCH_VIEW_PRODUCT_SUCCESS,
    payload: response,
  };
}

function fetchViewProductFailure(response) {
  return {
    type: actionConstants.FETCH_VIEW_PRODUCT_FAILURE,
    payload: response,
  };
}

export const makefetchViewProductRequest = (_id) => (dispatch) => {
  dispatch(fetchViewProductRequest());
  axios
    .get(`${process.env.REACT_APP_BASE_URL}/api/products/${_id}`)
    .then((res) => {
      dispatch(fetchViewProductSuccess(res.data.product));
    })
    .catch((err) => {
      dispatch(fetchViewProductFailure("Could not fetch product"));
    });
};

export const setPage = (page) => {
  return {
    type: actionConstants.SET_PAGE,
    payload: page,
  };
};
