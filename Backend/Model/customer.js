const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: Schema.Types.ObjectId,
      ref: "Adress",
    },
    cart: {
      type: Array,
      default: [],
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Customer", customerSchema);
