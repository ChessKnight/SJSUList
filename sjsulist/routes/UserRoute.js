const express = require("express");
const {allusers,userId, getUserById,updateUser} = require("../controller/UserController");
const {signiRequired} = require("../controller/RegistrationController");

const router = express.Router();

router.get("/users", allusers);
router.get("/userby/:userId",signiRequired,getUserById);

//we use put with updateuser 
router.put("/userby/:userId", signiRequired, updateUser);

// any route containing :userId, our app will first execute userId function on UserController
router.param("userId", userId);


module.exports = router;
