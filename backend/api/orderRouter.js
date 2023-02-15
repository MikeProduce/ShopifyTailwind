const express = require("express");
const router = express.Router();
const orders = require("../schemas/order");

router.get('/orders', async (request, response) => {
    const order = await orders.find({_id: 
        '63ddd47e851cee6506092988' });

    try{
        response.send(order);
    } catch (error) {
        response.status(500).send(error);
    }
})

module.exports = router;

