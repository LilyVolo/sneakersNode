const Item = require("../models/Item.model");
const mangoose = require('mongoose');
const router = require("express").Router()

router.get("/", async (req, res, next) => {
    try {
		const allitems = await Item.find()
		res.json(allitems)
        console.log(allitems)
	} catch (error) {
		console.log(error)
	}
});
module.exports = router;