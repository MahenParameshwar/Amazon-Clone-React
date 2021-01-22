const Customers = require("../Model/customer");
const bcrypt = require("bcrypt");

const registerCustomer = async (req, res) => {
  const { email, password, name } = req.body;
  const emailExists = await Customers.findOne({
    email,
  });

  if (emailExists) {
    res.status(400).json({
      error: true,
      message: "User already exists",
    });
    return;
  }

  //saltRounds - no of times your password will be hashed = 10
  const hashPassword = await bcrypt.hash(password, 10);
  const customer = new Customers({
    name,
    email,
    password: hashPassword,
  });

  customer
    .save()
    .then(() =>
      res.status(200).json({
        message: "Registered Successfully",
      })
    )
    .catch((err) =>
      res.status(400).json({
        message: "Could not Register",
      })
    );
};

module.exports = registerCustomer;
