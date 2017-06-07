const express = require('express')
const router = express.Router()

const isLoggedIn = require('./../services/auth/loggedin')

router.get('/', isLoggedIn, require('./../services/category/index'))
router.get('/new', isLoggedIn, require('./../services/category/new'))
router.get('/:id', isLoggedIn, require('./../services/category/show'))
router.post('/', isLoggedIn, require('./../services/category/create'))

router.put('/:id', isLoggedIn, require('./../services/category/update'))
router.delete('/:id', isLoggedIn, require('./../services/category/destroy'))

module.exports = router