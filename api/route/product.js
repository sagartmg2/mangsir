const express = require("express");
const { index, store } = require("../controller/product");
const { isAuthenticated, isSeller } = require("../middleware/auth");
const router = express.Router()

router.get("", index)
router.post("", isAuthenticated, isSeller, store)

module.exports = router