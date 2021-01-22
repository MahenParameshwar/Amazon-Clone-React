const express = require("express");

const sendEmail = require("../Middleware/sendEmail");

const router = express.Router();

router.post("/sendEmail", sendEmail, (req, res) => {
  res.status(200).json({
    success: true,
    message: "email sent successfully",
  });
});

module.exports = router;
