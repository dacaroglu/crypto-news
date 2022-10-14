const express = require('express')
const router = express.Router()
const currenciesCTRL = require('../../controllers/currencies')

router.get('/', currenciesCTRL.index)

module.exports = router