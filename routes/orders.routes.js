const Order = require("../models/order.model")
const mangoose = require('mongoose');
const router = require("express").Router()
const Item = require("../models/Item.model");

router.get("/", async (req, res, next) => {
 try {
  const allitems = await Order.find()

	res.json(allitems)
      console.log(allitems)
	} catch (error) {
 		console.log(error)
	}
 });

router.post("/addTheOrder",  (req, res, next) => {
    const {
        
        items
    } = req.body;
    const itemToCreate = {
        
        items
    };
    console.log(req.body, res)
    console.log('test')
    Order.create(itemToCreate)
      .then((createditem) => {
        console.log('createditem',createditem);
        res.status(200).json(createditem);
      })
      .catch((error) => {
        next(error)
      });
  });


  module.exports = router;