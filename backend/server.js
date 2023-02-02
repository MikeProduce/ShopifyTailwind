require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");

//Connect to mangoDB
connectDB();

app.use(cors());

app.get("/api", (req, res) => {
    res.json({ users: ["userOne", "userTwo", "userThree"] });
});

mongoose.connection.once("open", () => {
    console.log("connected to MangoDB");
    app.listen(5000, () => {
        console.log("server started on port 5000");
    });
});
