const express = require("express");
const router = express.Router();
let seller = require("../models/seller");
//get all the Items
router.get("/", async (req, res) => {
  try {
    const Items = await seller.find();
    res.json(Items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//get one Items
router.get("/:id", getItem, (req, res) => {
  res.json(res.item);
});

//get items by Category
router.get("/category/:name", async (req, res) => {
  try {
    const category = req.params.name;
    const items = await seller.find({ Category: category });
    res.json(items);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

// //create an Items
// router.post('/',async (req,res)=>{
//     const  item=new seller({
//        name:req.body.name,
//         price:req.body.price,
//         category:req.body.category,
//         qty:req.body.qty
//     });
//     try{

//         const  newItem=await item.save();
//         res.status(201).json(newItem);

//     }catch(err){
//         res.status(400).json({message:err});
//     }
// })

//update an Items
router.patch("/:id", getItem, async (req, res) => {
  if (req.body.name != null) {
    res.item.name = req.body.name;
  }
  if (req.body.price != null) {
    res.item.price = req.body.price;
  }
  if (req.body.qty != null) {
    res.item.qty = req.body.qty;
  }
  if (req.body.category != null) {
    res.item.category = req.body.category;
  }

  try {
    const updatedItem = await res.item.save();
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//delete an Items
router.delete("/:id", getItem, async (req, res) => {
  try {
    await res.item.remove();
    res.json({ message: "Item Successfully Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getItem(req, res, next) {
  let item;
  try {
    item = await seller.findById(req.params.id);
    if (item == null) {
      return res.status(404).json({ message: "Cannot find the item" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.item = item;
  next();
}

module.exports = router;
