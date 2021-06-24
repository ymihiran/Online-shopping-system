const mongoose = require("mongoose");
const schema = mongoose.schema;

//create table for newly created listings (advertisments)
const sellerSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Brand: {
    type: String,
    required: true,
  },
  Category: {
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

const Seller = mongoose.model("Item", sellerSchema);

module.exports = Seller;
