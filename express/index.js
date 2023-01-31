// import express from "express" // es6 module
const express = require("express") // common js module 
var cors = require('cors')

const app = express()
app.use(express.json()) //middleware to read request data // req.body = setup from our request
app.use(cors()) // access our resources from different domain -> used as third-party middleware

/* 
    GET,POST,PUT,DELETE
*/

/* 
    middleware
        -> function which has access to request and response and next middleware

            - global
            - local
            - third party middlewre
        
        next function 
            -> next valid middleware in line 
        
        
*/

const authenticate = (req, res, next) => {
    let logged = true;
    console.log("inside - authenticateion");
    // res.send("not authenticated..")
    if (!logged) {
        return res.status(401).send({ msg: "Not logged in" })
    }
    next()
}

const getUserDetail = (req, res, next) => {
    console.log("get-u8ser-detail");
    let data = { name: "ram", email: "em@em.com" } // suppose from api
    req.user = data;
    next()

}

// app.use(authenticate) // auth middleware as global middleware.
// app.use(getUserDetail) // auth middleware as global middleware.


app.get("/products", (req, res) => {
    res.send("list of producaaats -> []")
})

app.post("/products", (req, res) => {
    console.log("req.body", req.body);
    res.send("create products []")
})

app.get("/orders", authenticate, getUserDetail, (req, res) => { // authenticate as local middlware
    console.log("orders");
    console.log(req.user);
    res.send("list of orders")
})

app.listen(8000, () => {
    console.log("server started..");
})