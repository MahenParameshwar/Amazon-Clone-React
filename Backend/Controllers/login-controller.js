const Customers = require("../Model/customer");
const bcrypt = require("bcrypt");

const handleLogin = async (req, res) => {
  let { email, password } = req.query;
  console.log(email, password);
  const customer = await Customers.findOne({
    email,
  });

  if (!customer) {
    res.status(400).json({
      error: true,
      message: "Email does not exist",
    });
    return;
  }

  const checkPassword = await bcrypt.compare(password, customer.password);

  if (checkPassword) {
    res.status(200).json({
      error: false,
      success: true,
      user: customer,
      message: "Login Success",
    });
    return;
  } else {
    res.status(400).json({
      error: true,
      success: false,
      message: "User does not exist Please register",
    });
    return;
  }
};

module.exports = handleLogin;
