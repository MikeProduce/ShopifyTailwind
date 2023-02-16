const express = require("express");
const app = express();
const router = express.Router();
const orders = require("../schemas/order");
// finding id's of those who have ordered
router.post("/", async (req, res) => {
  const orderID = req.body.ID;
  console.log(orderID);
  
  try {
    const order = await orders.findOne({_id: orderID});
    res.send(order);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
  //simple try catch to look within the orders schema and find the ID of whatever was 
  //looked up by the user. .findOne method helps find that 
});

app.use("/orders", router);

module.exports = app;




