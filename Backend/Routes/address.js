const router = require("express").Router();
const {
  addressPostController,
  addressGetController,
} = require("../Controllers/address-controller");
const authenticateToken = require("../Middleware/authenticateToken");

router.post("/auth/address", authenticateToken, addressPostController);
router.get("/auth/address", authenticateToken, addressGetController);

module.exports = router;
