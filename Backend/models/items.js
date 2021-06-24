const mongoose = require("mongoose");

//create table for products
const ItemSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Brand: {
    type: String,
    required: true,
  },
  Condition: {
    type: String,
    required: true,
  },
  Description: {
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
  sellerID: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Item", ItemSchema);
