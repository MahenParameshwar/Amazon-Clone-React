const express = require("express");
const customerController = require("../Controllers/customer-controller");
const authenticateToken = require("../Middleware/authenticateToken");

const routes = express.Router();

routes.get("/auth/customer", authenticateToken, customerController);

module.exports = routes;
