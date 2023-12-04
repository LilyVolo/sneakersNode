const Drawer = require("../models/Drawer.model");
const mangoose = require('mongoose');
const router = require("express").Router()

router.get("/", async (req, res, next) => {
    try {
		const allitems = await Drawer.find()
		res.json(allitems)
        console.log('getALL',allitems)
	} catch (error) {
		console.log(error)
	}
});

router.post("/addToDrawer",  (req, res, next) => {
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
        item,
    };
    Drawer.create(itemToCreate)
      .then((createditem) => {
        console.log('created', createditem);
        res.status(200).json(createditem);
      })
      .catch((error) => {
        next(error)
      });
  });


  router.delete('/', async (req, res, next) => {
    const { item } = req.body; // Используйте поле item
    console.log('delete path = ', item)
    try {
      const deletedItem = await Drawer.findOneAndDelete({ item: item }); // Используйте поле item для поиска
      if (deletedItem) {
        console.log("Item successfully deleted");
        res.status(204).json();
      } else {
        res.status(404).json({ error: "Item not found" });
      }
    } catch (error) {
      console.error("Error while deleting item", error);
      res.status(500).json({ error: "Deleting item failed" });
    }
});

  // router.delete('/:idItem', async (req, res, next) => {
  //   console.log('the other one')
  //   const idItem = req.params.idItem;
  //   console.log(idItem)
  //   if (!idItem) {
  //     return res.status(400).json({ error: "Missing notesId parameter" });
  //   }

  //   try {
  //     await Drawer.findByIdAndDelete(idItem)
  //     .then((resp) => {
  //       console.log("Item successfully deleted");
  //       res.status(204).json(); //Send back only status code 204 indicating that resource is deleted
  //     })
  //     .catch((error) => {
  //       console.error("Error while deleting item", error);
  //       res.status(500).json({ error: "Deleting nitem failed" });
  //     });
  //   } catch {
  //     next(error)
  //   }
    
  // });

module.exports = router;