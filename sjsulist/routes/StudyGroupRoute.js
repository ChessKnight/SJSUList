const express = require('express')
const router = express.Router()
const { getStudyGroup, addStudyGroup} = require('../controller/StudyGroupController');


router.get("/getstudygroup", getStudyGroup)
router.post("/addstudygroup", addStudyGroup)


module.exports = router;