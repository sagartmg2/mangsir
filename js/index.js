

/* 
    primitive data types
     - String
     - Number
     - Boolean / true false
     - undefined // value has not been initialized
     - null

     non primitive data types // collection
        array  //  most of the time, collection of similiar data types
        object
*/

let num1 = 1
let num2 = 2
console.log(num1);

/*  

*/

// let fruits = ["apple", "banana", null, undefined, 1, []]
// let fruits = [ 0th index ,1st index ,]
let fruits = ["apple", "banana"]

fruits[1] = "orange"
// console.log(fruits[1])
console.log(fruits)

let institution = {
    // key.attribute,property: value,
    name: "Mind risers",
    estd: 2019,
    1: "one",
    email:"tech..adf"
}

institution.estd = 2018

console.log(institution);
console.log(institution.name);
/* 
    <form>
        <input name="email" value= ""
    </form>

*/
let field_name = "email"
// console.log(institution.1);
console.log(institution["1"]);
console.log("email",institution.email);
console.log("email",institution[field_name]);





