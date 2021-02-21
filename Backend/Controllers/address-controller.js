const Address = require("../Model/address");
const Customer = require("../Model/customer");

const addressPostController = async (req, res) => {
  const { data: _id } = req.id;
  const {
    country,
    state,
    city,
    streetAddress,
    zipCode,
    phoneNumber,
  } = req.body;

  try {
    const customer = await Customer.findOne({ _id });
    let address = new Address();
    address.customer = customer._id;
    address.country = country;
    address.state = state;
    address.city = city;
    address.streetAddress = streetAddress;
    address.phoneNumber = phoneNumber;
    address.zipCode = zipCode;

    await address.save();
    res.status(200).json({
      success: true,
      message: "Successfully saved the adresss",
    });
  } catch (err) {
    res.status(404).json({
      error: true,
      message: "Could not save address",
    });
  }
};

const addressGetController = async (req, res) => {
  const { data: _id } = req.id;

  try {
    const addresses = await Address.find({ customer: _id });

    res.status(200).json({
      success: true,
      addresses,
    });
  } catch (err) {
    res.status(404).json({
      error: true,
      message: "Could not get address",
    });
  }
};

module.exports = { addressPostController, addressGetController };
