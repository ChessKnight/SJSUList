const express = require('express')
const router = express.Router()
const {
  getstudygroup,
  addStudyGroup,
  studyGroupId,
  getStudyGroupByUserId,
  updatStudyGroup,
  deleteStudyGroup,
  getStudyGroup,
  joinstudygroup,
  leaveStudyGroup

} = require("../controller/StudyGroupController");
    const{signiRequired}=require("../controller/RegistrationController");
    const {userId}=require("../controller/UserController");


router.get("/getstudygroup", getStudyGroup);
router.post("/addstudygroup/:userId", addStudyGroup);

//get studygroups posted by a person
router.get("/studygroupby/:userId", getStudyGroupByUserId);

//update item using item id
router.put("/updatestudygroup/:studygroupid",  updatStudyGroup);

//remove item post from database
router.delete("/studygroupdelete/:studygroupid", deleteStudyGroup);

//join studygroup
router.put("/jointudygroup",signiRequired,joinstudygroup);

//leave study group
router.put("/leavestudygroup",signiRequired,leaveStudyGroup);

// any route containing :userId, our app will first execute userId()
router.param("userId", userId);
// any route containing :postId, our app will first execute itemdId()
router.param("studygroupid", studyGroupId);
module.exports = router;