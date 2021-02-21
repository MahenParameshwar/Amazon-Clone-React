import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { registerReducer } from "./Register/reducer";
import { productsReducer } from "./Product/reducer";
import { loginReducer } from "./Login/reducer";
import { loadingBarReducer } from "react-redux-loading-bar";
import { adminReducer } from "./Admin/reducer";
import { cartReducer } from "./Cart/reducer";
import { customerReducer } from "./Customer/reducer";
import { ordersReducer } from "./Orders.jsx/reducer";

const rootReducer = combineReducers({
  register: registerReducer,
  loadingBar: loadingBarReducer,
  admin: adminReducer,
  products: productsReducer,
  login: loginReducer,
  cart: cartReducer,
  customer: customerReducer,
  orders: ordersReducer,
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  createComposer(applyMiddleware(thunk))
);
