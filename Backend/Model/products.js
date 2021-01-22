const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    company: String,
    title: String,
    description: String,
    photo: String,
    price: Number,
    stockQuantity: Number,
    reviews: Number,
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Products", productSchema);
