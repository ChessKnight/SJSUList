const express = require("express");
const {allusers,userId} = require("../controller/UserController");

const router = express.Router();

router.get("/users", allusers);

// any route containing :userId, our app will first execute userId()
router.param("userId", userId);


module.exports = router;
