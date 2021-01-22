const Customers = require("../Model/customer");

const cartController = (req, res) => {
  let _id = req.query.id;
  let cart = [...req.body];

  Customers.findById(_id)
    .then((customer) => {
      customer.cart = cart;

      customer
        .save()
        .then(() => {
          res.status(200).json({
            cart,
            message: "Updated Cart Successfully",
          });
        })
        .catch((err) => {
          res.status(500).json({
            message: "Could not Update Cart",
            error: true,
          });
        });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Could not Update Cart",
        error: true,
      });
    });
};

module.exports = cartController;
