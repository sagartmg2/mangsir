const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        default: 0,
    },
    images: {
        type: [String]
    },
    // comments: {
    //     type: [{
    //         email: {
    //             type: String,
    //             required: true,
    //         },
    //         rating: {
    //             type: Number,
    //             min: 1,
    //             max: 5,
    //             default: 1
    //         },
    //         comment: String
    //     }]
    // },
    brands: [String],
    categories: [String],
    reviews: [
        {
            created_by: {
                type: ObjectId,
                ref: "User",
                required: true
            },
            rating: {
                type: Number,
                min: 1,
                max: 5,
                default: 1
            },
            comment: String
        }
    ]
});

module.exports = mongoose.model("Product", ProductSchema)