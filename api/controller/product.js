const Product = require("../model/Product");


const index = async (req, res) => {

    /* db.products.find({name:"B22"}) */

    let search_term = RegExp((req.query.search_term || ""), "i")
    let price_from = req.query.price_from ? parseFloat(req.query.price_from) : 0;
    let price_to = req.query.price_to ? parseFloat(req.query.price_to) : 9999999999999;

    let per_page = req.query.per_page ? parseInt(req.query.per_page) : 25
    let page = req.query.page ? parseInt(req.query.page) : 1

    // let products = await Product.find({ $or: [{ name: search_term }, { brands: search_term }], $and: [{ price: { $gte: price_from } }, { price: { $lte: price_to } }] });
    /* 
        aggregation -> advance find method
     */

    /* 
        $lookup ->  alternative to join method in SQL
    */

    let total_products = await Product.find({
        $or: [{ name: search_term }, { brands: search_term }],
        $and: [{ price: { $gte: price_from } }, { price: { $lte: price_to } }]
    }).count()

    let products = await Product.aggregate([
        {
            $match: {
                $or: [{ name: search_term }, { brands: search_term }]

            }
        },
        {
            $match: {
                $and: [{ price: { $gte: price_from } }, { price: { $lte: price_to } }]
            }
        },
        {
            $lookup: {
                from: "users",
                localField: "created_by",
                foreignField: "_id",
                as: "created_by"
            }
        },
        {
            $unwind: "$created_by"
        },
        {
            $project: { "created_by.password": 0, "created_by.role": 0 }
        },
        {
            $skip: (page - 1) * per_page,
        },
        {
            $limit: per_page
        },
    ])
    res.send({
        data: products,
        meta: {
            total_products,
            page,
            per_page
        }
    })
}

const store = async (req, res, next) => {
    // // console.log(req.body)
    // console.log(req.files)
    // return;

    try {

        let uploaded_images = req.files.map(el => el.filename);
        let product = await Product.create({ ...req.body, images: uploaded_images, created_by: req.user._id })

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