const express = require("express")

const auth_route = require("./route/auth")
const product_route = require("./route/product")

const app = express()
app.use(express.json())
require("./config/database")

app.use("/api", auth_route)
app.use("/api/products", product_route)

/* 
    error - middleware
 */

app.use("", (req, res) => {
    res.status(404).send({
        msg: "resource not found"
    })
})
app.use("", (err, req, res, next) => {
    console.log(err.name)

    if (err.name == "ValidationError") {

        let errors = [];  //{}
        let errors_entries = Object.entries(err.errors)
        console.log(errors);
        errors_entries.forEach(err => {
            let obj = {
                msg: err[1].message,
                param: err[0]
            }
            errors.push(obj)
        })
        res.status(400).send({
            msg: "validation  Error",
            errors: errors,
            test: err.errors,
        })
    } else {
        res.status(500).send({
            msg: "Server Error"
        })

    }
})



app.listen(8000, () => {
    console.log("server started.");
})
