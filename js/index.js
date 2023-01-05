

console.log(1);
console.log(2);


// const sum = (num1, num2) => { return num1 + num2 }
const sum = (num1, num2) => num1 + num2
// const sum = () =>


let array = [1, 2, 3]
for (let index = 0; index < 10; index++) {
    const element = array[index];
    console.log({ element })
}

let result = sum(1, 2)
console.log({ result });

/* 
    asynchronous 
        - events that occur in future.
        - tasks that runs in background and doesnot wait for itself to be executed. 
*/


// setTimeout(() => {
//     console.log("inside timeout")
// }, 1000)

setTimeout(() => {
    console.log("inside timeout with 0 s")
}, 0)

/* 
    promise
        - pending state
        - resolved  
        - rejected 

*/

// try {
//     b = 2
//     c = 3
//     let a = b + c;
//     console.log("inside try block", a)
// } catch (error) {
//     console.log("error", error.message)
// }


let promise1 = new Promise((resolve, reject) => {
    resolve("fulfill")
    // reject("cancealled")
})

promise1
    .then((res) => {
        console.log("promise fulfilled")
        console.log(res);
    })
    .catch((err) => {
        console.log(err)
    })

console.log("1-end");
console.log("2 - end");