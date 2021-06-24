const mongoose = require("mongoose");
const schema = mongoose.schema;

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Customer = mongoose.model("customer", customerSchema);
module.exports = Customer;
