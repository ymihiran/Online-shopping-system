const express = require("express");
var router = express.Router();
let DeliveredOrders = require("../models/DeliveredOrders");
let path = require("path");
const jwt = require("jsonwebtoken");
const auths = require("../middleware/auths");
const { METHODS } = require("http");
let seller = require("../models/newOrders");
const Cart = require("../models/cart");
// display order in sellers' order page according to the seller ID
router.route("/:data").get(async (req, res) => {
  var sellerID = req.params.data;

  await seller
    .find({ SellerID: sellerID })
    .then((orders) => {
      res.json(orders);
    })
    .catch((err) => {
      console.log(err);
    });
});

//View new order details more
router.route("/view/:id").get(async (req, res) => {
  var id = req.params.id;

  await seller
    .find({ _id: id })
    .then((orders) => {
      res.json(orders);
    })
    .catch((err) => {
      console.log(err);
    });
});

//add customers orders' to the data base
router.route("/add").post(async (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var addresss = req.body.addresss;
  var city = req.body.city;
  var zip = req.body.zip;
  var state = req.body.state;
  var phoneNumber = req.body.phoneNumber;
  var total = req.body.Total;
  var photo = req.body.item.photo;
  var Brand = req.body.item.Brand;
  var Title = req.body.item.Title;
  var Quantity = req.body.item.Quantity;
  var SellerID = req.body.item.SellerID;
  var id = req.body.item._id;
  const OrderData = new seller({
    name,
    email,
    addresss,
    city,
    zip,
    state,
    phoneNumber,
    total,
    photo,
    Brand,
    Title,
    Quantity,
    SellerID,
  });

  OrderData.save()
    .then(() => {
      
      Cart.findByIdAndDelete(id)
        .then(() => {
          res
            .status(200)
            .send({ status: " Purchased product deleted from the cart" });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send({ status: "error in product deleting" });
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

//this codes are usede to complete the orders
router.route("/finish/:id").get((req, res) => {
  let userId = req.params.id;

  seller
    .find({ _id: userId })
    .then((sellers) => {
      var Title = sellers[0].Title;
      var Brand = sellers[0].Brand;
      var Quantity = sellers[0].Quantity;
      const photo = sellers[0].photo;
      var sellerID = sellers[0].SellerID;
      var name = sellers[0].name;
      var email = sellers[0].email;

      const finishOrder = new DeliveredOrders({
        Title,
        Brand,
        Quantity,
        photo,
        sellerID,
        name,
        email,
      });

      //save finish orders into delivered order data base
      finishOrder
        .save()
        .then(() => {
          //Delete order details from new order database
          seller
            .findByIdAndDelete(userId)
            .then(() => {
              res.status(200).send({ status: "Success" });
            })
            .catch((err) => {
              console.log(err);
              res.status(500).send({ status: "error in data delete" });
            });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

//display delivered orders
router.route("/delivered/:data").get(async (req, res) => {
  var sellerID = req.params.data;

  await DeliveredOrders.find({ sellerID: sellerID })
    .then((orders) => {
      res.json(orders);
    })
    .catch((err) => {
      console.log(err);
    });
});

//Remove delivered orders in the table
router.route("/remove/:id").delete(async (req, res) => {
  var id = req.params.id;
  await DeliveredOrders.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({ status: "Delivered orders" });
    })
    .catch((err) => {
      console.log(err);
      res.send({ status: "Deniad" });
    });
});

module.exports = router;
