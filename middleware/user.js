const {User} = require("../db/index")

function userMiddleware(req, res, next) {
    // Implement user auth logic
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({
     username : username,
     password : password
    })
    .then(function(value){
     if(value){
         next();
     }
     else{
         res.status(403).json({
             msg:"user does not exist"
         })
     }
    })
 }
 
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected


module.exports = userMiddleware;