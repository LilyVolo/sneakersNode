const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const itemsSchema = new Schema(
  {
   title: String,
   price: Number, 
   imageUrl: String,

  },

);

const Item = model("Item", itemsSchema);

module.exports = Item;
