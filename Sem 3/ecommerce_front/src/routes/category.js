const express = require('express')
const router = express.Router()

router.get('/:name', require('./../services/category/show'))


module.exports = router