const express = require("express");
var router = express.Router();
let seller = require("../models/seller");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
let path = require("path");
const jwt = require("jsonwebtoken");
const auths = require("../middleware/auths");

//Save inserted photo in the folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //save location
    cb(null, "../frontend/public/products-images");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

//filter photo type
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

//add new products details to the system with photo
router.route("/add").post(upload.single("photo"), (req, res) => {
  var Title = req.body.Title;
  var Brand = req.body.Brand;
  var Category = req.body.Category;
  var Condition = req.body.Condition;
  var Description = req.body.Description;
  var Quantity = req.body.Quantity;
  var Price = req.body.Price;
  const photo = req.file.filename;
  var sellerID = req.body.sellerID;

  const sellerData = new seller({
    Title,
    Brand,
    Category,
    Condition,
    Description,
    Quantity,
    Price,
    photo,
    sellerID,
  });

  sellerData
    .save()
    .then(() => {
      res.json("create new listing");
    })
    .catch((err) => {
      console.log("creating error");
      console.log(err);
    });
});

//display created listings on seller dashboard
router.route("/display/:data").get(async (req, res) => {
  var sellerID = req.params.data;

  await seller
    .find({ sellerID: sellerID })
    .then((sellers) => {
      res.json(sellers);
    })
    .catch((err) => {
      console.log(err);
    });
});

//to update the products details
router.route("/update/:id").put((req, res) => {
  let userId = req.params.id;
  var Brand = req.body.Brand;
  var Title = req.body.Title;
  var Condition = req.body.Condition;
  var Description = req.body.Description;
  var Quantity = req.body.Quantity;
  var Price = req.body.Price;

  const sellerData = {
    Title,
    Brand,
    Condition,
    Description,
    Quantity,
    Price,
  };

  //in here update the product details data
  const update = seller
    .findByIdAndUpdate(userId, sellerData)
    .then(() => {
      res.status(200).send({ status: "listings updated", user: update });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Update Error" });
    });
});

//to delete product details
router.route("/delete/:id").delete((req, res) => {
  let userId = req.params.id;
  seller
    .findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "product deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "error in product deleting" });
    });
});

//display items according to the item ids
router.route("/get/:id").get((req, res) => {
  let userid = req.params.id;
  seller.findById(userid, (err, post) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      post,
    });
  });
});

module.exports = router;
