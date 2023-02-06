const express = require("express");
const { signup, login } = require("../controller/auth")

const router = express.Router();

const { body, validationResult } = require('express-validator');

router.post("/signup-v",
    body('email').isEmail(),
    body('name').exists().withMessage("required"),
    body('role').exists(),
    body('password').isLength({ min: 5 }),
    (req, res, next) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        } else {
            next()
        }
    }, signup)
router.post("/signup", signup)
router.post("/login", login)

module.exports = router