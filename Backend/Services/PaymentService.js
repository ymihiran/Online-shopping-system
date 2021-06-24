const express=require('express');
const router=express.Router();

const patments=require('../routes/payment');
router.use("/payment",patments);

module.exports = router;