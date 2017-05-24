const Customer = require('./../../schemas/customer')

module.exports = (req, res) => {
	Customer
		.findOne({
			slug: req.params.slug
		})
		.then((customer) => {
			if (!customer) {
				return res.redirect('/')
			}

			customer = customer.toObject()

			customer.birthday = customer.birthday.day + '/' + customer.birthday.month + '/' + customer.birthday.year 
			return res.render('account/my-account', {
				title: 'My Account',
				customer: customer,
				layout: 'layouts/main',
				user: req.user || undefined				
			})
		})
		.catch((error) => {
			return ''
		})
}