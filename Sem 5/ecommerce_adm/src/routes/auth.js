const express = require('express')
const router = express.Router()

router.get('/', require('./../services/auth/index'))
router.get('/logout', require('./../services/auth/logout'))
router.post('/', require('./../services/auth/login'))

module.exports = router