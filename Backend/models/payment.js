const mongoose = require("mongoose");
const schema = mongoose.schema;

const mobilepayment = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobilenumber: {
    type: String,
    required: true,
  },
  pin: {
    type: String,
    required: true,
  },
});

const mobile = mongoose.model("payment", mobilepayment);

module.exports = mobile;
