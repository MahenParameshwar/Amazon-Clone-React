const Customer = require("../Model/customer");

const customerController = async (req, res) => {
  const { data: _id } = req.id;

  try {
    const customer = await Customer.findOne({ _id });

    if (customer) {
      const { name, cart } = customer;

      res.status(200).json({
        _id,
        name,
        cart,
      });
    } else throw new Error();
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      message: "Could not load data",
      status: "404",
    });
  }
};

module.exports = customerController;
