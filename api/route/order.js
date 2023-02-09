
const express = require("express");
const { store, index } = require("../controller/order");
const { isAuthenticated, isSeller, isBuyer } = require("../middleware/auth");
const router = express.Router()

router.get("", isAuthenticated, isBuyer, index)
// router.get("/:id", getSingleProduct)
router.post("", isAuthenticated, isBuyer, store)

module.exports = router