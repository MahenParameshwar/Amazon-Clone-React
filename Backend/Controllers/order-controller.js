const Orders = require("../Model/orders");
const Customer = require("../Model/customer");

const orderPostController = async (req, res) => {
  const { data: _id } = req.id;
  const { cart, address, total, isPaid } = req.body;

  try {
    const customer = await Customer.findOne({ _id });
    let order = new Orders();
    order.customer = customer._id;
    order.cart = cart;
    order.address = address;
    order.total = total;
    order.isPaid = isPaid;

    const newOrder = await order.save();
    res.status(200).json({
      success: true,
      order: newOrder,
      message: "Successfully placed order",
    });
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      error: true,
      message: "Could not place order",
    });
  }
};

const orderGetController = async (req, res) => {
  const { data: _id } = req.id;

  try {
    const orders = await Orders.find({ customer: _id });

    res.status(200).json({
      success: true,
      orders,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      error: true,
      message: "Could not get orders",
    });
  }
};

module.exports = { orderPostController, orderGetController };
