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

// exports.hasAuthorized = (req, res, next) => {
//   const authorization =
//     //This shows authorized user
//     req.Userprofile &&
//     req.authentication &&
//     req.Userprofile._id === req.authentication._id;
//   //is the user is not authorized
//   if (!authorization) {
//     return res.status(403).json({
//       error: "User is not authorised for this operation "
//     });
//   }
//   next();
// };


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
};

//get user by user id

exports.getUserById = (req,res) =>{
    //to hide the information for sensetive info we used undefined
    //with the request
    req.Userprofile.hashed_password = undefined; //to hide the hash apassword from console
    req.Userprofile.salt = undefined;
    //to get the user information from the profile we create in userId()
    return res.json(req.Userprofile)
};

exports.updateUser = (req, res, next) => {
  let user = req.Userprofile;
  //req.body is the incoming info for updates
  user = _.extend(user, req.body); //change the source object
  user.updated = Date.now(); //get the date tag
  user.save(err => {
    if (err) {
      return res.status(400).json({
        error: "You can't update user log in to start updating "
      });
    }
    //hide hashed_password and salt
    user.hashed_password = undefined;
    user.salt = undefined;
    //response with user information
    res.json({ user });
  });
};
