const Products = require("../Model/products");

const addProduct = (req, res) => {
  const product = new Products({
    ...req.body,
  });

  product
    .save()
    .then(() => {
      res.status(200).json({
        success: true,
        message: "Successfully added Product",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        message: err.message,
      });
    });
};

const getProducts = (req, res) => {
  res.status(200).json(res.pagination);
};

const getProductById = (req, res) => {
  Products.findOne({ _id: req.params._id })
    .then((product) => {
      res.status(200).json({
        success: true,
        product: product,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    });
};

module.exports = { addProduct, getProductById, getProducts };
