import axios from "axios";
import {
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE,
  UPDATE_ORDERS_REQUEST,
  UPDATE_ORDERS_SUCCESS,
  UPDATE_ORDERS_FAILURE,
} from "./actionConstants";

const getOrdersRequest = () => {
  return {
    type: GET_ORDERS_REQUEST,
  };
};

const getOrdersSuccess = (payload) => {
  return {
    type: GET_ORDERS_SUCCESS,
    payload: payload,
  };
};

const getOrdersFailure = () => {
  return {
    type: GET_ORDERS_FAILURE,
  };
};

const updateOrdersRequest = () => {
  return {
    type: UPDATE_ORDERS_REQUEST,
  };
};

const updateOrdersSuccess = () => {
  return {
    type: UPDATE_ORDERS_SUCCESS,
  };
};

const updateOrdersFailure = () => {
  return {
    type: UPDATE_ORDERS_FAILURE,
  };
};

export const makeUpdateOrdersRequest = ({
  token,
  total,
  cart,
  address,
  isPaid,
}) => (dispatch) => {
  dispatch(updateOrdersRequest());

  return axios
    .post(
      `${process.env.REACT_APP_BASE_URL}/api/auth/orders`,
      { total, cart, address, isPaid },
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    )
    .then((res) => {
      dispatch(updateOrdersSuccess(res.data.order));
    })
    .catch((err) => {
      if (err.response.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch(updateOrdersFailure());
    });
};

export const makeGetOrdersRequest = (token) => (dispatch) => {
  dispatch(getOrdersRequest());

  return axios
    .get(`${process.env.REACT_APP_BASE_URL}/api/auth/orders`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch(getOrdersSuccess(res.data.orders));
    })
    .catch((err) => {
      if (err.response.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch(getOrdersFailure());
    });
};
