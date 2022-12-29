
let person1 = {
    name: "john",
    age: 12
}

let person2 = {
    name: "ram",
    age: 10
}

let person3 = {
    name: "Hari",
    age: 10
}

/* 
    ram's age is 10
    john's age is 12
*/

// console.log(person1.name + "'s age is " + person1.age)
// console.log(person2.name + "'s age is " + person2.age)
// console.log(person3.name + "'s age is " + person3.age)


/* 

    declare a function
    function <function-name>(){

    }


    call a function 
    <function-name>()

*/

function printPersonDetail(person) {
    // console.log({ person });
    // console.log(person?.name + "'s age is " + person?.age)
    return person?.name + "'s age is " + person?.age
}

// printPersonDetail()
// printPersonDetail(person1)
// let result = printPersonDetail(person2)
// console.log(result);


/* 
    conditions... 
    if( <conditio>){
        // do something 
    }else{
        // do another thing
    }

*/

let will_rain = false
let has_probability = true

/* 
if (will_rain) {
    console.log("take umbrella")
} else if (has_probability) {
    console.log("your choice");
}
else {
    console.log("no need");
}
 */


/* 
if (will_rain) {
    console.log("take umbrella")
}
else {
    if (has_probability) {
        console.log("yuur choise");
    } else {
        console.log("no need");
    }
}
 */


/* 

    TERNARY OPERTOR ?

    CONDITION ? <TRUE-CONDITON'S TASK : fALSE-CONTIDION'S TASK 
*/

// console.log(will_rain ? "yes" : "no need");
// console.log(will_rain ? "yes" : (has_probability ? "your choise" : "no need"));



/* 
    OPERATORS 

    ARTHEMATIC OPERATORS
     + 
     -
     *
     /
     % - MODULOS 

*/

console.log(10 / 3);
console.log(10 % 3);

console.log("is evn ", 3 % 2 == 0);



/* 
    Assignment operator 
    = 
*/

/* 
    comparison operator 
    ==  and ===
    >=
    <=
    >
    <
*/



let num1 = 12
let num2 = 12;

let password = "password";
let confirm_password = "password"

// console.log(num1 == num2)
// console.log(password == confirm_password)
// console.log(password === confirm_password)

// if (password == confirm_password) {
//     console.log("submit form ");
// } else {
//     console.log("password do not match ");
// }


/* 
    strict comparision
*/

// console.log(1 == "1");
// console.log(1 === "1");

/* 
    Logical Operator 
    AND - &&  
        returns true  value if both operands are true( it is not compulsary to have boolean value for operands , it can be any data types) 
    OR -  ||
    NOT - !
*/

// console.log(true && true);
// console.log(false || true);
// console.log(true || true);
console.log(false && true);
console.log("&&", 0 && 2);
console.log("&&", 3 && 2);  //=> 2 which is true 


/* 
    FALSY VALUES
        - false
        - 0 ,-0 
        - NaN
        - null
        - undefined
        - "" // empty string 

*/
console.log(1 * "hello");

// if (<condition>) {
// if (0) {
// if (NaN) {
// if ("") {
// if ([]) {
if ({}) {
    console.log("true value");
} else {
    console.log("false value");
}




















