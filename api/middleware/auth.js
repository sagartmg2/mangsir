const jwt = require("jsonwebtoken")

const isSeller = (req, res, next) => {

    let sellter = false;

    if (req.user.role == "seller") {
        sellter = true;
    }

    if (sellter) {
        next()
    } else {
        return res.status(403).send({
            msg: "Forbidden - only allowed for sellers"
        })
    }
}

const isAuthenticated = (req, res, next) => {

    try {
        let token = req.headers.authorization.split(" ")[1]
        var decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded) {
            req.user = decoded;
            next()
        }
    }
    catch (err) {
        return res.status(401).send({
            msg: "Invalid Token"
        })
    }


}

module.exports = {
    isSeller,
    isAuthenticated
}