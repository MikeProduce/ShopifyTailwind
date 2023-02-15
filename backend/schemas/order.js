const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//here we are declaring a new schema;

const ordersSchema = new Schema({
    name: String,
    address: String,
    date: String,
    items: [String],
});
// here we are defining what the schemas will look like for the orders
const orders = mongoose.model("item", ordersSchema);
module.exports =  orders;
