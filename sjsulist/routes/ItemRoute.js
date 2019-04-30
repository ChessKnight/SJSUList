const express = require('express')
const router = express.Router()
const { getItem, addItem } = require('../controller/ItemController')


router.get("/", getItem)
router.post("/addItem", addItem)


module.exports = router;