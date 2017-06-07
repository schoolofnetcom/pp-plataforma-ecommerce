const express = require('express')
const router = express.Router()

const isLoggedIn = require('./../services/auth/loggedin')

router.get('/', isLoggedIn, require('./../services/user/index'))
router.get('/new', isLoggedIn, require('./../services/user/new'))
router.get('/:id', isLoggedIn, require('./../services/user/show'))
router.post('/', isLoggedIn, require('./../services/user/create'))

router.put('/:id', isLoggedIn, require('./../services/user/update'))
router.delete('/:id', isLoggedIn, require('./../services/user/destroy'))


module.exports = router