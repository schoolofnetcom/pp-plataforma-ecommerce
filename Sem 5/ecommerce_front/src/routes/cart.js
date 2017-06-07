const express = require('express')
const router = express.Router()

router.get('/:id', require('./../services/cart/show'))
router.post('/', require('./../services/cart/create'))
router.delete('/:id', require('./../services/cart/destroy'))

module.exports = router