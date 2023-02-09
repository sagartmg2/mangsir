const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const OrderSchema = new Schema({
    products: {
        type: [{
            name: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            },
            price: {
                type: Number,
                required: true,
                min: 0
            }
        }],
        validate: {
            validator: function (value) {
                if (value.length == 0) {
                    return false;
                }
            },
            message: "Atleast one product is required.."
        }

    },
    created_by: {
        type: ObjectId,
        ref: "User",
        required: true,
    }
});

module.exports = mongoose.model("Order", OrderSchema)