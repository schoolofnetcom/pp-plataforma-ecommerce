const express = require('express')
const router = express.Router()
const uploadS3 = require('./middleware/s3')

const isLoggedIn = require('./../services/auth/loggedin')

router.get('/', isLoggedIn, require('./../services/product/index'))
router.get('/new', isLoggedIn, require('./../services/product/new'))
router.get('/:id', isLoggedIn, require('./../services/product/show'))
router.post('/', isLoggedIn, uploadS3.array('images3', 1), require('./../services/product/create'))

router.put('/:id', isLoggedIn, require('./../services/product/update'))
router.delete('/:id', isLoggedIn, require('./../services/product/destroy'))

module.exports = router