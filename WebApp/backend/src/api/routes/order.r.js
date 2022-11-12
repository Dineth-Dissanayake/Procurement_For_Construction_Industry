import express from "express";

const Order = require("../models/order.m");
const router = express.Router();

//ADD NEW ORDER
router.post('/order/add', (req,res)=>{
    let newOrder = new Order(req.body);

    newOrder.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Order added successfully🆗"
        });
    });
});


//GET ORDERS
router.get('/orders', (req,res) => {
    Order.find().exec((err,Order) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingOrder:Order
        });
    });
});


//DELETE ORDER
router.delete('/order/:id', (req,res) => {
    Order.findByIdAndRemove(req.params.id).exec((err,deletedOrder) => {
        if(err) return res.status(400).json({
            message:"Order Delete Unsuccessful!👎",err
        });
        return res.json({
            message:"Order Delete Successful!🆗",deletedOrder
        });
    });
});


module.exports = router;