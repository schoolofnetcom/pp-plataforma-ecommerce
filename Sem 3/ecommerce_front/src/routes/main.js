const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	return res.render('main/index', {
		title: 'Test Ecommerce',
		layout: 'layouts/base',
		user: req.user || undefined
	})
})

module.exports = router