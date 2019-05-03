const express = require('express');
const router = express.Router();
const { getItem, addItem, itemId,getItemByUserId,updateItem,deleteItem,thePoster} = require('../controller/ItemController');
const {userId} = require("../controller/UserController");
const {signiRequired} = require("../controller/RegistrationController")


router.get("/", getItem);
router.post("/addItem/:userId",signiRequired, addItem);

router.get("/itemsby/:userId",signiRequired,getItemByUserId);

//update item using item id
router.put("/itemupdate/:postId",signiRequired,updateItem);

//remove item post from database
router.delete("/itemdelete/:postId",signiRequired,deleteItem);

// any route containing :userId, our app will first execute userId()
router.param("userId", userId);
// any route containing :postId, our app will first execute itemdId()
router.param("postId", itemId);


module.exports = router;