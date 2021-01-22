const Category = require("../Model/categories");

const addCategory = (req, res) => {
  const category = new Category({
    ...req.body,
  });

  category
    .save()
    .then(() => {
      Category.find().then((categories) => {
        res.status(200).json({
          success: true,
          error: false,
          categories: categories,
          message: "Successfully added category",
        });
      });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({
        success: false,
        error: true,
        message: err.message,
      });
    });
};

const getCategories = (req, res) => {
  const category = new Category({
    ...req.body,
  });

  Category.find()
    .then((categories) => {
      res.status(200).json({
        success: true,
        categories: categories,
        message: "Successfully got the categories",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        success: false,
        message: err.message,
      });
    });
};

module.exports = { addCategory, getCategories };
