const express = require('express')
const router = express.Router()

router.get('/', require('./../services/category/index'))
router.get('/new', require('./../services/category/new'))
router.get('/:id', require('./../services/category/show'))
router.post('/', require('./../services/category/create'))

router.put('/:id', require('./../services/category/update'))
router.delete('/:id', require('./../services/category/destroy'))

module.exports = router