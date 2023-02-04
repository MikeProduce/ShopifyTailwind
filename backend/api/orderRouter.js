// creating a new API endpoint
const express = require("express");
const router = express.Router();
const Item = require("../schemas/order");

// defining a new endpoint for the API with a POST request
router.post("/orders", (req, res) => {
    // destructuring the request body to extract the values for name,address,date,items
    const { name, address, date, items } = req.body;

    console.log(
        `Name: ${name}, Address:${address} Date:${date}, Items:${items}`
    );
    //creating a new Item object with the extracted values
    const item = new Item({
        name,
        address,
        date,
        items,
    });
    // saving the item object to the database
    item.save()
        // if it is successful, send a success message to the clientf
        .then((item) => {
            res.send("data was succesfully sent to the database");
        })
        .catch((err) => {
            // if there is an error, log it to the console and send a failure
            console.error(err);
            res.status(500).send("failed to save data");
        });
});

module.exports = router;
