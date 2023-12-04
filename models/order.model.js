
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const Item = require("../models/Item.model");

const ordersSchema = new Schema({
    items: [
      {
        title: String,
        price: Number,
        imageUrl: String,
        item: { type: mongoose.Schema.Types.ObjectId, ref: "Item" },
      }
    ]
  });
  

const Order = model("Order", ordersSchema);

module.exports = Order;
