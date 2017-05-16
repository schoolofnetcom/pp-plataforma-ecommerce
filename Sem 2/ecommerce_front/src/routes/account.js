const express = require('express')
const router = express.Router()

const Customer = require('./../schemas/customer')

router.get('/', (req, res) => {
	return res.render('account/index', {
		title: 'Account',
		layout: 'layouts/main'
	})
})

router.get('/new', (req, res) => {
	const customer = new Customer()
	
	return res.render('account/new', {
		title: 'Account - Register',
		customer: customer,
		layout: 'layouts/main'
	})
})

router.post('/', (req, res) => {

})

module.exports = router