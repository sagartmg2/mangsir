
const User = require("../model/User");

const signup = async (req, res, next) => {
    try {
        let { name, email, password, role } = req.body;
        let user = await User.create({
            name, email, password, role
        })
        res.send({
            data: user
        })
    } catch (err) {
        console.log(err.message)
        next(err)
    }
}

const login = (req, res) => {
}

module.exports = {
    signup: signup,
    login
}