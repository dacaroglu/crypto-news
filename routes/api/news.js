const express = require('express')
const router = express.Router()
const newsCTRL = require('../../controllers/news')

router.get('/news',newsCTRL.Index)
router.get('/news/archive',newsCTRL.ArchiveIndex)

module.exports = router