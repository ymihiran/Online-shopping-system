const express=require('express');
const router=express.Router();

const DeliveryService=require('../Services/DeliveryService');
router.use('/DeliveryService',DeliveryService);

// const PaymentService=require('./Services/PaymentService');
// router.use('/PaymentService',PaymentService);

const ShopService=require('../Services/ShopService');
router.use('/ShopService',ShopService);

const PaymentServices=require('../Services/PaymentService');
router.use('/PaymentService',PaymentServices);

module.exports = router;