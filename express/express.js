const express = require("express") // import  in common js

// import axios from "axios" // es6 system
// import react from "react"

const app = express()

app.get("/products", (req, res) => {

    // let products = // fetch from database
    res.send([{ name: "product-1" }, {}])
})

app.listen(8000, () => {
    console.log("server started");
})