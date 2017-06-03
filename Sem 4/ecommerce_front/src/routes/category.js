const express = require('express')
const router = express.Router()

router.get('/:slug', require('./../services/category/show'))


module.exports = router