const mongoose = require("mongoose");
const schema = mongoose.schema;

//user table for seller registration
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("seller account", userSchema);
module.exports = User;
