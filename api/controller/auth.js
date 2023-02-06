const bcrypt = require('bcrypt')
const User = require("../model/User");

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
        
        let  ojb = user.toObject()
        delete ojb.password

        res.send({
            data: ojb
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