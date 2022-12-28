

/* 
    varaible 
*/
/* 
    String text 
    Number
    Boolean
        - true / false
    null
    undefined 

    non-primite  // collectins
        object 
            array


*/

let course_title = "Mern"
let course = course_title
// console.log(course)

let apple = "apple"


let color;
color = "red"
// console.log({ color })

// null  - empty
/*
    User.find(1) => { name : ,meail}
    User.find(1) => null
*/

// [], 0 , ""



/* 
    array 

    let fruits = [oth index element ,1st index element ]
    let fruits = ["apple","bamama"]
    fruits - array 
    apple,bannan - array elements
*/

// let brands = [apple, "samsung", {}, [], 123]
let brands = [apple, "samsung", "lg"]
console.log("length", brands.length)
console.log(brands[brands.length - 1])
console.log("old_value", brands[1])
brands[1] = "samsnung -changed"
brands[3] = "last value"
console.log("new_value", brands[1])
console.log(brands)

let projector = {
    brand: "viewsonic",
    color: "black",
    color: "red",
    Color: "redCC",
    1: "one"
    // key : value
    // attribute/ property : value
}

console.log(projector)
console.log("old-color = ", projector.color)
projector.color = "purple"
console.log("new-color = ", projector.color)
console.log(projector.Color)
console.log(projector.brand)
console.log(projector)
// console.log(projector.1)





