const mongoose = require("mongoose");
const schema = mongoose.schema;

//create tables for orders
const newOrdersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  addresss: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  total: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  Brand: {
    type: String,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  Quantity: {
    type: String,
    required: true,
  },
  SellerID: {
    type: String,
    required: true,
  },
});

const newOrders = mongoose.model("newOrders", newOrdersSchema);

module.exports = newOrders;
