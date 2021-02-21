const router = require("express").Router();
const {
  orderGetController,
  orderPostController,
} = require("../Controllers/order-controller");
const authenticateToken = require("../Middleware/authenticateToken");

router.post("/auth/orders", authenticateToken, orderPostController);
router.get("/auth/orders", authenticateToken, orderGetController);

module.exports = router;
