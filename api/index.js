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
    res.status(500).send({
        msg: "Server Error"
    })
})



app.listen(8000, () => {
    console.log("server started.");
})
