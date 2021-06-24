const express=require('express');
const router=express.Router();

const StudentRoutes=require('../routes/seller');
router.use('/seller',StudentRoutes);

const orders=require('../routes/orders');
router.use("/orders",orders);

const CartRouter=require('../routes/cart');
router.use('/cart',CartRouter);

const auth=require('../routes/auth');
router.use("/auth",auth);

const userAuth=require('../routes/userAuth');
router.use("/userauth",userAuth);

const ItemRouter=require('../routes/items');
router.use('/items',ItemRouter);

module.exports = router;