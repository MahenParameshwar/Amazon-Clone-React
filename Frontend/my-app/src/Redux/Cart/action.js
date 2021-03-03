import axios from "axios";
import { updateLoggedUserCart } from "../Customer/action";

const {
  UPDATE_CART,
  UPDATE_TOTAL_ITEMS,
  UPDATE_TOTAL_AMOUNT,
  UPDATE_CART_REQUEST,
  UPDATE_CART_SUCCESS,
  UPDATE_CART_FAILURE,
} = require("./actionConstants");

const updateCart = (updatedCart) => {
  return {
    type: UPDATE_CART,
    payload: updatedCart,
  };
};

export const updateTotalItems = (cartTotal) => {
  return {
    type: UPDATE_TOTAL_ITEMS,
    payload: cartTotal,
  };
};

const updateTotalAmount = (totalAmmount) => {
  return {
    type: UPDATE_TOTAL_AMOUNT,
    payload: totalAmmount,
  };
};

export const upateCartRequest = () => {
  return {
    type: UPDATE_CART_REQUEST,
  };
};

export const updateCartSuccess = (cart) => {
  return {
    type: UPDATE_CART_SUCCESS,
    payload: cart,
  };
};

export const updateCartFailure = () => {
  return {
    type: UPDATE_CART_FAILURE,
  };
};

export const setCart = (cart) => (dispatch) => {
  const totalCount = cart.reduce((sum, prod) => prod.quantity + sum, 0);
  const totalAmount = cart.reduce(
    (sum, prod) => prod.quantity * prod.price + sum,
    0
  );
  dispatch(updateCart(cart));
  dispatch(updateTotalItems(totalCount));
  dispatch(updateTotalAmount(totalAmount));
};

export const handleAddToCart = ({ product, cart, quantity = 1, userId }) => (
  dispatch
) => {
  let newCart = [...cart];
  console.log(userId);

  const index = cart.findIndex((prod) => prod._id === product._id);

  if (index < 0) {
    newCart = [...newCart, { ...product, quantity: 1 }];
  } else {
    const cartProduct = { ...cart[index] };
    cartProduct.quantity = quantity;

    newCart.splice(index, 1, cartProduct);
  }

  const totalCount = newCart.reduce((sum, prod) => prod.quantity + sum, 0);
  const totalAmount = newCart.reduce(
    (sum, prod) => prod.quantity * prod.price + sum,
    0
  );
  dispatch(updateCart(newCart));
  dispatch(updateTotalItems(totalCount));
  dispatch(updateTotalAmount(totalAmount));
  dispatch(updateCartUser(newCart, userId));
};

export const handleDeleteFromCart = ({ id, cart, userId }) => (dispatch) => {
  const newCart = cart.filter((prod) => prod._id !== id);

  const totalCount = newCart.reduce((sum, prod) => prod.quantity + sum, 0);
  const totalAmount = newCart.reduce(
    (sum, prod) => prod.quantity * prod.price + sum,
    0
  );
  dispatch(updateCart(newCart));
  dispatch(updateTotalItems(totalCount));
  dispatch(updateTotalAmount(totalAmount));
  dispatch(updateCartUser(newCart, userId));
};

export const updateCartUser = (newCart, userId) => (dispatch) => {
  dispatch(upateCartRequest());
  return axios
    .post(
      `${process.env.REACT_APP_BASE_URL}/api/updateCart?id=${userId}`,
      newCart
    )
    .then((res) => {
      dispatch(updateCartSuccess(res.data.cart));
      dispatch(updateLoggedUserCart(res.data.cart));
    })
    .catch((err) => {
      dispatch(updateCartFailure());
    });
};
