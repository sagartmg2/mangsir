/* 
    module
        - core 
             - fs
             - path
             - http (express is based on this module)
        - local
        - third party (eg axios, bcrypt)

*/

const bcrypt = require('bcrypt');

// bcrypt.hash("1234567",10, function(err, hash) {
//     // Store hash in your password DB.
//     console.log(hash)
// });


const fs = require("fs")

async function createFile() {
    console.log("11")

    // [1,2,3].map(() =>{})

    // await fs.writeFile("custom.txt", "value change")
    //     .then(res => {
    //         console.log({ res })
    //     })

    // let product = await Product.insertOne({},() =>{})

    await fs.writeFile("custom.txt", "value change", (error, data) => {
        // console.log(error)
        console.log(data)
    })

    console.log("22")
    return "true"

}



// createFile();
console.log("reuslt")

const http = require("http")
// const signup = require("./auth") //d efault import 
// const login = require("./auth")  // default import

// named import with object destructuring. 
const { login, signup } = require("./auth")

http.createServer((req, res) => {
    console.log(req.url)
    console.log(req.method)

    if (req.url === "/products" && res.method == "GET")  {
        signup()
    }
    if (req.url === "/products" && res.method == "POST")  {
        signup()
    }
    if (req.url === "/api/login") {
        login()
    }
    res.write("api/server response")
    res.end();

}).listen(8000)



// fs.appendFile("custom.txt", "value change")
// fs.unlinkSync("custom.txt")

// fs.writeFile



