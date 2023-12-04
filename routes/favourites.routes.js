const Fav = require("../models/favourite.model")
const mangoose = require('mongoose');
const router = require("express").Router()
const Item = require("../models/Item.model");

router.get("/", async (req, res, next) => {
    try {
      const allitems = await Fav.find()

		res.json(allitems)
        console.log(allitems)
	} catch (error) {
		console.log(error)
	}
});

router.post("/addToFav",  (req, res, next) => {
    const {
        title,
        price, 
        imageUrl,
        item
    } = req.body;
    const itemToCreate = {
        title,
        price, 
        imageUrl,
        item
    };
    console.log(req.body, res)
    Fav.create(itemToCreate)
      .then((createditem) => {
        console.log('createditem',createditem);
        res.status(200).json(createditem);
      })
      .catch((error) => {
        next(error)
      });
  });

  router.delete('/:idItem', async (req, res, next) => {
    
    const idItem = req.params.idItem;
    if (!idItem) {
      return res.status(400).json({ error: "Missing notesId parameter" });
    }

    try {
      await Fav.findByIdAndDelete(idItem)
      .then((resp) => {
        console.log("Item successfully deleted");
        res.status(204).json(); //Send back only status code 204 indicating that resource is deleted
      })
      .catch((error) => {
        console.error("Error while deleting item", error);
        res.status(500).json({ error: "Deleting nitem failed" });
      });
    } catch {
      next(error)
    }
    
  });
  module.exports = router;