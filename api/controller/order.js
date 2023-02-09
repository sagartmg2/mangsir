const Order = require("../model/Order");
const Product = require("../model/Product");


/* fetch orders */

const index = async (req, res, next) => {
    let orders = await Order.find({ created_by: req.user._id })
    res.send({
        data: orders
    })
}


/* store orders */

const store = async (req, res, next) => {

    /* 
    products":[
        {
            "_id": "63e21dbeb194af0ce708f683",
            "quantity": 1
        }
    ]
     */

    // let temp = req.proudct.map(product =>{
    //     return{
    //         name: await pr
    //         "_id": "63e21dbeb194af0ce708f683",
    //         "quantity": 1
    //     }
    // })

    let temp = [];

    let products = req.body.products;
    for (let i = 0; i < products.length; i++) {
        let product = await Product.findById(products[i]._id);
        temp.push({
            name: product.name,
            price: product.price,
            quantity: products[i].quantity
        })
    }

    try {
        let order = await Order.create({
            products: temp,
            created_by: req.user._id
        })

        res.send(order)
    }
    catch (err) {
        next(err)
    }

}


module.exports = {
    index,
    store,
}