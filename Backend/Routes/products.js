const express = require("express");

const Product = require("../Model/products");

const {
  addProduct,
  getProducts,
  getProductById,
} = require("../Controllers/products-controller");

const paginationResults = require("../Middleware/pagination");

const router = express.Router();

router.post("/products", addProduct);
router.get("/products", paginationResults(Product), getProducts);
router.get("/products/:_id", getProductById);

module.exports = router;
