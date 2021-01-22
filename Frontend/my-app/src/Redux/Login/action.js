import axios from "axios";
import * as actionConstants from "./actionConstants";

function loginRequest() {
  return {
    type: actionConstants.LOGIN_REQUEST,
  };
}

function loginSuccess(response) {
  return {
    type: actionConstants.LOGIN_SUCCESS,
    payload: response,
  };
}

function loginFailure(response) {
  return {
    type: actionConstants.LOGIN_FAILURE,
    payload: response,
  };
}

export function loginErrorReset() {
  return {
    type: actionConstants.LOGIN_ERROR_RESET,
  };
}

export const updateLoggedUserCart = (cart) => {
  return {
    type: actionConstants.UPDATE_USER_CART,
    payload: cart,
  };
};

export const makeLoginRequest = ({ email, password }) => (dispatch) => {
  dispatch(loginRequest());
  axios
    .get(`${process.env.REACT_APP_BASE_URL}/api/login`, {
      params: {
        email,
        password,
      },
    })
    .then((res) => {
      dispatch(loginSuccess(res.data.user));
    })
    .catch((err) => {
      dispatch(loginFailure(err.response.data.message));
    });
};
