const Product = require("../model/Product");


const index = async (req, res) => {
    let products = await Product.find();
    res.send({
        data: products
    })
}

const store = async (req, res, next) => {
    // // console.log(req.body)
    // console.log(req.files)
    // return;

    try {

        let uploaded_images = req.files.map(el => el.filename);
        let product = await Product.create({ ...req.body, images: uploaded_images })

        res.send(
            product
        )
    }
    catch (err) {
        next(err)
    }
}

const update = async (req, res, next) => {

    try {
        // let uploaded_images = req.files.map(el => el.filename);
        let product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })

        res.send(
            product
        )
    }
    catch (err) {
        next(err)
    }
}
const remove = async (req, res, next) => {
    // 
    try {
        let product = await Product.findByIdAndDelete(req.params.id)

        res.send(
            product
        )
    }
    catch (err) {
        next(err)
    }
}
const updateReview = async (req, res, next) => {

    try {
        // let uploaded_images = req.files.map(el => el.filename);

        let exists = await Product.findOne({ _id: req.params.id, "reviews.created_by": req.user._id })

        let product;
        if (!exists) {

            product = await Product.findByIdAndUpdate(req.params.id, {
                $push: {
                    "reviews": {
                        rating: req.body.rating,
                        comment: req.body.comment,
                        created_by: req.user._id
                    }
                }
            }, {
                new: true,
                runValidators: true
            })

        } else {
            product = await Product.findOneAndUpdate({ _id: req.params.id, "reviews.created_by": req.user._id }, {
                "reviews.$.rating": req.body.rating,
                "reviews.$.comment": req.body.comment,  //  ".$." => positional operator
            }, {
                new: true,
                runValidators: true
            })
        }

        res.send(
            product
        )
    }
    catch (err) {
        next(err)
    }
}
const getSingleProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id)
    res.send(product)
}

module.exports = {
    index,
    store,
    update,
    updateReview,
    remove,
    getSingleProduct
}