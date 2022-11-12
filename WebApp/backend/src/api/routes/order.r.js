const express = require("express");
const OrderRoutes = express.Router();
const { createOrder,
        getAllOrders,
        getSingleOrder,
        updateOrder,
        deleteOrder } = require('../controller/order.c');

OrderRoutes.post('/order/add', createOrder);
OrderRoutes.get('/orders', getAllOrders);
OrderRoutes.get('/orders/:id', getSingleOrder);
OrderRoutes.put('/order/update/:id', updateOrder);
OrderRoutes.delete('/delete/:id', deleteOrder);

module.exports = OrderRoutes;