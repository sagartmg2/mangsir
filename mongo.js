
/* 


show dbs
use <database_name> // create and swtich 

db.createCollection("<collection_name>") // eg users

*/

db.users.insertOne({
    name: "shyam",
    email: "sh@sh.com"
})

db.users.insertMany([
    {
        name: "Hari"
    },
    {
        name: "john"
    }
])

db.users.insertOne({
    full_name: "JOhn Doe",
    address: {
        street: "putalisakdk"
    },
    phone: 3123123,
    courses: [
        { name: "Mern" },
        { name: "QA" }
    ]
})

db.users.find({ email: "s@s.com" }, { name: 1, _id: 0 })  // {} filter options

db.users.updateOne({ email: "s@s.com" }, { $set: { age: 12 } })
db.users.updateOne({ email: "s@s.com" }, { $unset: { age: 1 } })

db.products.insertMany([
    {
        name:"0ne",
        price:10
    },
    {
        name:"Two",
        rate:10
    }
])

db.products.updateMany({},{$rename:{price:"rate"}})

db.products.deleteOne({})

db.users.insertMany([
    {
        name:"Fifty",
        age:50
    },
    {
        name:"Sixyt",
        age:60
    }
])

