

const express = require("express")
const app = express()
const { checkAuthnetication } = require("./middleware/auth")

/* 
    middleware - funciton which has access to req and response

        next -> next function , which points out to our 
*/

let authenticate = (req, res, next) => {
    console.log("authenticating...");
    next()
}

app.get("/products", (req, res, next) => {
    res.send([1, 2, 3])
})



// app.get("/orders", authenticate,checkAuthnetication (req, res, next) => {
app.get("/orders", checkAuthnetication, (req, res, next) => {
    res.send(["list of orders"])
})

app.listen(8000, () => {
    console.log("server stareted..");
})
