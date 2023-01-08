
function login(email, password) {
    console.log("code to authenticated.. ");
}

// function signup(email, password) {
//     console.log("code to signup.. ");
// }

const signup = () => {
    console.log("singup arrow funciton ");
}

/* 
    default export
    named export
*/

// module.exports = signup
// module.exports = login // default export  // only one default export per module. 

module.exports = {
    login: login,
    signup
}