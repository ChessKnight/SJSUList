const express = require('express')
const router = express.Router()
const {
  getstudygroup,
  addStudyGroup,
  studyGroupId,
  getStudyGroupByUserId,
  updatStudyGroup,
  deleteStudyGroup,
  getStudyGroup
} = require("../controller/StudyGroupController");
    const{signiRequired}=require("../controller/RegistrationController");
    const {userId}=require("../controller/UserController");


router.get("/getstudygroup", getStudyGroup);
router.post("/addstudygroup/:userId", addStudyGroup);

//get studygroups posted by a person
router.get("/studygroupby/:userId", signiRequired, getStudyGroupByUserId);

//update item using item id
router.put("/updatestudygroup/:studygroupid", signiRequired, updatStudyGroup);

//remove item post from database
router.delete("/studygroupdelete/:studygroupid",signiRequired, deleteStudyGroup);

// any route containing :userId, our app will first execute userId()
router.param("userId", userId);
// any route containing :postId, our app will first execute itemdId()
router.param("studygroupid", studyGroupId);
module.exports = router;