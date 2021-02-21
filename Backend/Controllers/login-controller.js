const Customers = require("../Model/customer");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const handleLogin = async (req, res) => {
  try {
    let { email, password } = req.body;

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
      const accessToken = jwt.sign(
        { data: customer._id },
        process.env.SECRET_KEY,
        {
          expiresIn: "360000000s",
        }
      );

      res.status(200).json({
        token: accessToken,
      });
      return;
    } else {
      res.status(400).json({
        error: true,
        success: false,
        message: "Wrong Password enterd",
      });
      return;
    }
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      error: true,
      success: false,
      message: "Somthing went wrong",
    });
  }
};

module.exports = handleLogin;
