const path = require("path")

const express = require("express");
const multer = require('multer')
const { index, store, update, remove, getSingleProduct, updateReview } = require("../controller/product");
const { isAuthenticated, isSeller, isBuyer } = require("../middleware/auth");
const router = express.Router()


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        let type = path.extname(file.originalname)
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + type
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })


router.get("", index)
router.get("/:id", getSingleProduct)
router.post("", isAuthenticated, isSeller, upload.array("images"), store)  // req.body = {}
router.put("/:id", isAuthenticated, isSeller, upload.array("images"), update)  // req.body = {}
router.put("/:id/reviews", isAuthenticated, isBuyer, updateReview)  // domain/api/product_id/reviews
router.delete("/:id", isAuthenticated, isSeller, remove)  // req.body = {}

module.exports = router