const express = require("express");
const app = express();
const router = express.Router();
const orders = require("../schemas/order");

router.post("/", async (req, res) => {
  const user = req.body.ID;
  console.log(user);
  
  try {
    const order = await orders.findOne({_id: user});
    res.send(order);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.use("/orders", router);

module.exports = app;




