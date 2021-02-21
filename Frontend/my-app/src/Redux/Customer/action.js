import axios from "axios";
import { setCart } from "../Cart/action";
import {
  GET_CUSTOMER_DATA_REQUEST,
  GET_CUSTOMER_DATA_FAILURE,
  GET_CUSTOMER_DATA_SUCCESS,
  UPDATE_LOGGED_USER_CART,
} from "./actionConstants";

const getCustomerDataRequest = () => {
  return {
    type: GET_CUSTOMER_DATA_REQUEST,
  };
};

const getCustomerDataSuccess = (payload) => {
  return {
    type: GET_CUSTOMER_DATA_SUCCESS,
    payload: payload,
  };
};

const getCustomerDataFailure = () => {
  return {
    type: GET_CUSTOMER_DATA_FAILURE,
  };
};

export const updateLoggedUserCart = (cart) => {
  return {
    type: UPDATE_LOGGED_USER_CART,
    payload: cart,
  };
};

export const makeGetCustomerDataRequest = (token) => (dispatch) => {
  dispatch(getCustomerDataRequest());

  return axios
    .get(`${process.env.REACT_APP_BASE_URL}/api/auth/customer`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch(getCustomerDataSuccess(res.data));
      dispatch(setCart(res.data.cart));
    })
    .catch((err) => {
      if (err.response.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch(getCustomerDataFailure());
    });
};
