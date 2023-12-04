
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const Item = require("../models/Item.model");

const favouritesSchema = new Schema(
  {
   title: String,
   price: Number, 
   imageUrl: String,
   item: { type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
    // default: "65477fe5e9ca8d9acb070c94"
},
 
  },

);

const Fav = model("Fav", favouritesSchema);

module.exports = Fav;

