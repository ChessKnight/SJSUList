const _ = require("lodash");
const User = require("../model/UserModel");

exports.userId = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    //execute take two parameters and use callback function
    if (err || !user) {
      //check if there is error and no user
      return res.status(400).json({
        error: "User not available"
      });
    }
    //add new property in request object called Userprofile will contain user information
    req.Userprofile = user;
    next(); //The application will continoue to the next phase
  });
};

exports.hasAuthorized = (req, res, next) => {
  const authorization =
    //This shows authorized user
    req.Userprofile &&
    req.authentication &&
    req.Userprofile._id === req.authentication._id;
  //is the user is not authorized
  if (!authorization) {
    return res.status(403).json({
      error: "User is not authorised for this operation "
    });
  }
  next();
};


//show all users with information
exports.allusers = (req,res) =>{
    User.find((err,user) =>{
        if(err)
        {
            return res.status(400).json({
                error: err
            })
        }
        res.json({user});
    }).select("name email studentId") //the fiels we will return
}