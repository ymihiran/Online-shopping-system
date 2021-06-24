const mongoose = require("mongoose");
const schema = mongoose.schema;

//user table for user registration
const CustomerAccountSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
});

const CustomerAccount = mongoose.model("Customer account", CustomerAccountSchema);

module.exports = CustomerAccount;
