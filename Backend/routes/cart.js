const express = require("express");
const router = express.Router();
const Cart = require("../models/cart");
const auths = require("../middleware/auths");
router.get("/", async (req, res) => {
  try {
    const items = await Cart.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", getCartItem, (req, res) => {
  const item = res.CartItem;
  res.json(item);
});

router.patch("/:id", getCartItem, async (req, res) => {
  if (req.body.Title != null) {
    res.CartItem.Title = req.body.Title;
  }
  if (req.body.Price != null) {
    res.CartItem.Price = req.body.Price;
  }
  if (req.body.qty != null) {
    res.CartItem.Quantity = req.body.qty;
  }

  try {
    const updatedCartItem = await res.CartItem.save();
    res.json(updatedCartItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const item = new Cart({
    _id: req.body._id,
    Title: req.body.Title,
    Brand: req.body.Brand,
    Quantity: req.body.qty,
    Price: req.body.Price,
    photo: req.body.photo,
    SellerID: req.body.SellerID,
  });

  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", getCartItem, async (req, res) => {
  try {
    await res.CartItem.remove();
    res.json({ message: "Item Successfully Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getCartItem(req, res, next) {
  let CartItem;
  try {
    CartItem = await Cart.findById(req.params.id);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.CartItem = CartItem;
  next();
}

module.exports = router;
