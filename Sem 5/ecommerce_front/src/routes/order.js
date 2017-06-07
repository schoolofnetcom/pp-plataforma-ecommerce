const express = require('express')
const router = express.Router()

const isLoggedIn = require('./../services/account/loggedin')

router.get('/finished', isLoggedIn, require('./../services/order/finished'))
router.post('/', isLoggedIn, require('./../services/order/finish'))

module.exports = router