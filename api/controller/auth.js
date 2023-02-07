const bcrypt = require('bcrypt')
const User = require("../model/User");
var jwt = require('jsonwebtoken');

const signup = async (req, res, next) => {

    // let user = await User.find({ email: "baaadsfsdfdasdfsf@b.com" });

    // console.log(user);
    // return;
    console.log("signup");
    // let exists = await User.findOne({ email: req.body.email })
    // console.log(exists);
    // if (exists) {
    //     res.status(400).send({
    //         "errors": [
    //             {
    //                 "msg": "alreayd ... `.",
    //                 "param": "email"
    //             }
    //         ]
    //     })
    // }


    try {
        let { name, email, password, role } = req.body;


        let hashed = await bcrypt.hash(password, 10);

        let user = await User.create({
            name, email, password: hashed, role
        })

        let ojb = user.toObject()
        delete ojb.password

        res.send({
            data: ojb
        })
    } catch (err) {
        console.log(err.message)
        next(err)
    }
}

const login = async (req, res) => {
    let { email, password } = req.body
    let user = await User.findOne({ email }).select({ password: 1, role: 1, email: 1, name: 1 })

    if (user) {
        let status = await bcrypt.compare(password, user.password);
        console.log({ status });

        if (status) {

            let temp = user.toObject();
            delete temp.password
            var token = jwt.sign(temp, process.env.JWT_SECRET);

            return res.send({
                token,
                user: temp
            })
        }
    }

    res.status(401).send({
        msg: "Invalid Credentiasl"
    });

}

module.exports = {
    signup: signup,
    login
}