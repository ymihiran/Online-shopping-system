const express = require("express");
var router = express.Router();
let payment = require("../models/payment");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
let path = require("path");
const jwt = require("jsonwebtoken");
const auths = require("../middleware/auths");

router.route("/add").post((req, res) => {
  var name = req.body.name;
  var mobilenumber = req.body.number;
  var pin = req.body.pin;

  const payments = new payment({
    name,
    mobilenumber,
    pin,
  });

  payments
    .save()
    .then(() => {
      res.status(200).send({ status: "payment success" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "payment Error" });
    });
});

module.exports = router;
