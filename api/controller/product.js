const Product = require("../model/Product");


const index = async (req, res) => {
    let products = await Product.find();
    res.send({
        data: products
    })
}

const store = async (req, res) => {
    try {

        let product = await Product.create(req.body)

        res.send(
            product
        )
    }
    catch (err) {
        next(err)
    }
}

module.exports = {
    index,
    store
}