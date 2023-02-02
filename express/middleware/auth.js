const checkAuthnetication = (req, res, next) => {
    console.log("check user..");
    next()
}

// export default 
// module.exports = checkAuthnetication // default exprot


module.exports = { // named export
    checkAuthnetication: checkAuthnetication
}