const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const drawersSchema = new Schema(
  {
   title: String,
   price: Number, 
   imageUrl: String,
   item: { type: mongoose.Schema.Types.ObjectId,
    ref: "Item" }
  
  },

);

const Drawer = model("Drawer", drawersSchema);

module.exports = Drawer;
