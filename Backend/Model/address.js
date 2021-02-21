const { version } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new Schema(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
    },
    country: String,
    streetAddress: String,
    city: String,
    state: String,
    zipCode: Number,
    phoneNumber: String,
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Address", addressSchema);
