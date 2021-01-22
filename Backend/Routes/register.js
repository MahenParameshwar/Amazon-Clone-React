const express = require("express");
const Joi = require("joi");

const registerCustomer = require("../Controllers/register-controller");

const validateUser = require("../Middleware/validateUser");

const router = express.Router();

const schema = Joi.object({
  name: Joi.string().min(3).max(30).required(),

  password: Joi.string()
    .min(6)
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required(),

  email: Joi.string().email(),
});

module.exports = schema;

router.post("/register", validateUser(schema), registerCustomer);

module.exports = router;
