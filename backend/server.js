require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
const bodyParser = require("body-parser");
const orderRouter = require("./api/orderRouter");
//Connect to mangoDB
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use("/", orderRouter);

mongoose.connection.once("open", () => {
    console.log("connected to MangoDB");
    app.listen(5000, () => {
        console.log("server started on port 5000");
    });
});
