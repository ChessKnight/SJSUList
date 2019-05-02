const User = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

 
exports.registration = async (req, res) => {
   
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  const studentIdMatched = await User.findOne({ studentId: req.body.studentId});

  //checking for if there is an account with same student id
  if (studentIdMatched) return res.status(403).json({error: "Student alrady have an account"});
    
   //saving the new user
    const user = await new User(req.body);
    await user.save();
    res.status(200).json({ message: "Successfully created a new account!" });
};



exports.login = (req, res) => {
  
  const { studentId, password } = req.body;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')

  //finding the student id to create a token
  User.findOne({studentId} , (err, user) => {

    //checking if there is any error  
    if (err) return res.status(401).json({ message: "please use the correct id and password" });
     
    //checking if the id and password matches
    if (!user.passwordValidation(password)) 
      return res.status(401).json({ message: "please use the correct id and password" });
      
    //creating a new token with 1 hour expiration time
    const jwtToken = jwt.sign({ _id: user._id }, 'xyxyxyxy', {expiresIn: '1h'});
    
    //creating a cookie for the browser with new token and 1 hour expiration time
    res.cookie("t", jwtToken, { expires: new Date(Date.now() + 6000) ,httpOnly: false});
    
    //responding with user id, name , student id and token
    const { _id,  studentId, name } = user;
      
    res.status(200).send({ user: { _id, studentId, name }, jwtToken });

  });
};


exports.logout = (_req, res) => {
    res.clearCookie("t");
    return res.json({ message: "successfully logged out" });
};