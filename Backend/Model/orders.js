const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
    },
    cart: Array,
    address: String,
    total: Number,
    isPaid: Boolean,
    date: {
      type: String,
      default: new Date().toLocaleString(),
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Orders", orderSchema);
