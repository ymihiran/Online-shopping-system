const mongoose = require("mongoose");
const schema = mongoose.schema;

const cardpayment = new mongoose.Schema({
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

const CardPay = mongoose.model("CardPayment", cardpayment);

module.exports = CardPay;
