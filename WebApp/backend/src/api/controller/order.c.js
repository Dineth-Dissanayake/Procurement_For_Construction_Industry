const OrderModel = require('../models/order.m');


const createOrder = async(req, res, next) => {
  try{
    const {
        proName,
        proID,
        supName,
        qty,
        price,
        total,
        date,
        status
    } = req.body;

    const newOrder = new OrderModel({
        proName,
        proID,
        supName,
        qty,
        price,
        total,
        date,
        status
    });

    await newOrder.save();

    res.status(201).json({
      message: "Order Created Successfully",
      project: newOrder
    });
  }catch(err){
    return res.status(500).json({ message: 'server error', error: err });
  };
}

const getAllOrders = async(req, res, next) => {
  try{
    const allOrders = await OrderModel.find();
    res.status(200).json({
      message: "All Orders",
      projects: allOrders
    });
  }catch(err){
    return res.status(500).json({ message: 'server error', error: err });
  };
}

const getSingleOrder = async(req, res, next) => {
  try{
    const singleOrder = await OrderModel.findById(req.params.id);
    res.status(200).json({
      message: "Single Order",
      project: singleOrder
    });
  }catch(err){
    return res.status(500).json({ message: 'server error', error: err });
  };
}

const updateOrder = async(req, res, next) => {
  try{
    const {
        proName,
        proID,
        supName,
        qty,
        price,
        total,
        date,
        status
    } = req.body;

    const updateOrder = await OrderModel.findByIdAndUpdate(req.params.id, {
        proName,
        proID,
        supName,
        qty,
        price,
        total,
        date,
        status
    },{new: true});
    res.status(200).json({
      message: "Order Updated Successfully",
      project: updateOrder
    });
  }catch(err){
    return res.status(500).json({ message: 'server error', error: err });
  };
}

const deleteOrder = async(req, res, next) => {
  try{
    const deleteOrder = await OrderModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Order Deleted Successfully",
      project: deleteOrder
    });
  }catch(err){
    return res.status(500).json({ message: 'server error', error: err });
  };
}

module.exports = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  updateOrder,
  deleteOrder
}