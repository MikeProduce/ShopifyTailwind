require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
const bodyParser = require("body-parser");
const orderRouter = require("./api/orderRouter");
const users = require('./schemas/order')
//Connect to mangoDB
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use("/", orderRouter);

// const getAllEmployees = async (req,res) => {
//     const names = await users.find();
//     if(!names) return res.status(204).json({'message': "no employees found."})
//     return res.json({ names});
// }
//     app.get('/items', getAllEmployees);
// trying to fetch the items from mangodb

mongoose.connection.once("open", () => {
    console.log("connected to MangoDB");
    app.listen(7000, () => {
        console.log("server started on port 7000");
    });
});
