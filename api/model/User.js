const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "required"],
    },
    email: {
        type: String,
        required: true,
        // unique:true,
        validate: {
            validator: async function () {
                let exists = await mongoose.model("User").findOne({ email: this.email })

                if (exists) {
                    return false
                }
            },
            message: "email already"
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        get: function () {
            return "**"
        },
        select: false
    },
    role: {
        type: String,
        required: true,
        enum: ["buyer", "seller"]
    },
});

module.exports = mongoose.model("User", UserSchema)