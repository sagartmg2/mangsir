const express = require("express");
const router = express.Router()

router.get("", (req, res) => {
    res.send("products...")
})
router.post("", (req, res) => {
    res.send(" create..products...")
})

module.exports = router