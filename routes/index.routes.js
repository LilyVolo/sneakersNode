// const { isAuthenticated } = require("../middleware/jwt.middleware"); 
const express = require("express");
 

const router = express.Router();

// const authRoutes = require("./auth.routes");
// router.use("/auth", authRoutes);

router.use("/items", require("./items.routes"))
router.use("/drawer", require("./drawer.routes"))
router.use("/favourites", require("./favourites.routes"))
// router.use("/plans",isAuthenticated, require("./plans.routes"))
module.exports = router;