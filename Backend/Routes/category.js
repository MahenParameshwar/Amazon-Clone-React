const express = require("express");
const {
  addCategory,
  getCategories,
} = require("../Controllers/category-controller");
const router = express.Router();

router.post("/category", addCategory);
router.get("/category", getCategories);

module.exports = router;
