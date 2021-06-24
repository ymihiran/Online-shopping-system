const mongoose = require("mongoose");

//create cart data base table
const CartSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  Brand: {
    type: String,
    required: true,
  },

  Quantity: {
    type: String,
    required: true,
  },
  Price: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  SellerID: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Cart", CartSchema);
