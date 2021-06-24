const mongoose = require("mongoose");
const schema = mongoose.schema;

// create Complete order data base table
const DeliverdOrdersSchema = new mongoose.Schema({
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

  photo: {
    type: String,
    required: true,
  },
  sellerID: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
const DeliverdOrders = mongoose.model("DeliverdOrders", DeliverdOrdersSchema);

module.exports = DeliverdOrders;
