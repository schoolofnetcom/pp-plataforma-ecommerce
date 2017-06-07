const express = require('express')
const router = express.Router()

router.get('/:slug', require('./../services/product/show'))

module.exports = router