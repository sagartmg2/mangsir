const jwt = require("jsonwebtoken")

const isSeller = (req, res, next) => {
    let sellter = true;
    if (sellter) {
        next()
    } else {
        res.status(403).send({
            msg: "Forbidden"
        })
    }
}

const isAuthenticated = (req, res, next) => {
    let token = req.headers.authorization.split(" ")[1]

    var decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.user = decoded
}

module.exports = {
    isSeller,
    isAuthenticated
}