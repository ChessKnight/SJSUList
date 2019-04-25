const express = require('express')
const router = express.Router()
const { getStudyGroup, addStudyGroup} = require('../controller/ItemController')


router.get("/getstudygroup", getStudyGroup)
router.post("/addstudygroup", addStudyGroup)


module.exports = router;