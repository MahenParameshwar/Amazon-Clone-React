const express = require("express");
const cartController = require("../Controllers/cart-controller");

const routes = express.Router();

routes.post("/updateCart", cartController);

module.exports = routes;
