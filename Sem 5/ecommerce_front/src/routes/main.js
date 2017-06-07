const express = require('express')
const router = express.Router()

router.get('/', require('./../services/main/'))

module.exports = router